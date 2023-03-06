import { StyleSheet, View } from "react-native";
import React from "react";
import { HeaderApp } from "../../../components";
import { theme } from "./../../../../src/theme/theme";
import WithSafeArea from "../../../Config/safeArea";
import CarouselSlider from "./CarouselSlider";
import InfoProduct from "./InfoProduct/index";
import { useDispatch } from "react-redux";
import { setFavorite, getProduct } from "../../../redux/slide/productSlide";
import { addToCart } from "../../../redux/slide/cartSlide";
import { getData } from "./../../../utils/getData";
import ConfirmAlert from "../../../utils/alert";

const Detail = ({ route, navigation }) => {
  const { productId } = route.params;
  const prod = getData("productDetail");
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProduct(productId));
  }, []);
  const [color, getColor] = React.useState(theme.primary);

  const handleAddtoCart = () => {
    const payload = {
      id: prod.id,
      name: prod.name,
      description: prod.description,
      price: prod.price,
      imageSource: prod.imageSource,
      backgroundColor: prod.backgroundColor,
    };
    Object.assign(payload, { color: color, quanlity: 1 });
    ConfirmAlert({
      title: `Be sure to add ${payload.name} for ${payload.price}$ to your cart?`,
      message: `Color of your choice : ${payload.color}`,
      onPressOk: () => {
        dispatch(addToCart(payload));
        navigation.navigate("Cart");
      },
    });
  };
  const handleToggleFavorite = () => {
    const payload = {
      id: prod.id,
      favorite: !prod.favorite,
    };
    dispatch(setFavorite(payload));
  };

  return (
    <View style={[styles.container]}>
      {prod && (
        <>
          <HeaderApp
            style={styles.header}
            iconRight={"heart"}
            showGoBack
            selectedIcon={prod.favorite}
            isButton
            onPressRightIcon={handleToggleFavorite}
          />
          <CarouselSlider
            style={styles.slider}
            imageSources={[
              prod.imageSource,
              prod.imageSource,
              prod.imageSource,
            ]}
          />
          <InfoProduct
            navigate={navigation}
            getColor={getColor}
            product={prod}
            onPressButton={handleAddtoCart}
          />
        </>
      )}
    </View>
  );
};
export default WithSafeArea(Detail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    paddingHorizontal: 15,
  },
  slider: {
    width: "100%",
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "#f7f7f8",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
