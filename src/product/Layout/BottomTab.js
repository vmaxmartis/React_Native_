import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Keyboard } from "react-native";
import { theme } from "../../theme/theme";
import Icon from "../../components/Icon";

function BottomTab({ tabs, activeScreen, setActiveScreen }) {
  const [keyboardShown, setKeyboardShown] = useState(false);
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShown(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShown(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  });
  return (
    !keyboardShown && (
      <View style={styles.bottomTabs}>
        {tabs.map((tab, i) => {
          const isActive = tab.label === activeScreen;
          return (
            <TouchableOpacity
              onPress={() => setActiveScreen(tab.label)}
              key={i}
            >
              <View style={isActive && styles.activeTab} />
              <Icon
                style={{ backgroundColor: theme.white }}
                color={isActive ? theme.primary : theme.primaryDisabled}
                name={isActive ? tab.iconName : tab.iconName + `-outline`}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    )
  );
}

export default BottomTab;

const styles = StyleSheet.create({
  bottomTabs: {
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: theme.white,
  },
  activeTab: {
    backgroundColor: theme.primary,
    width: 15,
    height: 8,
    borderBottomRightRadius: 7.5,
    borderBottomLeftRadius: 7.5,
    position: "absolute",
    top: -15,
    left: 21.5,
    shadowColor: "#c55403e0",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 70,
    elevation: 20,
  },
});
