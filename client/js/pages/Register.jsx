import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submitting!');
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
    } = this.state;

    return (
      <div className="container" style={{ margin: 100 }}>
        <Card>
          <form onSubmit={this.handleSubmit}>
            <h3 className="legend">Create Account</h3>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                name="lastName"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-primary">Register</button>
            <Link to="/" className="btn btn-lg btn-link">Nevermind</Link>
          </form>
        </Card>
      </div>
    );
  }
}

export default Register;
