import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import promise from 'redux-promise';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

// browserrouter integrates with history
// Route is a react component that we can render in any other component

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// need a Div to wrap them

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew}/>
        <Route path="/" component={PostsIndex}/>
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
