import './scss/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider} from "react-redux";
import api from './middlewares/api'
import Root from './components/Root'
import reducers from "./reducers"

const Store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk, api),
    // applyMiddleware(thunk, logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
)

render(
  <Provider store={Store} >
    <Root />
  </Provider>,
  document.getElementById('root')
)
