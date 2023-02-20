import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../theme/theme";
export default [
  {
    id: 1,
    image: require("../../../assets/Onboarding/slide-1.png"),
    title: "Choose Product",
    decription:
      "A product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form",
    icon: (
      <>
        <Icon name="navigate-next" size={25} color={theme.background} />
      </>
    ),
    titleButton: "Next",
  },
  {
    id: 2,
    image: require("../../../assets/Onboarding/slide-2.png"),
    title: "Make Payment",
    decription:
      "Payment is the transfer of money services in exchange product or Payments typically made terms agreed",
    icon: (
      <>
        <Icon name="navigate-next" size={25} color={theme.primaryDisabled} />
        <Icon
          name="navigate-next"
          size={25}
          style={{ marginHorizontal: -18 }}
          color={theme.background}
        />
      </>
    ),
    titleButton: "Next",
  },
  {
    id: 3,
    image: require("../../../assets/Onboarding/slide-3.png"),
    title: "Get Your Order",
    decription:
      "Business or commerce an order is a started intention either spoken to engage in a commerce transaction specific product",
    icon: (
      <>
        <Icon name="navigate-next" size={25} color={theme.primaryDisabled} />
        <Icon
          name="navigate-next"
          style={{ marginHorizontal: -18 }}
          size={25}
          color={theme.primaryDisabled}
        />
        <Icon name="navigate-next" size={25} color={theme.background} />
      </>
    ),
    titleButton: "Get Started",
  },
];
