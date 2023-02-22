export default function filterProducts(arr, keyword, minPrice, maxPrice) {
  if (keyword.trim().length > 0) {
    return arr.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
  } else if (minPrice && maxPrice) {
    return arr.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
  } else {
    return arr;
  }
}