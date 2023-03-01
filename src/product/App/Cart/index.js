import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Text, ScrollView } from "react-native";
import WithSafeArea from "./../../../Config/safeArea";
import { HeaderApp, BaseButton } from "../../../components";
import { theme } from "./../../../theme/theme";
import CartItem from "../../../components/CartItem/index";
import { getData } from "../../../utils/getData";

const screenWidth = Dimensions.get("window").width - 50;

function Cart({ navigation }) {
  const carts = getData("product");
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
                data={item}
                color={item.options}
                quantity={3}
              />
            );
          })}
        </View>
      </ScrollView>
      <View>
        <View style={styles.subtotal}>
          <Text style={{ fontSize: 17 }}>Sub total</Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>$ 1000</Text>
        </View>
        <View style={styles.checkoutBtn}>
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
  subtotal: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: screenWidth,
    marginVertical: 5,
  },
  checkoutBtn: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 30,
  },
});
