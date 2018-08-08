import React from 'react';
import { Link } from 'react-router-dom';

import '../../sass/Home.scss';

const Home = () => (
  <div className="home">
    <h1 className="app-brand home__title">
      Keto31
    </h1>
    <div className="button-group">
      <Link to="register" className="button button-glass">
        Register
      </Link>
      <Link to="login" className="button button-glass">
        Login
      </Link>
    </div>
  </div>
);

export default Home;
