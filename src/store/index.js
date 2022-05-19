import { applyMiddleware, compose, createStore, } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware]

const reducers = rootReducer

// console.log(rootReducer)

const devTools =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : null;

const createAppStore = () => {
  const store = configureStore({
      reducer:reducers,
      devTools:devTools,
      middleware:middleware
  });
  sagaMiddleware.run(mySaga)
  return store
};

export default createAppStore;
