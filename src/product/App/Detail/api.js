import colors from "../../../FakeData/Color";
import products from "../../../FakeData/products";

export const getProduct = (id) => {
  const product = products.find((item) => item.id === id);
  if (product) {
    return product;
  } else {
    return [];
  }
};

export const getColors = (productId) => {
  const col = colors.filter((item) => item.productId === productId);
  if (col) {
    return col;
  } else {
    return {
      id: 2,
      productId: 2,
      label: "Yellow",
      code: "#f4e5c4",
      quantity: 0,
    };
  }
};
