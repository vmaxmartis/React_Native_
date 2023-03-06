import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { theme } from "../../../../theme/theme";
import ColorButton from "./../ColorButton/index";
import { BaseButton, SpaceBetween } from "../../../../components";

function InfoProduct({ product, onPressButton, getColor, navigate }) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const colors = product.options;

  return (
    <View style={styles.infoContainer}>
      <SpaceBetween>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </SpaceBetween>
      <Text style={styles.colorLabel}>Color</Text>
      <View style={styles.colorContainer}>
        {colors.map((color, index) => (
          <ColorButton
            style={{ marginRight: 5 }}
            key={index}
            name={color.color}
            color={color.color}
            selected={selectedColorIndex === index}
            onPress={() => {
              setSelectedColorIndex(index);
              getColor(color.color);
            }}
          />
        ))}
      </View>
      <Text style={styles.quantityLabel}>
        Quantity:
        <Text style={styles.quantityNumber}>
          {colors[selectedColorIndex].quantity
            ? colors[selectedColorIndex].quantity
            : 0}
        </Text>
      </Text>
      <ScrollView style={styles.productDescription}>
        <Text style={styles.productDescriptionText}>{product.description}</Text>
      </ScrollView>
      <BaseButton
        view={styles.addToCart}
        title="Add to cart"
        disabled={colors[selectedColorIndex].quantity === 0}
        onPress={onPressButton}
      />
    </View>
  );
}

export default InfoProduct;
const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    backgroundColor: "#f7f7f8",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
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
    marginBottom: 20,
  },
});
