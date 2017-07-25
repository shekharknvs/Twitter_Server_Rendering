import { AuthorizationString , signature } from './helper';

export const getHomeTimeLine = (count=20,oauth_token ) => new Promise((resolve,reject)=>{
    let url =`https://api.twitter.com/1.1/statuses/home_timeline.json?count=${count}`;
    let Authorization = 'OAuth';
    let Authorization1 = AuthorizationString(oauth_token);
    Authorization1 += ' oauth_signature="' + signature('GET',url,Authorization1) + '"';
    fetch(url,{
        method:"GET",
        headers:new Headers({
            'Authorization':Authorization+Authorization1,
        })
    })
        .then(res=>resolve(res.json()))
        .catch(error=>reject(error));
});
