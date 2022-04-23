import { createSelector } from "reselect";
import { getFilterValue } from "./filter";

export const getOrderList = ({ orderList }) => orderList;

export const getFilteredOrderList = createSelector(
  getOrderList,
  getFilterValue,
  (orderList, { searchFor }) =>
    orderList.filter(
      ({ id, customerName }) =>
        id.includes(searchFor) ||
        customerName.toLowerCase().includes(searchFor.toLowerCase())
    )
);
