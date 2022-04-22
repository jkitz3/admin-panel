import {
  SET_SEARCH_VALUE,
  CLEAR_SEARCH_VALUE,
  SEARCH_BY_PRESS_ENTER_BUTTON,
} from "../constants/actionTypes";

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});

export const clearSearchValue = () => ({
  type: CLEAR_SEARCH_VALUE,
});

export const searchByPressEnter = (payload) => ({
  type: SEARCH_BY_PRESS_ENTER_BUTTON,
  payload,
});
