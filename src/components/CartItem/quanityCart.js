import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { theme } from "../../theme/theme";
function QuanityCart({ quantity, onDelete, onChangeQuantity }) {
  return (
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
        onPress={() => onChangeQuantity(Math.min(quantity + 1, color.quantity))}
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
