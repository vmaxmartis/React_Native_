import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { theme } from "../../theme/theme";
import PropTypes from "prop-types";

const NonAccount = ({ signup, setSignup }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
      <Text style={{ color: theme.textDarkGray }}>
        {signup ? "Already a Accoutn" : "Don't have an Accoutn?"}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setSignup(!signup);
        }}
      >
        <Text style={{ fontWeight: "700" }}>
          {signup ? " Log in" : " Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
NonAccount.propTypes = {
  signup: PropTypes.boolean,
  setSignup: PropTypes.func,
};

NonAccount.defaultProps = {
  signup: false,
  setSignup: null,
};
export default NonAccount;
