import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FiltersBottomSheet from "../product/App/Home/FilterSheet";
import { theme } from "../theme/theme";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChangeText, onBlur, onFocus }) => {
  const inputRef = useRef(null);
  const [isFocus, setFocus] = useState(false);

  const handlePress = () => {
    inputRef.current.focus();
  };

  const handleFocus = (e) => {
    setFocus(true);
    onFocus(e);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}
      activeOpacity={1}
    >
      <Ionicons
        style={{ marginLeft: 10 }}
        name="search"
        size={25}
        color="#606060"
      />
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder={"Any text"}
        value={value}
        onChangeText={onChangeText}
        onBlur={(e) => {
          onBlur(e);
          setFocus(false);
        }}
        onFocus={handleFocus}
      />

      <FiltersBottomSheet
        styleEl={styles.filterButton}
        elOpenBottomSheet={
          <Ionicons name="filter-outline" size={23} color={theme.background} />
        }
      />
    </TouchableOpacity>
  );
};

SearchBox.propTypes = {
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func,
  onFilterPress: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
};

SearchBox.defaultProps = {
  onChangeText: () => {},
  onBlur: () => {},
  onFilterPress: () => {},
  onFocus: () => {},
  value: null,
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    minWidth: 250,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
  },
  filterButton: {
    backgroundColor: theme.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});
