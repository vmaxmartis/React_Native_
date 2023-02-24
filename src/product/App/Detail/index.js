import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { HeaderApp } from "../../../components";
import { theme } from "./../../../../src/theme/theme";
import WithSafeArea from "../../../Config/safeArea";
import CarouselSlider from "./CarouselSlider";
// import { getProduct } from "./api";
import InfoProduct from "./InfoProduct/index";
import { useSelector, useDispatch } from "react-redux";
import { setFavorite, getProduct } from "../../../redux/slide/productSlide";
import { Button } from "@rneui/base";

const Detail = ({ route, navigation }) => {
  const [selectedIcon, setSelectedIcon] = useState(false);
  const { productId } = route.params;
  const productsRedux = useSelector((state) => state.product.productDetail); // []
  console.log("productsRedux:", productsRedux);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  const handleToggleFavorite = () => {
    const payload = {
      id: productsRedux.id,
      favorite: !productsRedux.favorite,
    };
    dispatch(setFavorite(payload));
  };
  React.useEffect(() => {
    setSelectedIcon(productsRedux.favorite);
  }, [productsRedux]);

  return (
    <View style={[styles.container]}>
      {productsRedux && (
        <>
          <HeaderApp
            style={styles.header}
            iconRight={"heart"}
            showGoBack
            selectedIcon={selectedIcon}
            onPressRightIcon={handleToggleFavorite}
          />
          <CarouselSlider
            style={styles.slider}
            imageSources={[
              productsRedux.imageSource,
              productsRedux.imageSource,
              productsRedux.imageSource,
            ]}
          />
          <InfoProduct
            product={productsRedux}
            onPressButton={handleToggleFavorite}
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
  productName: {
    fontSize: 26,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 26,
    fontWeight: "bold",
  },
  productDescription: {
    minHeight: 100,
    maxHeight: 100,
    marginTop: 10,
    marginBottom: 15,
  },
  productDescriptionText: {
    color: theme.textDarkGray,
    lineHeight: 22,
  },
  quantityLabel: {
    marginBottom: 5,
    color: theme.textDarkGray,
  },
  quantityNumber: {
    fontWeight: "bold",
    color: "#000",
  },
  colorLabel: {
    marginTop: 10,
    fontSize: 18,
    color: theme.textDarkGray,
  },
  colorContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  addToCart: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
