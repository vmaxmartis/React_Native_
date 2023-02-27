import { useSelector, useDispatch } from "react-redux";

export function getData(item) {
  switch (item) {
    case "product": {
      return useSelector((state) => state.product.data);
      break;
    }
    case "user": {
      return useSelector((state) => state.user);
      break;
    }
    default:
      break;
  }
}
