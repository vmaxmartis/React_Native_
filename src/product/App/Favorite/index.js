import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import WithSafeArea from "../../../Config/safeArea";
import { HeaderApp } from "../../../components";
import { theme } from "./../../../theme/theme";
import ProductItem from "../Home/ProductItem";
import products from "../../../FakeData/products";
function Favorite({ navigation }) {
  const viewFavoriteProducts = () => {
    if (products.length % 2 === 1) [...products].push({});
    return products.filter((item) => item.favorite);
  };
  console.log(
    products.filter((item) => item.favorite),
    "pr"
  );
  return (
    <View style={styles.container}>
      <HeaderApp
        showGoBack={navigation && true}
        style={{ paddingHorizontal: 15 }}
        title={"Favorite"}
      />
      <View style={{ flex: 1, padding: 10, flexDirection: "column" }}>
        <FlatList
          style={styles.searchList}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
          data={viewFavoriteProducts()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ProductItem
              key={index}
              style={{ marginHorizontal: 1 }}
              name={item.name}
              price={item.price}
              imageSource={item.imageSource}
              backgroundColor={item.backgroundColor}
              favorite={true}
              onPress={() =>
                navigation.navigate("Detail", { productId: item.id })
              }
            />
          )}
        />
      </View>
    </View>
  );
}
export default WithSafeArea(Favorite);

const styles = StyleSheet.create({
  container: {},
  backgroundColor: "red",
});
