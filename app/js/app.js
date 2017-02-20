// react
import React from 'react';

// react dom
import ReactDOM from 'react-dom';

// create store
// combine reducers
import { createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';

// router as component
// route as component
// index route as component
// browser history as props
// from react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// sync history with store, trick
// router reducer
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// rooter reducer
import rootReducer from "./rootReducer";


// view app, home, about
import App from './components/App';
import Home from './components/Home';
import Manga from './components/Manga';
import Chapter from './components/Chapter';

import '../scss/app.scss';


// const
// store
// create store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, promise()),
    window.devToolsExtension ? window.devToolsExtension() : f => f // see redux state in chrome
  )
);


// Create an enhanced history 
// that syncs navigation events 
// with the store
const history = syncHistoryWithStore(browserHistory, store);


// react dom render
// router, history, browser history
// route path, component app, parent
// index route, home.
// route path, about, component, about
ReactDOM.render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home } />
        <Route path='/manga/:mangaId' component={ Manga } />
        <Route path='/chapter/:chapterId/:mangaId' component={ Chapter } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app') // eslint-disable-line
);

