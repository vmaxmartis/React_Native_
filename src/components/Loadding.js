import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Button } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Loadding = ({ stopped, condition, time, contents }) => {
  const [loadding, setLoadding] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      if (condition) {
        if (stopped) {
          setLoadding(true);
          setTimeout(() => {
            setLoadding(false);
          }, time.maxTime);
        }
      }
    }, time.waitTime);
  }, [condition]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Spinner
          visible={loadding}
          textContent={contents}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default Loadding;
