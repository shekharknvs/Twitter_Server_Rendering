import { AuthorizationString, signature } from './helper';

export const requestToken = (URL) =>new Promise((resolve,reject)=>{
    let callback = encodeURIComponent(`${URL}/callback`);
    let url ='https://api.twitter.com/oauth/request_token';
    let Authorization = 'OAuth ';
    let Authorization1 ='oauth_callback="'+callback+'"';
    Authorization1 += AuthorizationString();
    Authorization1 += ' oauth_signature="'+signature("POST",url, Authorization1) + '"';
    console.log("Authorization1",Authorization1);
    fetch(url,{
        method:'POST',
        headers:new Headers({
            'Authorization':Authorization + Authorization1
        }),
        mode:'no_cors'
    })
        .then((response)=>{
            resolve(response.json());
        })
        .catch((error)=>{
            reject(error.status);
        })

});

export const oauth_authenticate = oauth_token =>'https://api.twitter.com/oauth/authenticate?oauth_token='+oauth_token;

export const oauth_access_token = (oauth_verifier, oauth_token,oauth_token_secret) => new Promise((resolve,reject)=>{
    let url = "https;//api.twitter.com/oauth/access_token";
    let Authorization = 'OAuth ';
    let Authorization1 = AuthorizationString(oauth_token);
    Authorization1 += 'oauth_signature=\"'+signature(POST,url, Authorization1,oauth_token_secret);
    fetch(url, {
        method:"POST",
        headers:new Headers({
            'Authorization':Authorization + Authorization1,
            'Content-Type':'application/x-www-form-urlencoded'
        }),
        body:'oauth_verifier='+oauth_verifier
    }).then(response=> resolve(response.json()))
        .catch(error=>reject(error.status));
});