import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SpaceBetween from "../SpaceBw";
import PropTypes from "prop-types";
import QuanityCart from "./quanityCart";
import { useDispatch } from "react-redux";
import { changeQuanlityCart, deleteCart } from "../../redux/slide/cartSlide";
import utils from "./../../utils/index";
import { getData } from "./../../utils/getData";
import ConfirmAlert from "../../utils/alert";

const CartItem = ({ isCart, style, data }) => {
  const carts = getData("cart");
  const dispatch = useDispatch();
  const deleteCartItem = () => {
    const newCart = utils.removeById(carts, data.id);
    ConfirmAlert({
      title: `you want to remove ${data.name} from your order`,
      onPressOk: () => {
        dispatch(deleteCart(newCart));
      },
    });
  };
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
          onDelete={deleteCartItem}
          id={data.id}
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
