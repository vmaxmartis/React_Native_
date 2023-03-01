import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swipeable from "react-native-swipeable";

const SwipeButton = ({ text }) => {
  const [leftActionActivated, setLeftActionActivated] = useState(false);
  const [rightActionActivated, setRightActionActivated] = useState(false);

  const handleLeftActionActivate = () => {
    setLeftActionActivated(true);
  };

  const handleLeftActionDeactivate = () => {
    setLeftActionActivated(false);
  };

  const handleRightActionActivate = () => {
    setRightActionActivated(true);
  };

  const handleRightActionDeactivate = () => {
    setRightActionActivated(false);
  };

  const handleLeftActionComplete = () => {
    alert("You have swiped left!");
  };

  const handleRightActionComplete = () => {
    alert("You have swiped right!");
  };

  const leftContent = (
    <View style={[styles.swipeContent, styles.leftSwipeContent]}>
      <Text style={styles.swipeText}>Left Swipe</Text>
    </View>
  );

  const rightContent = (
    <View style={[styles.swipeContent, styles.rightSwipeContent]}>
      <Text style={styles.swipeText}>Right Swipe</Text>
    </View>
  );

  return (
    <Swipeable
      leftContent={leftContent}
      // rightContent={rightContent}
      // onLeftActionActivate={handleLeftActionActivate}
      // onLeftActionDeactivate={handleLeftActionDeactivate}
      // // onLeftActionComplete={handleLeftActionComplete}
      // onRightActionActivate={handleRightActionActivate}
      // onRightActionDeactivate={handleRightActionDeactivate}
      // onRightActionComplete={handleRightActionComplete}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  swipeContent: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  leftSwipeContent: {
    backgroundColor: "#FF9800",
  },
  rightSwipeContent: {
    backgroundColor: "#4CAF50",
  },
  swipeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
