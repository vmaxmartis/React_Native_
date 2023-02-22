import products from "../../../FakeData/products";

export const getProduct = (id) => {
  const product = products.find((item) => item.id === id);
  if (product) {
    return product;
  } else {
    return [];
  }
};
