import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import PropTypes from "prop-types";
import Icon from "./Icon";
import utils from "./../utils/index";

function BaseInputField({
  icon,
  placeholder,
  styleView,
  value,
  initialValue,
  onChangeText,
  validateType,
}) {
  const inputRef = useRef(null);
  const [isFocus, setFocus] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (value && value.length >= 5) {
        setIsTyping(!isTyping);
      }
    }, 1000);
  }, [value]);

  const handlePress = () => {
    inputRef.current.focus();
  };
  function handleValidateMessage(valueMessage, typeValidate) {
    switch (typeValidate) {
      case "email": {
        return utils.validateEmail(valueMessage);
      }
      case "password": {
        return utils.validatePassword(valueMessage);
      }
      case "username": {
        return utils.validateName(valueMessage);
      }
      default:
        {
          return "Type Validate?";
        }
        break;
    }
  }

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          isFocus ? styles.containerFocus : {},
          styleView,
        ]}
        activeOpacity={1}
        onPress={handlePress}
      >
        <View style={styles.icon}>
          {icon && <Icon name={icon} size={18} color={"#f77951"} />}
        </View>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder={placeholder}
          value={value ? value : undefined}
          initialValue={initialValue}
          onChangeText={(text) => {
            onChangeText(text);
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </TouchableOpacity>
      {isTyping && validateType && (
        <Text style={{ color: "red", marginHorizontal: 10, marginBottom: 10 }}>
          {handleValidateMessage(value, validateType)}
        </Text>
      )}
    </View>
  );
}

BaseInputField.propTypes = {
  placeholder: PropTypes.string,
  styleView: PropTypes.object,
  icon: PropTypes.string,
  value: PropTypes.any,
  initialValue: PropTypes.any,
  onChangeText: PropTypes.func,
  validateType: PropTypes.string,
};

BaseInputField.defaultProps = {
  placeholder: "",
  styleView: {},
  icon: "envelope",
  value: "",
  initialValue: "",
  onChangeText: () => {},
  validateType: "",
};

export default BaseInputField;

const styles = StyleSheet.create({
  container: {
    width: "85%",
    backgroundColor: "#fff",
    height: 55,
    minWidth: 200,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 10,
  },
  containerFocus: {
    borderColor: "#f77951",
    borderWidth: 1.75,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "#fff1ee",
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
  },
});
