"use strict";

function filterOrdersByStatus(array, status) {
  return array.filter((item) => item["orderStatus"] === status);
}
