import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import autobind from 'react-autobind';

import { loginUser } from '../redux/reducers/auth';
import Card from '../components/Card';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
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

    const { login, history } = this.props;
    const {
      FirstName,
      LastName,
      Email,
      Password,
    } = this.state;

    try {
      const payload = {
        FirstName,
        LastName,
        Email,
        Password,
      };

      this.setState({ processing: true });

      await login(payload);

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
      processing
    } = this.state;

    return (
      <div className="container" style={{ margin: 100 }}>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 offset-sm-0">
            <Card>
              <form onSubmit={this.handleSubmit}>
                <h3 className="legend">Create Account</h3>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={FirstName}
                    name="FirstName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={LastName}
                    name="LastName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={Email}
                    name="Email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={Password}
                    name="Password"
                    onChange={this.handleChange}
                  />
                </div>
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
  login: payload => dispatch(loginUser(payload))
});

export default connect(
  null,
  mapDispatchToProps,
)(Register);

export { Register };
