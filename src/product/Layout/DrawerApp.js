import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Favorite, Main, Cart } from "..";

const CustomDrawerContent = ({ translation, navigation, ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfo}>
        <View>
          <Text style={styles.userInfoName}>name</Text>
          <Text style={styles.userInfoEmail}>mail</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label={"Logg"} onPress={() => console.log("hal")} />
    </DrawerContentScrollView>
  );
};
const Drawer = createDrawerNavigator();

export default function DrawerApp() {
  return (
    <Drawer.Navigator
      initialRouteName="Favorite"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}
    >
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Favorite" component={Favorite} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  userInfoImage: {
    width: 50,
    height: 50,
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
