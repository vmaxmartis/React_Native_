import React, { useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

function BaseText({ styleView, styleText, valueText }) {
  return (
    <View style={styleView ? styleView : styles.root}>
      <Text style={styleText}>{valueText}</Text>
    </View>
  );
}

BaseText.propTypes = {
  placeholder: PropTypes.string,
  styleView: PropTypes.object,
  styleText: PropTypes.array,
  valueText: PropTypes.string,
};

BaseText.defaultProps = {
  placeholder: "Any text",
  styleView: {},
  styleText: [{ fontSize: 15 }],
  valueText: "",
  leftElement: <></>,
  rightElement: <></>,
  onPress: () => {},
};

export default BaseText;

const styles = StyleSheet.create({
  root: {
    width: "85%",
    height: 30,
    minWidth: 200,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#fff",
  },
});
