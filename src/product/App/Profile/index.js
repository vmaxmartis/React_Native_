import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { HeaderApp, SpaceBetween } from "../../../components";
import WithSafeArea from "../../../Config/safeArea";
import { theme } from "../../../theme/theme";
import { getData } from "./../../../utils/getData";

const Information = ({ label, value }) => (
  <SpaceBetween style={styles.information}>
    <Text style={styles.informationLabel}>{label}:</Text>
    <Text style={styles.informationValue}>{value}</Text>
  </SpaceBetween>
);
const screenWidth = Dimensions.get("window").width + 25;
const screenHeight = Dimensions.get("window").height;

const Profile = () => {
  const user = getData("user");
  console.log("user:", user);
  return (
    <View style={styles.container}>
      <HeaderApp
        title="Profile"
        selectedIcon
        style={styles.header}
        iconRight={"md-ellipsis-vertical"}
      />
      <View style={styles.profile}>
        <Image source={user.background} style={styles.coverPhoto} />
        <View
          style={{ position: "absolute", bottom: 10, alignItems: "center" }}
        >
          <Image
            style={{ width: 120, height: 120, borderRadius: 120 }}
            source={user.avatar}
          />
          <Text style={styles.nameLabel}>{user.name}</Text>
          <Text style={styles.emailLabel}>{user.email}</Text>
        </View>
      </View>
      <View style={{ justifyContent: "flex-start", width: 300 }}>
        <Text style={styles.label}>Information</Text>
      </View>
      <View style={styles.informationBox}>
        <Information label="Name" value={user.name} />
        <Information label="Mail" value={user.email} />
        <Information label="Address" value={user.address} />
        <Information label="Phone" value={user.phone} />
      </View>
    </View>
  );
};

export default WithSafeArea(Profile);

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
    backgroundColor: "blue",
    alignItems: "center",
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
    marginBottom: 5,
  },
  emailLabel: {
    color: theme.textDarkGray,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },
  informationBox: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    width: screenWidth * 0.8,
    justifyContent: "space-between",
    borderColor: "#f0f0f2",
  },
  information: {
    marginBottom: 10,
  },
  informationLabel: {
    color: theme.textDarkGray,
  },
  informationValue: {
    fontWeight: "bold",
  },
});
