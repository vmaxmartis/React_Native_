import { some } from "lodash";
export default function checkAndUpdateListCart(ob, arr) {
  //   const existing = some(arr, (item) => item.id === ob.id);
  const existing = arr.find((item) => item.id === ob.id);
  if (existing) {
    existing.quanlity++;
  } else {
    arr.push(ob);
  }
  return arr;
}
