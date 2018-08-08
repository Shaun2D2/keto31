import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import autobind from 'react-autobind';

import { registerUser } from '../redux/reducers/auth';
import Card from '../components/Card';
import Input from '../components/Input';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      CarbCount: 100,
      processing: false,
    };

    autobind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { register, history } = this.props;
    const {
      FirstName,
      LastName,
      Email,
      Password,
      CarbCount,
    } = this.state;

    try {
      const payload = {
        FirstName,
        LastName,
        Email,
        Password,
        CarbCount,
      };

      this.setState({ processing: true });

      await register(payload);

      history.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {
      FirstName,
      LastName,
      Email,
      Password,
      processing,
      CarbCount,
    } = this.state;

    return (
      <div className="container" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 offset-sm-0">
            <Card>
              <form onSubmit={this.handleSubmit}>
                <h3 className="legend">Create Account</h3>
                <Input
                  label="First Name"
                  value={FirstName}
                  name="FirstName"
                  onChange={this.handleChange}
                  autofocus
                />
                <Input
                  label="Last Name"
                  value={LastName}
                  name="LastName"
                  onChange={this.handleChange}
                />
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
                <Input
                  label="Daily Carb Count"
                  value={CarbCount}
                  name="CarbCount"
                  onChange={this.handleChange}
                />

                <button
                  type="submit"
                  className="btn btn-lg btn-primary"
                  disabled={processing}
                >
                  Register
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
  register: payload => dispatch(registerUser(payload)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Register);

export { Register };
