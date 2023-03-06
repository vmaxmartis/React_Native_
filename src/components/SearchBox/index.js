import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FiltersBottomSheet from "./FilterSheet";
import { theme } from "../../theme/theme";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addRecents } from "../../redux/slide/recentSlide";

const SearchBox = ({ value, onChangeText, handleSubmit, setSearchText }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [isBlur, setIsBlur] = React.useState(false);
  const handlePress = () => {
    inputRef.current.focus();
  };
  React.useEffect(() => {
    let searchTextTimeout;
    if (value.trim().length >= 4) {
      clearTimeout(searchTextTimeout);
      setTimeout(() => {
        isBlur && dispatch(addRecents(value));
        setIsBlur(false);
      }, 3000);
    }
    return () => {
      clearTimeout(searchTextTimeout);
    };
  }, [isBlur]);

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
        onChangeText={(text) => onChangeText(text)}
        onSubmitEditing={handleSubmit}
        onBlur={() => setIsBlur(true)}
      />

      <FiltersBottomSheet
        setSearchText={setSearchText}
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
  onFilterPress: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  setSearchText: PropTypes.func,
};

SearchBox.defaultProps = {
  onFilterPress: null,
  onFocus: () => {},
  value: null,
  handleSubmit: () => {},
  setSearchText: () => {},
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
    marginLeft: 15,
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
