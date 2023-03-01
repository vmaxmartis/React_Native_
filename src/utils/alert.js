import { Alert } from "react-native";

const ConfirmAlert = ({ title, message, onPressOk, onPressCancel }) =>
  Alert.alert(title, message, [
    {
      text: "Cancel",
      style: "cancel",
      onPress: onPressCancel,
    },
    {
      text: "Ok",
      style: "cancel",
      onPress: onPressOk,
    },
  ]);

export default ConfirmAlert;
