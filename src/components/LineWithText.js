import { Text, StyleSheet, View } from "react-native";
import { theme } from "../theme/theme";

const LineWithText = ({ textValue }) => {
  const Line = () => {
    return <View style={styles.line} />;
  };
  return (
    <View style={styles.container}>
      <Line />
      <Text
        style={{ width: 50, textAlign: "center", color: theme.textDarkGray }}
      >
        {textValue}
      </Text>
      <Line />
    </View>
  );
};

export default LineWithText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  line: {
    height: 1,
    width: 100,
    backgroundColor: theme.textDarkGray,
  },
});
