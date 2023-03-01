import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SpaceBetween from "../SpaceBw";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/EvilIcons";
import { theme } from "../../theme/theme";
import QuanityCart from "./quanityCart";

const CartItem = ({ style, data, quantity, onChangeQuantity, onDelete }) => {
  return (
    <SpaceBetween style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.image, { backgroundColor: data.imageBackgroundColor }]}
          source={data.imageSource}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.nameText}>{data.name}</Text>
        <Text style={styles.priceText}>${data.price}</Text>
      </View>
      {quantity > 0 && (
        <QuanityCart
          onDelete={onDelete}
          onChangeQuantity={onChangeQuantity}
          quantity={quantity}
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
  },
  nameText: {
    color: "#808080",
  },
  colorText: {
    color: "#424242",
    fontStyle: "italic",
    fontSize: 13,
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#feebe5",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  quantityButtonLabel: {
    color: theme.primary,
  },
  quantityLabel: {
    marginHorizontal: 5,
  },
  deleteButton: {
    marginLeft: 10,
  },
  deleteIcon: {
    color: theme.primary,
  },
});
