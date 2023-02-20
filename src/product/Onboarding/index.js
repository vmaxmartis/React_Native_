import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, Image, Button, Animated } from "react-native";
import { theme } from "../../theme/theme";
import { TouchableOpacity } from "react-native";
import BaseButton from "../../components/BaseButton";
import WithSafeArea from "../../Config/safeArea";
import contentSteps from "./ContentSteps";

//   {
//     id: 1,
//     image: require("../../../assets/Onboarding/slide-1.png"),
//     title: "Choose Product",
//     decription:
//       "A product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form",
//     icon: (
//       <>
//         <Icon name="navigate-next" size={25} color={theme.background} />
//       </>
//     ),
//     titleButton: "Next",
//   },
//   {
//     id: 2,
//     image: require("../../../assets/Onboarding/slide-2.png"),
//     title: "Make Payment",
//     decription:
//       "Payment is the transfer of money services in exchange product or Payments typically made terms agreed",
//     icon: (
//       <>
//         <Icon name="navigate-next" size={25} color={theme.primaryDisabled} />
//         <Icon
//           name="navigate-next"
//           size={25}
//           style={{ marginHorizontal: -18 }}
//           color={theme.background}
//         />
//       </>
//     ),
//     titleButton: "Next",
//   },
//   {
//     id: 3,
//     image: require("../../../assets/Onboarding/slide-3.png"),
//     title: "Get Your Order",
//     decription:
//       "Business or commerce an order is a started intention either spoken to engage in a commerce transaction specific product",
//     icon: (
//       <>
//         <Icon name="navigate-next" size={25} color={theme.primaryDisabled} />
//         <Icon
//           name="navigate-next"
//           style={{ marginHorizontal: -18 }}
//           size={25}
//           color={theme.primaryDisabled}
//         />
//         <Icon name="navigate-next" size={25} color={theme.background} />
//       </>
//     ),
//     titleButton: "Get Started",
//   },
// ];
function GetStarted({ navigation }) {
  const [step, setStep] = useState(0);
  const handleNextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else if (step === 2) {
      navigation.navigate("Auth");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.step}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: theme.textDarkGray }}>{step + 1} </Text>
            <Text>/ 3</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
            <Text>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Image style={styles.imageStep} source={contentSteps[step].image} />
          <Text style={{ fontSize: 20, fontWeight: "700", margin: 20 }}>
            {contentSteps[step].title}
          </Text>
          <Text style={styles.description}>
            {contentSteps[step].decription}
          </Text>
          <BaseButton
            icon={contentSteps[step].icon}
            onPress={handleNextStep}
            title={contentSteps[step].titleButton}
          />
        </View>
      </View>
    </>
  );
}
export default WithSafeArea(GetStarted);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: "center",
    flexDirection: "column",
  },
  step: {
    fontSize: 15,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flex: 1,
    width: "100%",
    padding: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingBottom: 50,
  },
  imageStep: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  description: {
    color: "#a6a6a6",
    marginBottom: 50,
    marginHorizontal: 20,
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
  },
});
