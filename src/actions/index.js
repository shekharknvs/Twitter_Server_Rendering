import { GET_UPDATED_TWEETS , GET_ACCESS_TOKEN , ADD_TWEETS , ACCESS_TOKEN, FETCH_TWEETS, ADD_DISLIKE, ADD_LIKE,
    REMOVE_DISLIKE,REMOVE_LIKE,TOKEN} from '../constants';

export const getAccessToken = (payload) =>{
    return{
        type:GET_ACCESS_TOKEN,
        payload
    }
};

export const getUpdatedTweets = (payload) =>{
    return{
        type:GET_UPDATED_TWEETS,
        payload
    }
};

export const addTweets = (payload)=>{
    return {
        type:ADD_TWEETS,
        payload
    }
};

export const accessToken = (payload)=>{
    return{
        type:ACCESS_TOKEN,
        payload
    }
};

export const fetchTweets = (payload)=>{
    return{
        type:FETCH_TWEETS,
        payload
    }
};

export const addView = (payload)=>{
    return{
        type:FETCH_TWEETS,
        payload
    }
};

export const addLike = (payload)=>{
    return{
        type:ADD_LIKE,
        payload
    }
};

export const removeLike = (payload) =>{
    return{
        type:REMOVE_LIKE,
        payload
    }
};

export const addDislike = (payload)=>{
    return{
        type:ADD_DISLIKE,
        payload
    }
};

export const removeDislike = (payload)=>{
    return{
        type:REMOVE_DISLIKE,
        payload
    }
};
