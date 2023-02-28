import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceBetween from "./SpaceBw";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { theme } from "./../theme/theme";

const HeaderApp = ({ style, showGoBack, title, icon }) => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = React.useState(false);
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
      <View style={styles.leftAndRight}>
        {icon && (
          <TouchableOpacity
            style={styles.favoriteButton}
            activeOpacity={0.8}
            onPress={() => setIsSelected(!isSelected)}
          >
            <Icon
              style={styles.favoriteIcon}
              name={isSelected ? icon : `${icon + "-border"}`}
              color={theme.primary}
              size={25}
            />
          </TouchableOpacity>
        )}
      </View>
    </SpaceBetween>
  );
};

HeaderApp.propTypes = {
  style: PropTypes.object,
  showGoBack: PropTypes.bool,
  title: PropTypes.string,
  right: PropTypes.any,
};

HeaderApp.defaultProps = {
  style: {},
  showGoBack: false,
  title: "",
  right: "",
};

export default HeaderApp;

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
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  leftAndRight: {
    width: 50,
  },
});
