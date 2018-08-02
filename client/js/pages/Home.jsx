import React from 'react';
import { Link } from 'react-router-dom';

import '../../sass/Home.scss';

const Home = () => (
  <div className="home">
    <h1 className="app-brand home__title">
      Keto31
    </h1>
    <Link to="register">
      Register
    </Link>
    <Link to="login">
      Login
    </Link>
  </div>
);

export default Home;
