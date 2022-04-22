import { TableContent } from "../../features/adminPanel/components";
import { useSelector } from "react-redux";
import { getFilteredOrderList } from "../../selectors";

export const OrderListContainer = () => {
  const orderList = useSelector(getFilteredOrderList);

  return <TableContent orderList={orderList}></TableContent>;
};
