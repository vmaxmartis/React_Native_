import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WithSafeArea = (Component, style) => {
  return (props) => (
    <SafeAreaView style={[styles.container, style]}>
      <Component {...props} />
    </SafeAreaView>
  );
};

export default WithSafeArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfd",
  },
});
