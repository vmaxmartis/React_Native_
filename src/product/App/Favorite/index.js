import React from "react";
import { View, Dimensions, FlatList } from "react-native";
import WithSafeArea from "../../../Config/safeArea";
import { HeaderApp } from "../../../components";
import ProductItem from "../Home/ProductItem";
import { getData } from "./../../../utils/getData";

function Favorite({ navigation }) {
  const products = getData("product");
  const favoriteProd = products.filter((item) => item.favorite === true);
  const screenWidth =
    favoriteProd.length % 2 === 1
      ? Dimensions.get("window").width - 21.5
      : "auto";

  return (
    <View>
      <HeaderApp
        style={{ paddingHorizontal: 15 }}
        title={"Favorite"}
        isButton
        route={navigation}
      />
      <View
        style={{
          flex: 1,
          padding: 10,
          flexDirection: "column",
          width: screenWidth,
        }}
      >
        <FlatList
          columnWrapperStyle={{
            flex: 1,
            justifyContent:
              screenWidth === "auto" ? "space-between" : "flex-start",
          }}
          data={favoriteProd}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ProductItem
              key={index}
              data={item}
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
