import { CONSUMER_KEY , CONSUMER_SECRET} from './config';
import crypto from 'crypto';
import quertString from 'querystring';
import Buffer from 'buffer';

export const nonceGenerator = () => {
    let result = '';
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0;i<32;i++) {
        result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return new Buffer(quertString.stringify(result)).toString('base64');
};


export const signature = (Method,URL,AuthorizationString, secret)=>{
    let baseString = `${Method.toUpperCase()}&${quertString.stringify(URL)}&${quertString.stringify(AuthorizationString)}`;
    let Secret = (secret)?secret:CONSUMER_SECRET;
    return crypto.createHmac('SHA1',Secret).update(baseString).digest('base64');
};

export const AuthorizationString = (oauth_token) =>{
    let AuthorizationString = '';
    AuthorizationString += 'oauth_consumer_key="'+ CONSUMER_KEY +'",';
    AuthorizationString += ' oauth_nonce="'+ nonceGenerator() + '",';
    AuthorizationString += ' oauth_signature_method="HMAC-SHA1",';
    AuthorizationString += ' oauth_timestamp="' + Number(new Date()) + '",';
    AuthorizationString += ' oauth_version="1.0",';
    if(oauth_token)
        AuthorizationString += ' oauth_token="'+ oauth_token +'",';
    console.log("Auz" , AuthorizationString);
    return AuthorizationString
};