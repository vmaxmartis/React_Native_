import products from "../../../FakeData/products";
export const getProduct = (id) => {
  const product = products.find((item) => item.id === id);
  return product;
};
