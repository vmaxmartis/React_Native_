import { isEmpty } from "lodash";
export default function filterProducts(arr, dataFilter) {
  const filterByCategory = arr.filter((item) =>
    dataFilter.category.lenght > 0
      ? dataFilter.category.includes(item.categoryId)
      : item.categoryId
  );
  const result = filterByCategory.filter((item) => {
    const price = dataFilter.price;
    const distance = dataFilter.distance;
    return (
      item.price >= price.min &&
      item.price <= price.max &&
      item.distance >= distance.min &&
      item.distance <= distance.max
    );
  });
  return result;
}
