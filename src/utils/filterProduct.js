import { some } from "lodash";
export default function filterProducts(arr, dataFilter) {
  return arr.filter((item) => {
    const distance = dataFilter.distance;
    const conditionC =
      item.distance >= distance.min && item.distance <= distance.max;
    const price = dataFilter.price;
    const conditionB = item.price >= price.min && item.price <= price.max;

    const conditionA =
      dataFilter.category.lenght > 0
        ? some(dataFilter.category, (id) => item.categoryId === id)
        : true;
    if (!conditionA) {
      if (!conditionB) {
        return conditionC;
      }
    } else if (conditionC) {
      if (conditionB) {
        return conditionB && conditionC;
      }
    } else {
      return conditionA && conditionB && conditionC;
    }
  });
}
