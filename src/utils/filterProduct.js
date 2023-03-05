import { some, isEmpty } from "lodash";
export default function filterProducts(arr, dataFilter) {
  const selectedCategory = dataFilter.category;
  console.log("selectedCategory:", selectedCategory);
  const filterByCategory = arr.filter((item) =>
    selectedCategory.includes(item.categoryId)
  );
  console.log(
    "filterByCategory:",
    filterByCategory,
    "check",
    isEmpty(selectedCategory)
  );
  const result = (isEmpty(selectedCategory) ? arr : filterByCategory).filter(
    (item) => {
      const price = dataFilter.price;
      const distance = dataFilter.distance;
      return (
        item.price >= price.min &&
        item.price <= price.max &&
        item.distance >= distance.min &&
        item.distance <= distance.max
      );
    }
  );
  return result;
}
