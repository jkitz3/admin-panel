import { SET_SEARCH_VALUE, CLEAR_SEARCH_VALUE } from "../constants/actionTypes";

const initialState = "";

export const searchValue = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_VALUE:
      return payload;
    case CLEAR_SEARCH_VALUE:
      return "";
    default:
      return state;
  }
};
