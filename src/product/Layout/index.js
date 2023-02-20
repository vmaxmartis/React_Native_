import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
  Button,
} from "react-native";
import WithSafeArea from "./../../Config/safeArea";
import { theme } from "../../theme/theme";
import Icon from "../../components/Icon";
import { find } from "lodash";
import Home from "../App/Home";
import Cart from "../App/Cart";
import Profile from "../App/Profile";
import Favorite from "../App/Favorite";

function Main() {
  const [activeScreen, setActiveScreen] = useState("Home");
  const drawer = useRef(null);
  function renderScreen(ar, lable) {
    let screen = find(ar, (item) => item.label === lable);
    return screen.screen;
  }
  const Screens = [
    { label: "Home", screen: <Home drawerRef={drawer} />, iconName: "home" },
    { label: "Cart", screen: <Cart />, iconName: "shopping-cart" },
    { label: "Favorite", screen: <Favorite />, iconName: "heart" },
    { label: "Profile", screen: <Profile />, iconName: "user" },
  ];
  const navigationView = () => (
    <View style={[styles.drawer, styles.navigationDrawer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={250}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
      ref={drawer}
    >
      <View style={styles.container}>
        <View style={styles.mainLayout}>
          {renderScreen(Screens, activeScreen)}
        </View>
        <View style={styles.bottomTabs}>
          {Screens.map((tab, i) => {
            return (
              <TouchableOpacity
                onPress={() => setActiveScreen(tab.label)}
                key={i}
              >
                <Icon
                  style={{ backgroundColor: "#fff" }}
                  color={
                    tab.label === activeScreen
                      ? theme.primary
                      : theme.primaryDisabled
                  }
                  name={tab.iconName}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}
export default WithSafeArea(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  mainLayout: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabs: {
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  drawer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationDrawer: {
    backgroundColor: theme.background,
  },
});
