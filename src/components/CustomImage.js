import React from "react";
import { StyleSheet, View, Image as Image } from "react-native";
import PropTypes from "prop-types";
import { theme } from "../theme/theme";

function CustomImage({ viewStyle, imageStyle, src }) {
  return (
    <View style={viewStyle ? viewStyle : null}>
      <Image style={imageStyle ? imageStyle : styles.root} source={src} />
    </View>
  );
}

CustomImage.propTypes = {
  viewStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  src: PropTypes.any,
};

CustomImage.defaultProps = {
  viewStyle: {},
  imageStyle: {},
  src: null,
};

export default CustomImage;

const styles = StyleSheet.create({
  root: {
    width: 100,
    height: 100,
  },
  container: {
    width: "auto",
    height: "auto",
  },
});
