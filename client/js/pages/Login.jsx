import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import autobind from 'react-autobind';

import Input from '../components/Input';
import Card from '../components/Card';

class Login extends Component {
  constructor(props) {
    super(props);

    autobind(this);

    this.state = {
      Email: '',
      Password: '',
    };
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit() {
    // do a thing
  }

  render() {
    const { Email, Password } = this.state;

    return (
      <div className="container" style={{ margin: 100 }}>
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
                <button
                  type="submit"
                  className="btn btn-lg btn-primary"
                  disabled={false}
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

export default Login;
