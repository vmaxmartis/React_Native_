import { useSelector } from "react-redux";

export function getData(item) {
  switch (item) {
    case "product": {
      return useSelector((state) => state.product.data);
    }
    case "productDetail": {
      return useSelector((state) => state.product.productDetail);
    }
    case "ressultFilter": {
      return useSelector((state) => state.product.ressultFilter);
    }
    case "user": {
      return useSelector((state) => state.user);
    }
    case "cart": {
      return useSelector((state) => state.cart.data);
    }
    case "recent": {
      return useSelector((state) => state.recents.data);
    }
    default:
      break;
  }
}
