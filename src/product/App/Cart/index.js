import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Text, ScrollView } from "react-native";
import WithSafeArea from "./../../../Config/safeArea";
import { HeaderApp, BaseButton } from "../../../components";
import { theme } from "./../../../theme/theme";
import CartItem from "../../../components/CartItem/index";
import { getData } from "../../../utils/getData";
function Cart({ navigation }) {
  console.log("navigation cart:", navigation);
  const carts = getData("product");
  const screenWidth = Dimensions.get("window").width - 50;
  const handleCheckout = () => {
    navigation.navigate("Checkout");
  };

  return (
    <View style={styles.container}>
      <HeaderApp title={"My Cart"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: screenWidth,
            flexDirection: "column",
          }}
        >
          {(carts.filter((item) => item.price > 100) || []).map((item, i) => {
            return (
              <CartItem
                style={{ marginBottom: 5 }}
                key={i}
                imageSource={item.imageSource}
                name={item.name}
                color={item.options}
                quantity={3}
              />
            );
          })}
        </View>
      </ScrollView>
      <View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: screenWidth,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontSize: 17 }}>Sub total</Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>$ 1000</Text>
        </View>
        <View
          style={{
            height: 70,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <BaseButton onPress={handleCheckout} title="Checkout" />
        </View>
      </View>
    </View>
  );
}
export default WithSafeArea(Cart);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  tabBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
