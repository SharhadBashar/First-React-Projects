import _ from 'lodash';
import jsonPlaceholder from '../API/JSONPlaceholder';

//Action creators dont work with async await
//It returns the thing from await, and since this is not a plain action object, it doesnt work
//Redux thunk relaxes these rules but we need to use dispatch to return the action

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        //const userIds = _.uniq(_.map(getState().posts, 'userId'));
        //userIds.forEach((id) => dispatch(fetchUser(id)));

        //This chain does exactly what the two commented out line above does
        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach((id) => dispatch(fetchUser(id)))
            .value();
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts')
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
}

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    }
}


/*
export const fetchUser = (id) => {
    return (dispatch) => {
        _fetchUser(id, dispatch);
    }
}
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});*/