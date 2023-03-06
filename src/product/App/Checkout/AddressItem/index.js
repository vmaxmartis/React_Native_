import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SpaceBetween } from "../../../../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import { theme } from "../../../../theme/theme";

const AddressItem = ({ style, selected, address, onEdit, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} activeOpacity={0.8}>
      <SpaceBetween
        style={[
          styles.container,
          style,
          selected ? styles.containerSelected : styles.containerUnselected,
        ]}
      >
        <View style={styles.checkboxContainer}>
          {selected ? (
            <Ionicons name="checkmark-circle" size={30} color={theme.primary} />
          ) : (
            <Ionicons name="checkmark-circle" size={30} color="#eeeef0" />
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{address.name}</Text>
          <Text style={styles.phoneText}>{address.number}</Text>
          <Text style={styles.addressText}>{address.add}</Text>
        </View>
        <View style={styles.editingContainer}>
          <TouchableOpacity onPress={onEdit} activeOpacity={0.8}>
            <MaterialIcons name="edit" size={25} color="#b9c6cf" />
          </TouchableOpacity>
        </View>
      </SpaceBetween>
    </TouchableOpacity>
  );
};

AddressItem.propTypes = {
  style: PropTypes.any,
  selected: PropTypes.bool,
  address: PropTypes.object,
  onEdit: PropTypes.func,
  onSelect: PropTypes.func,
};

AddressItem.defaultProps = {
  style: {},
  selected: false,
  address: {},
  onEdit: () => {},
  onSelect: () => {},
};

export default AddressItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  containerSelected: {
    backgroundColor: "#fff",
  },
  containerUnselected: {
    borderWidth: 1,
    borderColor: "#eeeef0",
  },
  checkboxContainer: {
    flex: 0.2,
  },
  infoContainer: {
    flex: 0.6,
  },
  editingContainer: {
    flex: 0.2,
    alignItems: "flex-end",
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#b9c6cf",
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 2,
  },
  phoneText: {
    color: theme.textDarkGray,
    marginBottom: 5,
  },
  addressText: {
    color: theme.textDarkGray,
  },
});
