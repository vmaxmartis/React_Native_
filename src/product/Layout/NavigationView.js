import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Button,
  Image,
} from "react-native";
import { theme } from "../../theme/theme";
import { Icon } from "../../components";
import Icons from "react-native-vector-icons/Ionicons";

export default function NavigationView({ drawerRef }) {
  const [isSelected, setSelection] = useState(NaN);
  useEffect(() => {}, []);
  const ha = [
    { lable: "Favorite", icon: "heart", navigate: "Favorite" },
    { lable: "Wallets", icon: "wallet", navigate: "Favorite" },
    { lable: "My Orders", icon: "cart", navigate: "Favorite" },
    { lable: "About Us", icon: "people", navigate: "Favorite" },
    { lable: "Privacy Policy", icon: "lock-closed", navigate: "Favorite" },
  ];
  return (
    <View style={styles.drawer}>
      <View style={styles.userInfo}>
        <Image
          style={styles.userInfoImage}
          source={require("../../../assets/vv.png")}
        />
        <View>
          <Text style={styles.userInfoName}>Martis</Text>
          <Text style={styles.userInfoEmail}>I am Vmax Martis</Text>
        </View>
      </View>
      <View style={styles.listTab}>
        {ha.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setSelection(i)}
              style={styles.tab}
            >
              <Icon
                style={styles.styleViewIcon}
                name={item.icon}
                size={18}
                color={theme.primary}
              />
              <Text
                style={[
                  styles.nameTab,
                  { fontWeight: isSelected === i ? "700" : "400" },
                ]}
              >
                {item.lable}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.logout}>
        <View style={styles.styleViewIcon}>
          <Icons name={"log-out"} size={18} color={theme.primary} />
        </View>
        <Text style={[styles.nameTab, { fontWeight: "400" }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 15,
    paddingLeft: 15,
    flexDirection: "column",
    backgroundColor: "#fbfbfd",
  },
  listTab: { height: "auto", width: "100%", marginBottom: "10%" },
  logout: {
    width: "100%",
    height: "10%",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  styleViewIcon: {
    height: 30,
    width: 30,
    borderRadius: 8,
    backgroundColor: "#fcefee",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    height: 50,
    paddingVertical: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  nameTab: {
    fontSize: 15,
    color: theme.textDarkGray,
  },
  userInfo: {
    justifyContent: "flex-start",
    width: "100%",
    height: "10%",
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  userInfoImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfoName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userInfoEmail: {
    fontSize: 14,
  },
});
