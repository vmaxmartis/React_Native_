import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WithSafeArea from "../../../Config/safeArea";

function Favorite() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text> Favorite</Text>
    </View>
  );
}
export default WithSafeArea(Favorite);
