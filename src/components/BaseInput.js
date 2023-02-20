import React, { useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import PropTypes from "prop-types";
import Icon from "./Icon";

function BaseInput({
  icon,
  placeholder,
  styleView,
  value,
  initialValue,
  onChangeText,
  messageValue,
}) {
  const inputRef = useRef(null);
  const [isFocus, setFocus] = useState(false);

  const handlePress = () => {
    inputRef.current.focus();
  };

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
      <Text style={{ color: "red", marginHorizontal: 10, marginVertical: 5 }}>
        {messageValue}
      </Text>
    </View>
  );
}

BaseInput.propTypes = {
  placeholder: PropTypes.string,
  styleView: PropTypes.object,
  icon: PropTypes.string,
  value: PropTypes.any,
  initialValue: PropTypes.any,
  onChangeText: PropTypes.func,
  messageValue: PropTypes.string,
};

BaseInput.defaultProps = {
  placeholder: "",
  styleView: {},
  icon: "envelope",
  value: "",
  initialValue: "",
  onChangeText: () => {},
  messageValue: null,
};

export default BaseInput;

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
