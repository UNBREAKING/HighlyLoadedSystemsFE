import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers'
import SignInMiddleware from './components/Login/middleware'
import { App } from './components'

const history = createHistory()
const RouterMiddleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  thunk,
  RouterMiddleware,
  SignInMiddleware
]

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(
  reducers(history),
  enhancer
);

const Application = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
export default Application