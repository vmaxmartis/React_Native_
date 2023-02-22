import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { HeaderProduct, SpaceBetween, BaseButton } from "../../../components";
import { theme } from "./../../../../src/theme/theme";
import WithSafeArea from "../../../Config/safeArea";
import Icon from "react-native-vector-icons/MaterialIcons";
import CarouselSlider from "./CarouselSlider";
import { getColors, getProduct } from "./api";
import ColorButton from "./ColorButton";

const Detail = ({ route, navigation }) => {
  const { productId } = route.params;
  const product = getProduct(productId);
  const colors = getColors(productId);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={[styles.container]}>
      <HeaderProduct
        style={styles.header}
        showGoBack
        right={
          <TouchableOpacity
            style={styles.favoriteButton}
            activeOpacity={0.8}
            onPress={() => {
              setIsFavorite(!isFavorite);
            }}
          >
            <Icon
              style={styles.favoriteIcon}
              name={isFavorite ? "favorite" : "favorite-border"}
              color={theme.primary}
              size={25}
            />
          </TouchableOpacity>
        }
      />
      <CarouselSlider
        style={styles.slider}
        imageSources={[
          product.imageSource,
          product.imageSource,
          product.imageSource,
        ]}
      />
      <View style={styles.infoContainer}>
        <SpaceBetween>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
        </SpaceBetween>
        <Text style={styles.colorLabel}>Choose Color</Text>
        <View style={styles.colorContainer}>
          {colors.map((color, index) => (
            <ColorButton
              style={{ marginRight: 5 }}
              key={index}
              name={color.label}
              color={color.code}
              selected={selectedColorIndex === index}
              onPress={() => setSelectedColorIndex(index)}
            />
          ))}
        </View>
        <Text style={styles.quantityLabel}>
          Quantity:{" "}
          <Text style={styles.quantityNumber}>
            {colors[selectedColorIndex].quantity}
          </Text>
        </Text>
        <ScrollView style={styles.productDescription}>
          <Text style={styles.productDescriptionText}>
            {product.description}
          </Text>
        </ScrollView>
        <BaseButton
          view={styles.addToCart}
          title="Add to cart"
          disabled={colors[selectedColorIndex].quantity === 0}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default WithSafeArea(Detail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    paddingHorizontal: 15,
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "100%",
  },
  infoContainer: {
    flex: 1,
    backgroundColor: theme.background,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  productName: {
    fontSize: 26,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 26,
    fontWeight: "bold",
  },
  productDescription: {
    minHeight: 100,
    maxHeight: 100,
    marginTop: 10,
    marginBottom: 15,
  },
  productDescriptionText: {
    color: theme.textDarkGray,
    lineHeight: 22,
  },
  quantityLabel: {
    marginBottom: 5,
    color: theme.textDarkGray,
  },
  quantityNumber: {
    fontWeight: "bold",
    color: "#000",
  },
  colorLabel: {
    marginTop: 10,
    fontSize: 18,
    color: theme.textDarkGray,
  },
  colorContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  addToCart: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
