import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const CategoryItem = ({ selected, label, imageSource, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        selected ? styles.containerActive : styles.containerInactive,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image style={styles.image} source={imageSource} />
      <Text
        style={[
          styles.label,
          selected ? styles.labelActive : styles.labelInactive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

CategoryItem.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.string,
  imageSource: PropTypes.any,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

CategoryItem.defaultProps = {
  selected: false,
  label: "",
  imageSource: "",
  style: {},
  onPress: () => {},
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  containerActive: {
    backgroundColor: "#fff",
  },
  containerInactive: {
    borderColor: "#eeeef0",
    borderWidth: 1,
  },
  image: {
    width: 48,
    height: 48,
  },
  label: {
    fontWeight: "bold",
  },
  labelActive: {
    color: "#000",
  },
  labelInactive: {
    color: "#7e7e7e",
  },
});
