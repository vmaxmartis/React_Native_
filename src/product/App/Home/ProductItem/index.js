import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "./../../../../theme/theme";

const ProductItem = ({
  favorite,
  imageSource,
  name,
  price,
  prefix,
  style,
  onPress,
  backgroundColor,
}) => {
  const [isFavorite, setIsFavorite] = React.useState(favorite);
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={{}}>
        <Image
          style={[styles.image, { backgroundColor: backgroundColor }]}
          source={imageSource}
        />
      </View>
      {/* {favorite && (
        <View style={styles.favorite}>
          <Icon name="favorite" color={theme.primary} size={15} />
        </View>
      )} */}

      <TouchableOpacity
        onPress={() => setIsFavorite(!isFavorite)}
        style={styles.favorite}
      >
        <Icon
          name="favorite"
          color={isFavorite ? theme.primary : theme.primaryDisabled}
          size={15}
        />
      </TouchableOpacity>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>
        {prefix}
        {price}
      </Text>
    </TouchableOpacity>
  );
};

ProductItem.propTypes = {
  favorite: PropTypes.bool,
  imageSource: PropTypes.any,
  name: PropTypes.string,
  price: PropTypes.number,
  prefix: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
};

ProductItem.defaultProps = {
  favorite: false,
  imageSource: "",
  name: "",
  price: 0,
  prefix: "$",
  style: {},
  onPress: () => {},
  backgroundColor: "#efeef3",
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: 170,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 5,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  favorite: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 30,
    height: 30,
    position: "absolute",
    top: 15,
    right: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 15,
  },
  price: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
