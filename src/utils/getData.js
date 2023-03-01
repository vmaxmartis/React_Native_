import { useSelector } from "react-redux";

export function getData(item) {
  switch (item) {
    case "product": {
      return useSelector((state) => state.product.data);
    }
    case "productDetail": {
      return useSelector((state) => state.product.productDetail);
    }
    case "productFilter": {
      return useSelector((state) => state.product.dataFilter);
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
    default:
      break;
  }
}
