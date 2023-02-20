import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { theme } from "../theme/theme";
import Icon from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";

const BaseButton = ({
  onPress,
  title,
  icon,
  styleView,
  styleText,
  disabled,
  selected,
}) => {
  const [isSelected, setSelection] = React.useState(selected);
  const handleSelection = () => {
    if (selected) {
      setSelection(!isSelected);
    } else {
      console.log("no action");
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: disabled ? theme.background : theme.primary },
        selected && {
          backgroundColor: isSelected ? theme.primary : theme.primaryDisabled,
        },
        styleView,
      ]}
      onPress={selected ? handleSelection : onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text
        style={[
          styles.label,
          styleText,
          ,
          { color: disabled ? theme.textDarkGray : "#fff" },
          selected && { color: isSelected ? "#fff" : "black" },
        ]}
      >
        {title}
      </Text>
      {icon}
    </TouchableOpacity>
  );
};

BaseButton.defaultProps = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.element,
  styleView: PropTypes.object,
  labelStyle: PropTypes.object,
  disabled: PropTypes.bool,
  selected: PropTypes.any,
};

BaseButton.defaultProps = {
  onPress: () => {},
  label: "",
  icon: <></>,
  styleView: {},
  labelStyle: {},
  disabled: false,
  selected: null,
};

export default BaseButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    width: 250,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    alignItems: "center",
    marginRight: 6,
    fontWeight: "bold",
  },
  icon: {
    display: "flex",
    flexDirection: "row",
  },
});
