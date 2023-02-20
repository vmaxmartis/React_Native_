import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WithSafeArea from "../../../Config/safeArea";
import FiltersBottomSheet from "./../Home/FilterSheet/index";

function Cart() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FiltersBottomSheet elOpenBottomSheet={<Text>Hall</Text>} />
      <Text>CartItem</Text>
      <FiltersBottomSheet />
    </View>
  );
}
export default WithSafeArea(Cart);
