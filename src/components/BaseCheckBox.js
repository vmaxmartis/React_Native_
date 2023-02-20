import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import { theme } from "./../theme/theme";

const BaseCheckbox = ({
  defaultValue,
  value,
  onPress,
  color,
  onChangeValue,
}) => {
  const [checked, setChecked] = useState(value || defaultValue);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  const handlePress = () => {
    setChecked(!checked);
    onPress(!checked);
    onChangeValue(!checked);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: checked ? color : "#fff", borderColor: color },
      ]}
      activeOpacity={1}
      onPress={handlePress}
    >
      {checked && <Icon name="check" color="#fff" />}
    </TouchableOpacity>
  );
};

BaseCheckbox.propTypes = {
  defaultValue: PropTypes.bool,
  value: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  onChangeValue: PropTypes.func,
};

BaseCheckbox.defaultProps = {
  defaultValue: false,
  value: null,
  onPress: () => {},
  color: theme.primary,
  style: {},
  onChangeValue: () => {},
};

export default BaseCheckbox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 2,
    marginHorizontal: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
