import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const ColorButton = ({ selected, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { borderColor: selected ? "#f77951" : "#fff" }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.color, { backgroundColor: color }]}></View>
    </TouchableOpacity>
  );
};

ColorButton.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
};

ColorButton.defaultProps = {
  label: "",
  color: "#000",
  selected: false,
  onPress: () => {},
};

export default ColorButton;

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    borderRadius: 26,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  color: {
    width: 18,
    height: 18,
    borderRadius: 18,
  },
});
