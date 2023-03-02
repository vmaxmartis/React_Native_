import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import WithSafeArea from "../../../Config/safeArea";
import { HeaderApp, BaseButton, SpaceBetween } from "../../../components";
import AddressItem from "./AddressItem/index";
import BillingInformation from "./BillingInformation";
import PaymentMethod from "./PaymentMethod";
// import SwipeButton from "./SwipeButton/index";
import { getData } from "./../../../utils/getData";

const paymentMethods = [
  {
    id: 1,
    name: "Apple Pay",
    imageSource: require("../../../../assets/PaymentMethods/apple-pay.svg"),
  },
  {
    id: 2,
    name: "Visa",
    imageSource: require("../../../../assets/PaymentMethods/visa.svg"),
  },
  {
    id: 3,
    name: "Mastercard",
    imageSource: require("../../../../assets/PaymentMethods/mastercard.svg"),
  },
  {
    id: 4,
    name: "Paypal",
    imageSource: require("../../../../assets/PaymentMethods/paypal.svg"),
  },
];

const Checkout = ({ navigation, route }) => {
  const subtotal = route.params.subtotal;
  const user = getData("user");
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [selectedPaymentMethodIndex, setSelectedPaymentMethodIndex] =
    useState(0);

  const handlePlaceOrder = () => {
    navigation.navigate("Payment");
  };

  return (
    <View style={styles.container}>
      <HeaderApp title={"Checkout"} showGoBack />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Text style={styles.label}>Delivery addresss</Text>
        <View>
          {user.address.map((item, i) => {
            return (
              <AddressItem
                style={styles.addressItem}
                key={1}
                address={item}
                selected={selectedAddressIndex === i}
                onSelect={() => setSelectedAddressIndex(i)}
              />
            );
          })}
        </View>
        <Text style={styles.label}>Billing Information</Text>
        <BillingInformation deliveryFee={50} subtotal={subtotal} />
        <Text style={styles.label}>Payment method</Text>
        <SpaceBetween style={styles.paymentMethodContainer}>
          {paymentMethods.map((item, index) => (
            <PaymentMethod
              key={index}
              imageSource={item.imageSource}
              selected={selectedPaymentMethodIndex === index}
              onSelect={() => setSelectedPaymentMethodIndex(index)}
            />
          ))}
        </SpaceBetween>
      </ScrollView>
      <View style={styles.swipeBtn}>
        <BaseButton
          style={styles.submitButton}
          title="Checkout"
          onPress={handlePlaceOrder}
        />
      </View>
    </View>
  );
};

export default WithSafeArea(Checkout);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },
  submitButton: {
    alignSelf: "center",
    marginBottom: 10,
  },
  addressItem: {
    marginBottom: 10,
  },
  paymentMethodContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  swipeBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
});
