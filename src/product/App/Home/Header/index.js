import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceBetween from "./../../../../components/SpaceBw";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const Header = ({ onPressMenu, onPressNotification }) => {
  return (
    <SpaceBetween style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPressMenu}>
        <Ionicons name="md-menu-outline" size={30} />
      </TouchableOpacity>
      <Text>15/2 Textas</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={onPressNotification}>
        <Ionicons name="notifications-outline" size={25} color="#bbbbbb" />
      </TouchableOpacity>
    </SpaceBetween>
  );
};

Header.propTypes = {
  onPressMenu: PropTypes.func,
  onPressNotification: PropTypes.func,
};

Header.defaultProps = {
  onPressMenu: () => {},
  onPressNotification: () => {},
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
});
