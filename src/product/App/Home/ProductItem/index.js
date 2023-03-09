import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "./../../../../theme/theme";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../../../redux/slide/productSlide";
import API from "./../../../../lib/api";

const ProductItem = ({ data, prefix, style, onPress, hideFavorite }) => {
  console.log("data:", data);
  const dispatch = useDispatch();
  const handleToggleFavorite = () => {
    const payload = {
      id: data.id,
      favorite: !data.attributes.favorite,
    };
    dispatch(setFavorite(payload));
  };
  const imageUrl = `${API.UrlImage}${data.attributes.imageSource.data[0].attributes.url}`;

  console.log("imageUrl:", imageUrl);
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={{}}>
        <Image
          style={[
            styles.image,
            { backgroundColor: data.attributes.backgroundColor },
          ]}
          source={{ uri: imageUrl }}
        />
      </View>
      {!hideFavorite && (
        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={styles.favorite}
        >
          <Icon
            name={data.attributes.favorite ? "favorite" : "favorite-outline"}
            color={
              data.attributes.favorite ? theme.primary : theme.primaryDisabled
            }
            size={15}
          />
        </TouchableOpacity>
      )}

      <Text style={styles.name}>{data.attributes.name}</Text>
      <Text style={styles.price}>
        {prefix}
        {data.attributes.price}
      </Text>
    </TouchableOpacity>
  );
};

ProductItem.propTypes = {
  data: PropTypes.object,
  favorite: PropTypes.bool,
  prefix: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  hideFavorite: PropTypes.bool,
};

ProductItem.defaultProps = {
  data: {
    id: 100,
    name: "",
    price: 1000,
    backgroundColor: "#efeef3",
  },
  favorite: false,
  prefix: "$",
  style: {},
  onPress: () => {},
  backgroundColor: "#efeef3",
  hideFavorite: false,
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
