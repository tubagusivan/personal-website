import { POSTS_FETCH_SUCCESS } from "./actionTypes";

export function fetchPostsSuccess(payload) {
    return {
        type: POSTS_FETCH_SUCCESS,
        payload
    }
}

export function fetchPosts() {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('posts.json', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            })
            const json = await response.json()
            console.log(json, 'ini data posts');
            dispatch(fetchPostsSuccess(json))
        } catch (error) {
            console.log(error, 'Error');
        }
    }
}