import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './src/components/Home';
import About from './src/components/About';

render((
  <Router>
    <div className="wrapper">
      <ul role="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <Route path="/" component={Home} />
      <Route path="/about" component={About}/>
    </div>
  </Router>
), document.getElementById('root'));
