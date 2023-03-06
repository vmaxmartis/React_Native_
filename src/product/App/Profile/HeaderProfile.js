import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { theme } from "../../../theme/theme";

const screenWidth = Dimensions.get("window").width + 25;
const screenHeight = Dimensions.get("window").height;
function HeaderProfile({ user }) {
  return (
    <View style={styles.profile}>
      <Image source={user.background} style={styles.coverPhoto} />
      <View style={{ position: "absolute", bottom: 10, alignItems: "center" }}>
        <Image
          style={{ width: 120, height: 120, borderRadius: 120 }}
          source={user.avatar}
        />
        <Text style={styles.nameLabel}>{user.name}</Text>
        <Text style={styles.emailLabel}>{user.email}</Text>
      </View>
    </View>
  );
}

export default HeaderProfile;
const styles = StyleSheet.create({
  header: {
    width: screenWidth,
  },
  container: {
    alignItems: "center",
  },
  profile: {
    height: screenHeight * 0.3,
    width: screenWidth,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  coverPhoto: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  nameLabel: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  emailLabel: {
    color: theme.textDarkGray,
  },
});
