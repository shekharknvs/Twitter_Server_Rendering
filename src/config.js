import React, {Component}  from 'react';
import { Route , Router, browserHistory , IndexRoute , Redirect} from 'react-router';
import Home from './components/Home';
import Tweet from './components/Tweet';
import Login from './components/Login';
import App from './components/App';
import { history, store } from './store';
import CallHandler from './components/Callback';
let isauth = store.getState();

const APP =(
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/tweet/:tweetId" component={Tweet}/>
            <Route path="/callback" component={CallHandler}/>
        </Route>
);


export default APP;