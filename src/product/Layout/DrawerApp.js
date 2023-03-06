import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Icons from "react-native-vector-icons/Ionicons";
import { Icon } from "../../components";
import { theme } from "../../theme/theme";
import { Favorite, Main, Cart, Search, Home, Checkout, Payment } from "..";
import ConfirmAlert from "../../utils/alert";
const Drawer = createDrawerNavigator();
const CustomDrawerContent = ({ navigation, ...props }) => {
  const [isSelected, setSelection] = React.useState(NaN);
  console.log("isSelected:", isSelected);
  const Tabs = [
    { lable: "Favorite", icon: "heart", navigate: "Profile" },
    { lable: "Wallets", icon: "wallet", navigate: "Settings" },
    { lable: "My Orders", icon: "cart", navigate: "Orders" },
    { lable: "About Us", icon: "people", navigate: "Profile" },
    { lable: "Privacy Policy", icon: "lock-closed", navigate: "Settings" },
  ];
  const handleLogOut = () => {
    ConfirmAlert({
      title: `You want to sign out?`,
      onPressOk: () => {
        navigation.replace("Auth");
      },
    });
  };
  return (
    <DrawerContentScrollView {...props}>
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
          {Tabs.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setSelection(i);
                  navigation.navigate(item.navigate);
                }}
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
        <TouchableOpacity onPress={handleLogOut} style={styles.logout}>
          <View style={styles.styleViewIcon}>
            <Icons name={"log-out"} size={18} color={theme.primary} />
          </View>
          <Text style={[styles.nameTab, { fontWeight: "400" }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default function DrawerApp() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Checkout" component={Checkout} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Favorite" component={Favorite} />
      <Drawer.Screen name="Search" component={Search} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 15,
    paddingLeft: 25,
    flexDirection: "column",
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
    marginVertical: 20,
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
