import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
} from './constants'

export const contactsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case FETCH_CONTACTS_SUCCESS: {
      return {
        data: action.payload,
        isLoading: false,
        isError: false
      }
    }
    case FETCH_CONTACTS_FAILURE:
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