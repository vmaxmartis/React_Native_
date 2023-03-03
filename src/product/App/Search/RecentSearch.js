import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SpaceBetween } from "./../../../components";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../../theme/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getData } from "./../../../utils/getData";

function RecentSearch({ setSearchText }) {
  const [openRecentSearch, setOpenRecentSearch] = React.useState(false);
  const recent = getData("recent");
  const [recents, setRecents] = React.useState(recent);
  React.useEffect(() => {
    setRecents(recent);
    setTimeout(() => {
      openRecentSearch && setOpenRecentSearch(false);
    }, 5000);
  }, [openRecentSearch]);
  return (
    <View style={styles.resultContainer}>
      <SpaceBetween style={styles.recentSearch}>
        <Text style={styles.text}>Recent Searches </Text>
        <TouchableOpacity
          onPress={() => setOpenRecentSearch(!openRecentSearch)}
        >
          <Icon
            name="navigate-next"
            style={{
              transform: [{ rotate: openRecentSearch ? "90deg" : "0deg" }],
            }}
            size={25}
            color={theme.primary}
          />
        </TouchableOpacity>
      </SpaceBetween>
      {openRecentSearch && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        >
          {recents.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.recent}
                onPress={() => setSearchText(item.recent)}
              >
                <Text style={{ fontSize: 15 }}>{item.recent}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

export default RecentSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    height: "auto",
    marginVertical: 5,
  },
  recentSearch: {
    marginTop: 10,
  },
  resultContainer: {
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  nonProduct: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  recent: {
    borderRadius: 10,
    height: "auto",
    backgroundColor: theme.primaryDisabled,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
