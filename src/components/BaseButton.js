import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { theme } from "../theme/theme";

const BaseButton = ({
  id,
  onPress,
  title,
  icon,
  styleView,
  styleText,
  disabled,
  selected,
  view,
  valueSelecteds,
  setValueSelecteds,
}) => {
  const [isSelected, setSelection] = React.useState(selected);
  React.useEffect(() => {
    if (isSelected === true) {
      valueSelecteds.push(id); //[1,2]
      () => setValueSelecteds(valueSelecteds);
    } else if (id) {
      () => setValueSelecteds(valueSelecteds.filter((e) => e !== id));
    } else {
      () => setValueSelecteds(valueSelecteds.filter((e) => e !== id));
    }
  }, [isSelected]);
  const handleSelection = () => {
    if (selected) {
      setSelection(!isSelected);
    }
  };
  return (
    <View style={view ? view : {}}>
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
    </View>
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
  view: PropTypes.object,
  valueSelecteds: PropTypes.array,
  setValueSelected: PropTypes.func,
};

BaseButton.defaultProps = {
  onPress: () => {},
  label: "",
  icon: <></>,
  styleView: {},
  labelStyle: {},
  disabled: false,
  selected: null,
  view: {},
  valueSelecteds: [],
  setValueSelected: null,
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
