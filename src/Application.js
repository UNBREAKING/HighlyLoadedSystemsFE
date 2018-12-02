import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers'
import { App } from './components'

const history = createHistory()
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers(history),
  composeEnhancers(applyMiddleware(thunk, middleware))
);

const Application = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
export default Application