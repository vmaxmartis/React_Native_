import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Text, ScrollView } from "react-native";
import WithSafeArea from "./../../../Config/safeArea";
import { HeaderApp, BaseButton } from "../../../components";
import { theme } from "./../../../theme/theme";
import CartItem from "../../../components/CartItem/index";
import { getData } from "../../../utils/getData";
import ConfirmAlert from "../../../utils/alert";

const screenWidth = Dimensions.get("window").width - 50;

function Cart({ navigation }) {
  const carts = getData("cart");
  console.log("carts:", carts);
  const subtotal = carts.reduce((acc, curr) => {
    return acc + curr.price * curr.quanlity;
  }, 0);
  const handleCheckout = () => {
    ConfirmAlert({
      title: `Bạn muốn thanh toán ?`,
      message: `Tổng đơn hàng của bạn là: ${subtotal} $`,
      onPressOk: () => {
        navigation.navigate("Checkout", { subtotal: subtotal });
      },
    });
  };
  console.log("subtotal:", subtotal);

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
          {carts.map((item, i) => {
            console.log("item:", item);
            return (
              <CartItem
                style={{ marginBottom: 5 }}
                key={i}
                data={item}
                color={item.options}
                isCart={true}
              />
            );
          })}
        </View>
      </ScrollView>
      <View>
        <View style={styles.subtotal}>
          <Text style={{ fontSize: 17 }}>Sub total: </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{subtotal} $</Text>
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
