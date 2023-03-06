import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import SpaceBetween from "./../SpaceBw";
import PropTypes from "prop-types";
import RangeSlider from "./RangeSlide";

const RangeSliderFilter = ({
  label,
  prefix,
  suffix,
  min,
  max,
  leftValue,
  rightValue,
  formatLeftValue,
  formatRightValue,
  onValuesChange,
}) => {
  const leftDisplayValue =
    typeof formatLeftValue === "function"
      ? formatLeftValue(leftValue)
      : formatLeftValue;
  const rightDisplayValue =
    typeof formatRightValue === "function"
      ? formatRightValue(rightValue)
      : formatRightValue;
  const { width } = useWindowDimensions();

  return (
    <View>
      <SpaceBetween style={styles.container}>
        <Text style={styles.left}>{label}</Text>
        <Text style={styles.right}>
          {prefix}
          {leftDisplayValue || leftValue}
          {suffix}-{prefix}
          {rightDisplayValue || rightValue}
          {suffix}
        </Text>
      </SpaceBetween>
      <RangeSlider
        min={min}
        max={max}
        leftValue={leftValue}
        rightValue={rightValue}
        sliderLength={width - 40}
        onValuesChange={onValuesChange}
      />
    </View>
  );
};

RangeSliderFilter.propTypes = {
  label: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  leftValue: PropTypes.number,
  rightValue: PropTypes.number,
  formatLeftValue: PropTypes.any,
  formatRightValue: PropTypes.any,
  onValuesChange: PropTypes.func,
};

RangeSliderFilter.defaultProps = {
  label: "",
  prefix: "",
  suffix: "",
  min: 0,
  max: 500,
  leftValue: 0,
  rightValue: 500,
  formatLeftValue: null,
  formatRightValue: null,
  onValuesChange: () => {},
};

export default RangeSliderFilter;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 10,
  },
  left: {
    fontWeight: "bold",
    fontSize: 20,
  },
  right: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
