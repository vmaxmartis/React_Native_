import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { theme } from "./../../../../theme/theme";
import SpaceBetween from "./../../../../components/SpaceBw";

const InfoItem = ({ style, label, value }) => (
  <SpaceBetween style={[styles.infoItem, style]}>
    <Text style={styles.infoItemLabel}>{label}</Text>
    <Text style={styles.infoItemSplit}>:</Text>
    <Text style={styles.infoItemValue}>{`$${value}`}</Text>
  </SpaceBetween>
);

const BillingInformation = ({ deliveryFee, subtotal }) => {
  return (
    <View style={styles.container}>
      <InfoItem label="Delivery Fee" value={deliveryFee} />
      <InfoItem label="Subtotal" value={subtotal} />
      <InfoItem
        style={styles.totalInfo}
        label="Total"
        value={deliveryFee + subtotal}
      />
    </View>
  );
};

export default BillingInformation;

BillingInformation.propTypes = {
  deliveryFee: PropTypes.number,
  subtotal: PropTypes.number,
};

BillingInformation.defaultProps = {
  deliveryFee: 0,
  subtotal: 0,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  infoItem: {
    marginBottom: 5,
  },
  infoItemLabel: {
    color: theme.textDarkGray,
    flex: 0.3,
  },
  infoItemSplit: {
    color: theme.textDarkGray,
    flex: 0.2,
  },
  infoItemValue: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "right",
    flex: 0.4,
  },
  totalInfo: {
    marginTop: 10,
    borderTopColor: "#f9f9f9",
    borderTopWidth: 1,
  },
});
