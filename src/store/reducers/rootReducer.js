import { POSTS_FETCH_SUCCESS } from '../action/actionTypes'

const defaultValue = { posts: [] }

export default function itemsReducer(state = defaultValue, action) {
    if (action.type === POSTS_FETCH_SUCCESS) {
        return {
            ...state,
            posts: action.payload
        }
    }
    
    return state
}