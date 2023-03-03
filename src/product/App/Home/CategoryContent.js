import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SpaceBetween } from "../../../components/index";
import ProductItem from "./ProductItem";
import { getData } from "../../../utils/getData";
import { PropTypes } from "prop-types";

function CategoryContent({ categoryList, navigation }) {
  console.log("navigation:", navigation);
  const products = getData("product");

  return (
    <>
      {(categoryList || []).map((item, index) => {
        const categoryId = index;
        return (
          <View key={index}>
            <SpaceBetween style={styles.header}>
              <Text style={styles.headerTitle}>{item.lable.toString()}</Text>
              <Text style={styles.headerLink}>See all</Text>
            </SpaceBetween>
            <View style={styles.productContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {products
                  .filter((prod) => prod.categoryId === categoryId)
                  .map((prod, i) => (
                    <ProductItem
                      key={i}
                      data={prod}
                      onPress={() => {
                        navigation.navigate("Detail", {
                          productId: prod.id,
                        });
                      }}
                      hideFavorite={true}
                    />
                  ))}
              </ScrollView>
            </View>
          </View>
        );
      })}
    </>
  );
}

CategoryContent.defaultProps = {
  categoryList: PropTypes.array,
};

CategoryContent.defaultProps = {
  categoryList: [
    { lable: "NEW ARRIVAL" },
    { lable: "TOP TRANDING" },
    { lable: "BEST SALE" },
  ],
};
export default CategoryContent;
const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },
  headerLink: {
    fontSize: 16,
    color: "#7e7e80",
  },
  productContainer: {
    justifyContent: "center",
  },
});
