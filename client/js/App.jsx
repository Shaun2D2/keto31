import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

import store from './redux/store';

import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import Home from './pages/Home';

import '../sass/main.scss';

const App = () => (
  <Provider store={store()}>
    <BrowserRouter>
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
