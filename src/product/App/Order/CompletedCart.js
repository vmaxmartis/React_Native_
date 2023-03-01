import React from "react";
import { getData } from "./../../../utils/getData";
import { CartItem } from "../../../components";
function CompletedCart() {
  const carts = getData("product");
  return (
    <>
      {carts.map((item, i) => {
        return <CartItem key={i} data={item} />;
      })}
    </>
  );
}

export default CompletedCart;
