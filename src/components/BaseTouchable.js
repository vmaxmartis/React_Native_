import React, { useRef, useState } from "react";
import { StyleSheet, Touchable, Text } from "react-native";
import PropTypes from "prop-types";

function BaseTouchable({
  style,
  styleText,
  valueText,
  leftElement,
  rightElement,
  onPress,
}) {
  return (
    <Touchable style={style ? style : styles.root} onPress={onPress}>
      {leftElement}
      <Text style={styleText}>{valueText}</Text>
      {rightElement}
    </Touchable>
  );
}

BaseTouchable.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object,
  styleText: PropTypes.object,
  valueText: PropTypes.string,
  leftElement: PropTypes.func,
  rightElement: PropTypes.func,
  onPress: PropTypes.func,
};

BaseTouchable.defaultProps = {
  placeholder: "Any text",
  style: {},
  styleText: { fontSize: 15 },
  valueText: "",
  leftElement: <></>,
  rightElement: <></>,
  onPress: () => {},
};

export default BaseTouchable;

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
