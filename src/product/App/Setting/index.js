import React, { useState } from "react";
import WithSafeArea from "../../../Config/safeArea";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Switch,
} from "react-native";
import { HeaderApp, Icon, SpaceBetween } from "../../../components";
import Icons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { theme } from "../../../theme/theme";
import ToggleSwitch from "toggle-switch-react-native";
const screenWidth = Dimensions.get("window").width;

function Settings({ navigation }) {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const ToggleSwitch1 = () => {
    return (
      <ToggleSwitch
        isOn={toggle1}
        onColor={theme.primary}
        offColor={theme.textDarkGray}
        size="small"
        onToggle={() => setToggle1(!toggle1)}
      />
    );
  };
  const ToggleSwitch2 = () => {
    return (
      <ToggleSwitch
        isOn={toggle2}
        onColor={theme.primary}
        offColor={theme.textDarkGray}
        size="small"
        onToggle={() => setToggle2(!toggle2)}
      />
    );
  };
  const NavigateIcon = () => {
    return (
      <TouchableOpacity onPress={() => navigation.push("Main")}>
        <Icons size={32} color={theme.textDarkGray} name={"navigate-next"} />
      </TouchableOpacity>
    );
  };
  const arr = [
    {
      iconTab: "mail",
      iconComponent: Icons,
      lable: "Email Support",
      rightIcon: <NavigateIcon />,
    },
    {
      iconTab: "questioncircle",
      iconComponent: AntDesign,
      lable: "FAQ",
      rightIcon: <NavigateIcon />,
    },
    {
      iconTab: "lock-closed",
      lable: "Privary Stetesment",
      rightIcon: <NavigateIcon />,
    },
    {
      iconTab: "notifications",
      lable: "Notification",
      rightIcon: <ToggleSwitch1 />,
    },
    {
      id: 4,
      iconTab: "update",
      iconComponent: Icons,
      lable: "Update",
      rightIcon: <ToggleSwitch2 />,
    },
  ];
  return (
    <View style={styles.container}>
      <HeaderApp title={"Settings"} />
      {arr.map((item, i) => {
        return (
          <SpaceBetween key={i} style={styles.spaceBetween}>
            <View style={styles.tab}>
              <Icon
                iconComponent={item.iconComponent}
                style={styles.styleViewIcon}
                name={item.iconTab}
                size={18}
                color={theme.primary}
              />
              <Text style={[styles.nameTab]}>{item.lable}</Text>
            </View>
            {item.rightIcon}
          </SpaceBetween>
        );
      })}
    </View>
  );
}

export default WithSafeArea(Settings);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  spaceBetween: {
    alignItems: "center",
    paddingHorizontal: 20,
    width: screenWidth,
    marginBottom: 10,
  },
  tab: {
    height: 60,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  nameTab: {
    marginLeft: 10,
    fontSize: 15,
    color: theme.textDarkGray,
  },
  switchBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
