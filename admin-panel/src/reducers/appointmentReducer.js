import {
  FETCH_APPOINTMENT_REQUEST,
  FETCH_APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_FAILURE,
} from './constants'

export const appointmentReducer = (state, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case FETCH_APPOINTMENT_SUCCESS: {
      return {
        data: action.payload,
        isLoading: false,
        isError: false
      }
    }
    case FETCH_APPOINTMENT_FAILURE:
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