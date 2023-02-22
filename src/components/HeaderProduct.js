import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceBetween from "./SpaceBw";
import Icon from "react-native-vector-icons/Entypo";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";

const HeaderProduct = ({ style, showGoBack, title, right }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SpaceBetween style={{ ...styles.container, ...style }}>
      <View style={styles.leftAndRight}>
        {showGoBack ? (
          <TouchableOpacity onPress={handleGoBack} activeOpacity={0.8}>
            <Icon name="chevron-left" size={25} />
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.leftAndRight}>{right}</View>
    </SpaceBetween>
  );
};

HeaderProduct.propTypes = {
  style: PropTypes.object,
  showGoBack: PropTypes.bool,
  title: PropTypes.string,
  right: PropTypes.any,
};

HeaderProduct.defaultProps = {
  style: {},
  showGoBack: false,
  title: "",
  right: "",
};

export default HeaderProduct;

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  leftAndRight: {
    width: 50,
  },
});
