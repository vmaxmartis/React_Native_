import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WithSafeArea from "../../../Config/safeArea";

function Profile() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
    </View>
  );
}
export default WithSafeArea(Profile);
