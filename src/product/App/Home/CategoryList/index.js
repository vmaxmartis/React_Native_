import React from "react";
import { View, Dimensions, FlatList, Text } from "react-native";
import WithSafeArea from "../../../../Config/safeArea";
import { HeaderApp } from "../../../../components";
import ProductItem from "./../ProductItem/index";
import { getData } from "./../../../../utils/getData";

function CategoryList({ route, navigation }) {
  const prods = route.params.prod;
  const screenWidth =
    prods.length % 2 === 1 ? Dimensions.get("window").width - 21.5 : "auto";
  console.log("route.params.prod:", route.params.prod);
  const a = getData("product");

  return (
    <View style={{ marginHorizontal: 10 }}>
      <HeaderApp
        showGoBack
        title={route.params.lable}
        isButton
        route={navigation}
      />

      {prods && (
        <FlatList
          columnWrapperStyle={{
            flex: 1,
            justifyContent:
              screenWidth === "auto" ? "space-between" : "flex-start",
          }}
          data={prods}
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
      )}
    </View>
  );
}
export default WithSafeArea(CategoryList);
