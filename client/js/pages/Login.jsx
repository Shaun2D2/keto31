import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import autobind from 'react-autobind';
import { connect } from 'react-redux';

import { loginUser } from '../redux/reducers/auth';
import Input from '../components/Input';
import Card from '../components/Card';

class Login extends Component {
  constructor(props) {
    super(props);

    autobind(this);

    this.state = {
      processing: false,
      Email: '',
      Password: '',
    };
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.setState({ processing: true });

    const { login, history } = this.props;
    const { Email, Password } = this.state;
    try {
      await login({ Email, Password });

      history.push('/dashboard');
    } catch (e) {
      this.setState({ processing: false, submitError: true });
    }
  }

  render() {
    const {
      Email,
      Password,
      submitError,
      processing,
    } = this.state;

    return (
      <div className="container" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 offset-sm-0">
            <Card>
              <form onSubmit={this.handleSubmit}>
                <h3 className="legend">Login</h3>
                <Input
                  label="Email"
                  type="email"
                  value={Email}
                  name="Email"
                  onChange={this.handleChange}
                />
                <Input
                  label="Password"
                  type="password"
                  value={Password}
                  name="Password"
                  onChange={this.handleChange}
                />
                {submitError && (
                  <p className="text-danger">Invalid Login, try again</p>
                )}
                <button
                  type="submit"
                  className="btn btn-lg btn-primary"
                  disabled={processing}
                >
                  Login
                </button>
                <Link to="/" className="btn btn-lg btn-link">
                  Nevermind
                </Link>
              </form>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(loginUser(payload))
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
