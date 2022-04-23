import {
  SET_SEARCH_VALUE,
  CLEAR_SEARCH_VALUE,
  SEARCH_BY_PRESS_ENTER_BUTTON,
  TOGGLE_FILTERS,
} from "../constants/actionTypes";

const initialState = {
  searchFor: "",
  orderDateFrom: "",
  orderDateTo: "",
  orderStatus: "",
  orderAmountFrom: "",
  orderAmountTo: "",
  isFilterVisible: false,
};

export const filterValue = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SEARCH_BY_PRESS_ENTER_BUTTON:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CLEAR_SEARCH_VALUE:
      return {
        ...state,
        [action.name]: "",
      };
    case TOGGLE_FILTERS:
      return {
        ...state,
        isFilterVisible: !state.isFilterVisible,
      };
    default:
      return state;
  }
};
