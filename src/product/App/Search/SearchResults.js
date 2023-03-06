import React from "react";
import { isEmpty } from "lodash";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ProductItem from "../Home/ProductItem";
import utils from "../../../utils";

function SearchResults({ dataResult: e }) {
  console.log("e.resultProducts:", e.resultProducts);
  return (
    <>
      {(e.searchText.trim().length != "" || e.resultProducts) && (
        <>
          <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
            <Text style={styles.text}>
              {e.searchText
                ? `Found ${
                    utils.filterByName(e.product, e.searchText).length
                  } results for " ${e.searchText} "`
                : e.resultProducts
                ? `Found ${e.resultProducts.length} products matching filter`
                : ""}
            </Text>
          </View>
          {!isEmpty(e.resultProducts) ? (
            <FlatList
              columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
              data={e.resultProducts}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <ProductItem
                  key={index}
                  data={item}
                  hideFavorite
                  onPress={() =>
                    e.navigation.navigate("Detail", { productId: item.id })
                  }
                />
              )}
            />
          ) : (
            <View style={styles.nonProduct}>
              <Text style={{ fontSize: 15, fontWeight: "100" }}>
                Currently, there are no products that match the above keywords
              </Text>
            </View>
          )}
        </>
      )}
    </>
  );
}

export default SearchResults;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  nonProduct: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
