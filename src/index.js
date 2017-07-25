import React from 'react';
import {render} from 'react-dom';
import { Router , browserHistory } from 'react-router';
import Main from './config';
import {  CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux';
import { store } from './store';


render(<Provider store={store}>
    <CookiesProvider>
        <Router history={browserHistory}>
            {Main}
        </Router>
    </CookiesProvider>
</Provider>,
    document.getElementById("app"));