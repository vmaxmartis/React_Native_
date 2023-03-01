import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { HeaderApp } from "../../../components";
import { theme } from "./../../../../src/theme/theme";
import WithSafeArea from "../../../Config/safeArea";
import CarouselSlider from "./CarouselSlider";
import InfoProduct from "./InfoProduct/index";
import { useSelector, useDispatch } from "react-redux";
import { setFavorite, getProduct } from "../../../redux/slide/productSlide";
import { Button } from "@rneui/base";

const Detail = ({ route, navigation }) => {
  const { productId } = route.params;
  const prod = useSelector((state) => state.product.productDetail); // []
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

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
            product={prod}
            onPressButton={() => navigation.navigate("Cart")}
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
