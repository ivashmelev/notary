import {
  FETCH_SECTIONS_REQUEST,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
  UPDATE_ID_SECTIONS
} from './constants'

export const sectionsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SECTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case FETCH_SECTIONS_SUCCESS: {
      const { data, selectID } = action.payload
      return {
        sections: data,
        selectID,
        isLoading: false,
        isError: false
      }
    }
    case FETCH_SECTIONS_FAILURE:
      return {
        ...state,
        sections: [],
        selectID: '',
        isLoading: false,
        isError: true
      }
    case UPDATE_ID_SECTIONS:
      return {
        ...state,
        selectID: action.payload,
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
}