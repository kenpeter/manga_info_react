// react
import React from 'react';

// react dom
import ReactDOM from 'react-dom';

// router as component
// route as component
// index route as component
// browser history as props
// from react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// view app, home, about
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

import '../scss/app.scss';

// react dom render
// router, history, browser history
// route path, component app, parent
// index route, home.
// route path, about, component, about
ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } />
    </Route>
  </Router>,
  document.getElementById('app') // eslint-disable-line
);
