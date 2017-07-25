import { createStore, combineReducers, applyMiddleware } from 'redux';
import Middlewares from './middlewares';
import {browserHistory} from 'react-router';
import reducers from './reducers';
export const store = createStore(
        ...reducers,
    applyMiddleware(Middlewares)
);
export const history = browserHistory;
