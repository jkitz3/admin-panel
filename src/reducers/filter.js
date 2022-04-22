import {
  CLEAR_SEARCH_VALUE,
  SEARCH_BY_PRESS_ENTER_BUTTON,
} from "../constants/actionTypes";

const initialState = "";

export const filterValue = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_BY_PRESS_ENTER_BUTTON:
      return payload;
    case CLEAR_SEARCH_VALUE:
      return "";
    default:
      return state;
  }
};
