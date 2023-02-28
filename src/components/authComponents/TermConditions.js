import React from "react";
import { Text, View } from "react-native";
import { theme } from "./../../theme/theme";
import BaseCheckbox from "./../BaseCheckBox";

const TermConditions = () => {
  const [accept, setAccept] = React.useState(false);
  return (
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "row",
        marginBottom: 20,
        width: 330,
      }}
    >
      <BaseCheckbox color="#f77951" value={accept} onChangeValue={setAccept} />
      <Text style={{ color: theme.textDarkGray }}>I accept all the</Text>
      <Text style={{ fontWeight: "700" }}> Terms & Conditions</Text>
    </View>
  );
};
export default TermConditions;
