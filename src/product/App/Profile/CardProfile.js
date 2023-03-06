import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { theme } from "../../../theme/theme";
import { Icon } from "../../../components";
import { Ionicons } from "react-native-vector-icons/Ionicons";

function CardProfile() {
  const cards = [
    {
      name: "md-basket",
      title: "Progress Order",
      value: "10+",
      backgroundColor: { backgroundColor: "#fef4f2" },
      color: theme.primary,
    },
    {
      name: "ios-pricetags",
      title: "Promocodes",
      value: "10+",
      backgroundColor: { backgroundColor: "#d8e7fa" },
      color: "#297eff",
    },
    {
      name: "star",
      title: "Reviews",
      value: "45K",
      backgroundColor: { backgroundColor: "#fffcee" },
      color: "#ffc102",
    },
  ];
  return (
    <View style={styles.container}>
      {cards.map((item, i) => {
        return (
          <View key={i} style={styles.card}>
            <Icon
              iconComponent={Ionicons}
              style={[styles.icon, item.backgroundColor]}
              size={25}
              color={item.color}
              name={item.name}
            />
            <Text style={{ fontSize: 12, marginBottom: 10 }}>{item.title}</Text>
            <Text style={{ fontWeight: "700" }}>{item.value}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default CardProfile;
const styles = StyleSheet.create({
  container: {
    height: "auto",
    flexDirection: "row",
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  card: {
    width: "30%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 7.5,
    borderRadius: 15,
    shadowColor: "#2626265e",
    shadowOffset: {
      width: 720,
      height: 140,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginBottom: 10,
  },
});
