import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceBetween from "./SpaceBw";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { theme } from "./../theme/theme";

const HeaderApp = ({
  style,
  showGoBack,
  title,
  styleTitle,
  iconLeft,
  onPressLeftIcon,
  iconRight,
  onPressRightIcon,
  selectedIcon,
  isButton,
}) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const styles = StyleSheet.create({
    container: {
      height: 40,
      marginVertical: 15,
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    buttonIcon: {
      width: 40,
      height: 40,
      borderRadius: 40,
      backgroundColor: isButton ? "#fff" : "transparent",
      justifyContent: "center",
      alignItems: "center",
    },
    leftAndRight: {
      width: 50,
    },
  });
  return (
    <SpaceBetween style={{ ...styles.container, ...style }}>
      <View style={styles.leftAndRight}>
        {iconLeft ? (
          <TouchableOpacity activeOpacity={0.8} onPress={onPressLeftIcon}>
            <Ionicons name="md-menu-outline" size={30} />
          </TouchableOpacity>
        ) : (
          showGoBack && (
            <TouchableOpacity onPress={handleGoBack} activeOpacity={0.8}>
              <Ionicons name="chevron-back" size={25} />
            </TouchableOpacity>
          )
        )}
      </View>
      <Text style={styleTitle ? styleTitle : styles.title}>{title}</Text>
      <View style={styles.leftAndRight}>
        {iconRight && (
          <TouchableOpacity
            style={styles.buttonIcon}
            activeOpacity={0.8}
            onPress={onPressRightIcon}
          >
            <Ionicons
              style={styles.favoriteIcon}
              name={selectedIcon ? iconRight : `${iconRight + "-outline"}`}
              color={selectedIcon ? theme.primary : theme.textDarkGray}
              size={25}
            />
          </TouchableOpacity>
        )}
      </View>
    </SpaceBetween>
  );
};

HeaderApp.propTypes = {
  style: PropTypes.object,
  showGoBack: PropTypes.bool,
  title: PropTypes.string,
  selectedIcon: PropTypes.bool,
  onPressRightIcon: PropTypes.func,
  isButton: PropTypes.bool,
};

HeaderApp.defaultProps = {
  style: {},
  showGoBack: false,
  title: "",
  selectedIcon: false,
  onPressRightIcon: () => {},
  isButton: false,
};

export default HeaderApp;
