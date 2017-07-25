import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import compression from 'compression';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext , createRoutes, match} from 'react-router';
import { Provider } from 'react-redux';
import {store} from './src/store';
import { CookiesProvider , withCookies } from 'react-cookie';
import Main from './src/config';
import NotFound from './src/components/NotFound';
import Twitter from './twitter/index';
const app = express();
app.use(compression());

app.use(express.static(path.resolve(__dirname, '.', 'dist')));
app.use(cookieParser());

app.use('/oauth/',Twitter);

function createPage(html,attachBundle) {
    var script = attachBundle ? '<script src="/bundle.js"></script>' : '';
    return `
  	  <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Twitter Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta charSet="utf8" />
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
      ${script}
      </html>
      `
}

app.use((req, res) => {
    match({ routes:Main, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
        res.status(500).send(error.message);
    } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
        res.status(200).send(createPage(renderToString(
            <CookiesProvider cookies={req.cookies}>
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            </CookiesProvider>),true));
    } else {
        res.status(404).send(createPage(renderToString(<NotFound/>),false));
    }
});
});

const port = process.env.PORT || 8080;
console.log('listening...' + port);
app.listen(port);
