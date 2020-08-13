import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from './constants'

export const servicesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case FETCH_SERVICES_SUCCESS: {
      return {
        data: action.payload,
        isLoading: false,
        isError: false
      }
    }
    case FETCH_SERVICES_FAILURE:
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