import { StyleSheet, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const SpaceBetween = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

SpaceBetween.propTypes = {
  style: PropTypes.any,
};

SpaceBetween.defaultProps = {
  style: {},
};

export default SpaceBetween;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
