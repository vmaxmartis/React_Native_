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
    backgroundColor: "#fff",
  },
});
