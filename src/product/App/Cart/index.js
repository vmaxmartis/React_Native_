import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import WithSafeArea from "./../../../Config/safeArea";
import { HeaderApp, BaseButton } from "../../../components";
import { theme } from "./../../../theme/theme";
import CartItem from "../../../components/CartItem/index";
import { getData } from "../../../utils/getData";
import ConfirmAlert from "../../../utils/alert";
import { isEmpty } from "lodash";

const screenWidth = Dimensions.get("window").width - 50;

function Cart({ navigation }) {
  const carts = getData("cart");
  const subtotal = carts.reduce((acc, curr) => {
    return acc + curr.price * curr.quanlity;
  }, 0);
  React.useEffect(() => {
    setTimeout(() => {
      isEmpty(carts) && navigation.navigate("Main");
    }, 3000);
  }, [carts]);
  const handleCheckout = () => {
    ConfirmAlert({
      title: `You want to pay ?`,
      message: `Your total order is: ${subtotal} $`,
      onPressOk: () => {
        navigation.navigate("Checkout", { subtotal: subtotal });
      },
    });
  };

  return (
    <View style={styles.container}>
      <HeaderApp title={"My Cart"} />
      {isEmpty(carts) ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={styles.noCart}
        >
          <Text style={{ fontSize: 18 }}>
            Your shopping cart is currently empty...
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                width: screenWidth,
                flexDirection: "column",
              }}
            >
              {carts.map((item, i) => {
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {subtotal} $
              </Text>
            </View>
            <View style={styles.checkoutBtn}>
              <BaseButton onPress={handleCheckout} title="Checkout" />
            </View>
          </View>
        </>
      )}
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
  noCart: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
