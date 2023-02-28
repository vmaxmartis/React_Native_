import { some } from "lodash";
export default function filterProducts(arr, dataFilter) {
  if (dataFilter.searchText) {
    return arr.filter((item) =>
      item.name
        .toLowerCase()
        .includes(dataFilter.searchText.toString().toLowerCase())
    );
  } else if (dataFilter.price) {
    const price = dataFilter.price;
    return arr.filter(
      (item) => item.price >= price.min && item.price <= price.max
    );
  } else if (dataFilter.distance) {
    const distance = dataFilter.distance;
    return arr.filter(
      (item) => item.distance >= distance.min && item.distance <= distance.max
    );
  } else if (dataFilter.category) {
    return arr.filter((item) =>
      some(dataFilter.category, (id) => item.categoryId === id)
    );
  } else {
    return [];
  }
}
