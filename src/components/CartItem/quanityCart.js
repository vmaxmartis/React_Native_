import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { theme } from "../../theme/theme";
import { getData } from "./../../utils/getData";
import { useDispatch } from "react-redux";
import { changeQuanlityCart } from "../../redux/slide/cartSlide";
import ConfirmAlert from "../../utils/alert";

function QuanityCart({ quantity, onDelete, id }) {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(changeQuanlityCart({ id: id, type: "add" }));
  };
  const handleSub = () => {
    if (quantity === 1) {
      ConfirmAlert({
        title: `you want to remove XX from your order`,
        onPressOk: () => {
          dispatch(deleteCart(newCart));
        },
      });
    } else {
      dispatch(changeQuanlityCart({ id: id, type: "sub" }));
    }
  };
  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        style={styles.quantityButton}
        activeOpacity={0.8}
        onPress={handleSub}
      >
        <Text style={styles.quantityButtonLabel}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityLabel}>{quantity}</Text>
      <TouchableOpacity
        style={styles.quantityButton}
        activeOpacity={0.8}
        onPress={handleAdd}
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
  );
}

export default QuanityCart;

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
    paddingHorizontal: 2,
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
