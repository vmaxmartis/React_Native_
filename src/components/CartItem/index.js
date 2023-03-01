import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SpaceBetween from "../SpaceBw";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/EvilIcons";
import { theme } from "../../theme/theme";
import QuanityCart from "./quanityCart";

const CartItem = ({
  style,
  imageBackgroundColor,
  imageSource,
  name,
  price,
  quantity,
  color,
  onChangeQuantity,
  onDelete,
}) => {
  return (
    <SpaceBetween style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.image, { backgroundColor: imageBackgroundColor }]}
          source={imageSource}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.colorText}>{color.label}</Text>
        <Text style={styles.priceText}>${price}</Text>
      </View>
      {quantity ? (
        <QuanityCart
          color={color}
          onDelete={onDelete}
          onChangeQuantity={onChangeQuantity}
          quantity={quantity}
        />
      ) : (
        <Text>Hall</Text>
      )}
    </SpaceBetween>
  );
};

CartItem.propTypes = {
  style: PropTypes.object,
  imageBackgroundColor: PropTypes.string,
  imageSource: PropTypes.any,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  maxQuantity: PropTypes.number,
  onChangeQuantity: PropTypes.func,
  onDelete: PropTypes.func,
  color: PropTypes.object,
};

CartItem.defaultProps = {
  style: {},
  imageBackgroundColor: "#efeef3",
  imageSource: "",
  name: "",
  price: 0,
  quantity: 1,
  maxQuantity: 1,
  onChangeQuantity: () => {},
  onDelete: () => {},
  color: {},
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
