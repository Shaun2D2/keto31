import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Nav from './components/Nav';

import '../sass/main.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/settings" component={Settings} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
