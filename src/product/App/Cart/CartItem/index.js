import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SpaceBetween } from "../../../../components";
import PropTypes from "prop-types";
import { theme } from "../../../../theme/theme";

const CartItem = ({
  style,
  imageBackgroundColor,
  imageSource,
  name,
  price,
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
        <Text style={styles.priceText}>${price}</Text>
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
};

CartItem.defaultProps = {
  style: {},
  imageBackgroundColor: theme.background,
  imageSource: "",
  name: "",
  price: 0,
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 3,
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
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
