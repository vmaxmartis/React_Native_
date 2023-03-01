import React from "react";
import { getData } from "./../../../utils/getData";
import CartItem from "./CartItem";

function CompletedCart() {
  const carts = getData("product");
  return (
    <>
      {carts.map((item, i) => {
        return (
          <CartItem
            key={i}
            name={item.name}
            price={item.price}
            imageSource={item.imageSource}
            imageBackgroundColor={item.backgroundColor}
          />
        );
      })}
    </>
  );
}

export default CompletedCart;
