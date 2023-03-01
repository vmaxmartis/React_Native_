import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WithSafeArea from "../../../Config/safeArea";
import { BaseButton } from "../../../components";
import { theme } from "../../../theme/theme";
import Icon from "react-native-vector-icons/Octicons";

const Payment = ({ navigation }) => {
  const handleBackToHome = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconOutter}>
        <View style={styles.iconInner}>
          <Icon
            style={styles.icon}
            name="check"
            size={45}
            color={theme.primary}
          />
        </View>
      </View>
      <Text style={styles.title}>Congratulation !!!</Text>
      <Text style={styles.desription}>
        Dolore voluptate pariatur fugiat labore nisi reprehenderit culpa culpa
        nostrud aute minim ad qui in.
      </Text>
      <BaseButton title={"Get your receipt"} />
      <BaseButton
        title={"Back to home"}
        styleView={styles.backToHomeButton}
        styleText={{ color: theme.primary }}
        onPress={handleBackToHome}
      />
    </View>
  );
};

export default WithSafeArea(Payment);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  iconOutter: {
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    borderWidth: 12,
    borderColor: theme.primary,
  },
  iconInner: {
    width: 63,
    height: 63,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#fceeed",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 60,
    marginBottom: 10,
  },
  desription: {
    textAlign: "center",
    color: theme.textDarkGray,
    marginBottom: 25,
  },
  backToHomeButton: {
    backgroundColor: "#ffe9e3",
    marginTop: 15,
  },
});
