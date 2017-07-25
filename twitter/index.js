import {Router} from 'express';
import { requestToken, oauth_access_token, oauth_authenticate} from './oauth';
import {getHomeTimeLine} from './twitterAPI';

const route = () => {
    Router.get('/requesttoken',(req,res, next)=>{
        requestToken(req.url)
            .then(result=>res.cookie('oauth_token',result['oauth_token'],'oauth_token_secret',result['oauth_token_secret']).status(200).send(result))
            .catch(error=>res.status(500).send(error));
    });
    Router.get('/authenticate',(req,res,next)=>{
        if(req.headers['oauth_token'])
            res.status(200).send(oauth_authenticate(req.headers['oauth_token']));
        else
            res.status(400).send("oauth_token in missing");
    });
    Router.get("/accesstoken",(req,res,next)=>{
        let access_vertifier = req.headers['access_vertifier'];
        let oauth_token = req.headers['oauth_token'];
        if(access_vertifier && oauth_token)
            oauth_access_token(access_vertifier,oauth_token)
                .then(result=> res.cookie('user_id',result['user_id'],'screen_name',result['screen_name']).status(200).send(result))
                .catch(error=> res.status(500).send('something went wrong'));
        else
            res.status(400).send('oauth_token and/or oauth_vertifier is missing ');
    });
    Router.get('/hometimeline',(req,res,next)=>{
        let oauth_token = req.headers['oauth_token'];
        let oauth_token_secret =req.headers['oauth_token_secret'];
        if(oauth_token && oauth_token_secret) {
            getHomeTimeLine(20,oauth_token,oauth_token_secret)
                .then(response=>res.status(200).send(response))
                .catch(error=>res.status(500).send(error));
        }else
            res.status(400).send('oauth_token or/and oauth_token_secret is missing ');
    })
};

export default route;