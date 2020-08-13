import {
  FETCH_TARIFFS_REQUEST,
  FETCH_TARIFFS_SUCCESS,
  FETCH_TARIFFS_FAILURE,
} from './constants'

export const tariffsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TARIFFS_REQUEST:
      return {
        ...state,
        isLoadingTariffs: true,
        isError: false
      }
    case FETCH_TARIFFS_SUCCESS: {
      return {
        data: action.payload,
        isLoadingTariffs: false,
        isError: false
      }
    }
    case FETCH_TARIFFS_FAILURE:
      return {
        ...state,
        data: [],
        isLoadingTariffs: false,
        isError: true
      }
    default:
      return state
  }
}