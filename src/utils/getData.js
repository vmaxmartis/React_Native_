import { useSelector } from "react-redux";

export function getData(item) {
   switch (item) {
      case "product": {
         return useSelector((state) => state.product.data);
         break;
      }
      case "productFilter": {
         return useSelector((state) => state.product.dataFilter);
         break;
      }
      case "resultFilter": {
         return useSelector((state) => state.product.ressultFilter);
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
