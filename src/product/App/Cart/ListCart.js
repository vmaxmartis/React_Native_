import React from "react";
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { theme } from "./../../../theme/theme";
import CartItem from "../../../components/CartItem/index";
import { getData } from "../../../utils/getData";
import Icons from "react-native-vector-icons/MaterialIcons";

const screenWidth = Dimensions.get("window").width - 50;

function ListCart({ navigation }) {
  const carts = getData("cart");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: screenWidth,
          flexDirection: "column",
        }}
      >
        {carts.map((item, i) => {
          return (
            <CartItem
              style={{ marginBottom: 5 }}
              key={i}
              data={item}
              color={item.options}
              isCart={true}
            />
          );
        })}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginVertical: 10,
          }}
          onPress={() => navigation.replace("Main")}
        >
          <Text
            style={{
              fontSize: 15,
              color: theme.primary,
              marginBottom: 3,
            }}
          >
            Add more item
          </Text>
          <Icons size={20} color={theme.primary} name={"add"} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ListCart;
