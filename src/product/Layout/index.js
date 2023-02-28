import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  DrawerLayoutAndroid,
  Keyboard,
} from "react-native";
import WithSafeArea from "./../../Config/safeArea";
import { theme } from "../../theme/theme";
import Icon from "../../components/Icon";
import { find } from "lodash";
import Home from "../App/Home";
import Cart from "../App/Cart";
import Profile from "../App/Profile";
import Favorite from "../App/Favorite";
import NavigationView from "./NavigationView";
import BottomTab from "./BottomTab";

function Main({ navigation }) {
  const [activeScreen, setActiveScreen] = useState("Home");
  const drawer = useRef(null);
  function renderScreen(ar, lable) {
    let screen = find(ar, (item) => item.label === lable);
    return screen.screen;
  }
  function renderNavigation() {
    return <NavigationView navigation={navigation} drawerRef={drawer} />;
  }

  const Screens = [
    {
      label: "Home",
      screen: <Home drawerRef={drawer} navigation={navigation} />,
      iconName: "home",
    },
    { label: "Cart", screen: <Cart />, iconName: "cart" },
    {
      label: "Favorite",
      screen: <Favorite navigation={navigation} />,
      iconName: "heart",
    },
    { label: "Profile", screen: <Profile />, iconName: "people" },
  ];

  return (
    <DrawerLayoutAndroid
      drawerWidth={250}
      drawerPosition={"left"}
      renderNavigationView={renderNavigation}
      ref={drawer}
      style={styles.drawerLayoutAndroid}
    >
      <View style={styles.container}>
        <View style={styles.mainLayout}>
          {renderScreen(Screens, activeScreen)}
        </View>
        <BottomTab
          tabs={Screens}
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
        />
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
  drawerLayoutAndroid: {
    backgroundColor: "red",
  },
});
