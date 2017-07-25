
import { combineReducers } from 'redux';
import {ADD_TWEETS, ACCESS_TOKEN} from '../constants'

const tweets = (state=[],action) =>{
    if(action.type === ADD_TWEETS)
        return [...action.payload];
    else state;
};
const token = (state={},action)=>{
    if(action.type === ACCESS_TOKEN)
        return action.payload;
    else
        return state;
};

export default combineReducers({
    tweets,
    token
})