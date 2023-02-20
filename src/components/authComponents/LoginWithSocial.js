import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import CustomImage from "../CustomImage";

const LoginWithSocial = () => {
  return (
    <View style={styles.loginWithSocial}>
      <TouchableOpacity>
        <CustomImage
          src={require("../../../assets/Login/facebook-logo.webp")}
          viewStyle={styles.socialImage}
          imageStyle={styles.iconSocialStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <CustomImage
          src={require("../../../assets/Login/google-logo.webp")}
          viewStyle={styles.socialImage}
          imageStyle={styles.iconSocialStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LoginWithSocial;

const styles = StyleSheet.create({
  loginWithSocial: {
    flexDirection: "row",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  socialImage: {
    backgroundColor: "#fff",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
    marginHorizontal: 15,
    shadowColor: "#2626265e",
    shadowOffset: {
      width: 70,
      height: 70,
    },
    shadowOpacity: 0.12,
    shadowRadius: 70,
    elevation: 5,
  },
  iconSocialStyle: {
    width: 30,
    height: 30,
  },
});
