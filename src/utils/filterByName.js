export default function filterByName(arr, keyword) {
  if (keyword) {
    return arr.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
