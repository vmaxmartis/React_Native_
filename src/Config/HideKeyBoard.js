import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
const HiddenKeyBoard = () => {
  const [keyboardShown, setKeyboardShown] = useState(false);
  console.log("keyboardShown:", keyboardShown);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShown(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShown(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [Keyboard]);
  return keyboardShown;
};

export default HiddenKeyBoard;
