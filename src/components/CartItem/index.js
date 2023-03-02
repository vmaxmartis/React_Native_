import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SpaceBetween from "../SpaceBw";
import PropTypes from "prop-types";
import QuanityCart from "./quanityCart";

const CartItem = ({ isCart, style, data, onChangeQuantity, onDelete }) => {
  return (
    <SpaceBetween style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.image, { backgroundColor: data.backgroundColor }]}
          source={data.imageSource}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.nameText}>{data.name}</Text>
        <Text style={styles.priceText}>${data.price}</Text>
      </View>
      {isCart && (
        <QuanityCart
          onDelete={onDelete}
          onChangeQuantity={onChangeQuantity}
          quantity={data.quanlity}
        />
      )}
    </SpaceBetween>
  );
};

CartItem.propTypes = {
  style: PropTypes.object,
  data: PropTypes.object,
  quantity: PropTypes.number,
  maxQuantity: PropTypes.number,
  onChangeQuantity: PropTypes.func,
  onDelete: PropTypes.func,
  isCart: PropTypes.bool,
};

CartItem.defaultProps = {
  style: {},
  data: {
    imageBackgroundColor: "#efeef3",
    imageSource: "",
    name: "",
    price: 0,
  },
  quantity: 0,
  maxQuantity: 1,
  onChangeQuantity: () => {},
  onDelete: () => {},
  isCart: false,
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  imageContainer: {
    flex: 0.25,
    borderRadius: 15,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 15,
  },
  info: {
    flex: 0.4,
    paddingLeft: 20,
  },
  nameText: {
    color: "#808080",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
