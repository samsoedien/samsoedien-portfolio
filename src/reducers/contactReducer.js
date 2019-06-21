import { GET_ERRORS, CLEAR_ERRORS, GET_CONFIRMATION } from '../constants/types';

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ERRORS:
      return payload;
    case CLEAR_ERRORS:
      return {};
    case GET_CONFIRMATION:
      return payload;
    default:
      return state;
  }
}
