import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { HeaderApp } from "../../../components";
import { theme } from "./../../../../src/theme/theme";
import WithSafeArea from "../../../Config/safeArea";
import CarouselSlider from "./CarouselSlider";
import { getProduct } from "./api";
import InfoProduct from "./InfoProduct/index";

const Detail = ({ route, navigation }) => {
  const { productId } = route.params;
  const product = getProduct(productId);

  return (
    <View style={[styles.container]}>
      <HeaderApp style={styles.header} showGoBack icon="favorite" />
      <CarouselSlider
        style={styles.slider}
        imageSources={[
          product.imageSource,
          product.imageSource,
          product.imageSource,
        ]}
      />
      <InfoProduct product={product} />
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
