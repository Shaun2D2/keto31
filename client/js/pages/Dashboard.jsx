import CircularProgressbar from 'react-circular-progressbar';
import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import moment from 'moment';

import Card from '../components/Card';

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
      something: '',
    };
  }

  generateSlides() {
    const slides = [];

    for(let i = 0; i < 10 ; i += 1) {
      slides.push(
        <Card isFlex style={{ maxHeight: '100vh' }}>
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
        </Card>)
    }

    return slides
  }

  render() {
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

export default Dashboard;
