import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { theme } from "./../theme/theme";

function Icon({ iconComponent: Icon, name, size, color, style }) {
  return (
    <View style={[styles.container, style]}>
      <Icon name={name} size={size} color={color} />
    </View>
  );
}

Icon.propTypes = {
  style: PropTypes.object,
  iconComponent: PropTypes.func,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  style: {},
  iconComponent: FontAwesomeIcon,
  name: "",
  size: 24,
  color: theme.primary,
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: "#fff1ee",
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
