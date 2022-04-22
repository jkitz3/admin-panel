import { combineReducers } from "redux";

import { orderList, searchValue, filterValue } from "./";

export default combineReducers({
  orderList,
  searchValue,
  filterValue,
});
