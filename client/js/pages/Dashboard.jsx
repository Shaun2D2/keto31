import CircularProgressbar from 'react-circular-progressbar';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';
import moment from 'moment';

import Card from '../components/Card';
import { fetchEntries } from '../redux/reducers/entries';

import 'react-circular-progressbar/dist/styles.css';
import '../../sass/Dashboard.scss';

const CARB_DATA = [
  {
    entry: 7,
    date: 1533258463,
  },
  {
    entry: 3,
    date: 1533258463,
  },
  {
    entry: 15,
    date: 1533258463,
  },
  {
    entry: 15,
    date: 1533258463,
  },

];

const MAX_CARBS = 50;
const percentage = 50;

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const { getEntries } = this.props;
    try {
      await getEntries();

      this.setState({ loading: false });
    } catch (e) {
      console.log(e);
    }
  }

  generateSlides() {
    const { entries, carbLimit } = this.props;
    const slides = new Array(moment().daysInMonth());
    // const carbPercent = carbLimit /
debugger;
    slides.map((slide, index) => {
      // debugger;
      // const totalDailyCarbCount = entries.filter(
      //   entry => moment(entry.CreatedAt).format('M-DD-YYYY') === moment().format(`M-${index + 1}-YYYY`)
      // );

      return (
        <Card isFlex isGlass style={{ maxHeight: '100vh', marginTop: 25 }}>
          <CircularProgressbar
              percentage={percentage}
              text={`${percentage}%`}
              strokeWidth={4}
              styles={{ root: { width: 150 } }}
            />

          {/*
          <div className="dashboard__date-circle">
            <div>Aug {i}</div>
          </div>
          */}
          {
            CARB_DATA.map(item => (
              <div style={{ width: '100%', padding: 5, fontSize: '1.5em' }}>
                <hr />
                {item.entry}
              </div>
            ))
          }
        </Card>
      );
    });

    return slides;
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <h1>
          Loading...
        </h1>
      );
    }

    const allSlides = this.generateSlides();

    return (
      <div className="dashboard">
        <div>
          <Carousel
            renderTopCenterControls={() => null}
            renderCenterLeftControls={() => null}
            renderCenterRightControls={() => null}
            renderBottomCenterControls={() => null}
            cellSpacing={25}
            slideIndex={allSlides.length - 1}
            dragging
          >
            {this.generateSlides()}
          </Carousel>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carbLimit: state.getIn(['user', 'CarbCount']),
  entries: state.get('entries'),
});

const mapDispatchToProps = dispatch => ({
  getEntries: () => dispatch(fetchEntries()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export { Dashboard };
