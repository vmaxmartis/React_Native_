import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { HeaderApp, SpaceBetween } from "../../../components";
import WithSafeArea from "../../../Config/safeArea";
import { theme } from "../../../theme/theme";
import { getData } from "./../../../utils/getData";
import CardProfile from "./CardProfile";
import HeaderProfile from "./HeaderProfile";

const Information = ({ label, value }) => (
  <SpaceBetween style={styles.information}>
    <Text style={styles.informationLabel}>{label}:</Text>
    <Text style={styles.informationValue}>{value}</Text>
  </SpaceBetween>
);
const screenWidth = Dimensions.get("window").width + 25;

const Profile = ({ navigation }) => {
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
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <HeaderProfile user={user} />
        <CardProfile />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ justifyContent: "flex-start", width: 330 }}>
            <Text style={styles.label}>Information</Text>
          </View>
          <View style={styles.informationBox}>
            <Information label="Name" value={user.name} />
            <Information label="Mail" value={user.email} />
            <Information label="Address" value={user.address[0].add} />
            <Information label="Phone" value={user.address[0].number} />
          </View>
        </View>
      </ScrollView>
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
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  informationBox: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    width: screenWidth * 0.8,
    justifyContent: "space-between",
    borderColor: "#f0f0f2",
    marginBottom: 20,
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
