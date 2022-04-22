import { createSelector } from "reselect";

export const getOrderList = ({ orderList }) => orderList;

export const getFilterValue = ({ filterValue }) => filterValue;

export const getFilteredOrderList = createSelector(
  getOrderList,
  getFilterValue,
  (orderList, search) =>
    orderList.filter(
      ({ id, customerName }) =>
        id.includes(search) ||
        customerName.toLowerCase().includes(search.toLowerCase())
    )
);
