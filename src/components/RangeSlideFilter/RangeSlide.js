import { StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { theme } from "./../../theme/theme";
import PropTypes from "prop-types";
import Slider from "@ptomasroos/react-native-multi-slider";

const Marker = () => <View style={styles.marker} />;

const RangeSlider = ({
  min,
  max,
  sliderLength,
  leftValue,
  rightValue,
  onValuesChange,
}) => {
  return (
    <Slider
      min={min}
      max={max}
      values={[leftValue, rightValue]}
      sliderLength={sliderLength}
      customMarker={Marker}
      selectedStyle={styles.selected}
      onValuesChange={onValuesChange}
    />
  );
};

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  leftValue: PropTypes.number,
  rightValue: PropTypes.number,
  sliderLength: PropTypes.number,
  onValuesChange: PropTypes.func,
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  leftValue: 10,
  rightValue: 90,
  sliderLength: 0,
  onValuesChange: () => {},
};

export default RangeSlider;

const styles = StyleSheet.create({
  marker: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: theme.primary,
  },
  selected: {
    borderRadius: 2,
    backgroundColor: theme.primary,
  },
});
