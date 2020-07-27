import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE
} from './constants';

export const usersReducer = (state, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case FETCH_USERS_SUCCESS: {
            return {
                data: action.payload,
                isLoading: false,
                isError: false
            }
        }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}