import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SpaceBetween from "./SpaceBw";
import PropTypes from "prop-types";
import { theme } from "../theme/theme";
import Icon from "react-native-vector-icons/EvilIcons";

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
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          activeOpacity={0.8}
          onPress={() => onChangeQuantity(Math.max(1, quantity - 1))}
        >
          <Text style={styles.quantityButtonLabel}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityLabel}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          activeOpacity={0.8}
          onPress={() =>
            onChangeQuantity(Math.min(quantity + 1, color.quantity))
          }
        >
          <Text style={styles.quantityButtonLabel}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.deleteButton}
          onPress={onDelete}
        >
          <Icon name="trash" size={25} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
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
