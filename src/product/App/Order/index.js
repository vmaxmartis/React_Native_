import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import WithSafeArea from "./../../../Config/safeArea";
import { HeaderApp } from "../../../components";
import { theme } from "./../../../theme/theme";
import CompletedCart from "./CompletedCart";

function Orders() {
  const [isActive, setIsActive] = useState(0);
  const tabList = [
    {
      id: 0,
      tabName: "Completed",
      content: <CompletedCart />,
    },
    { id: 1, tabName: "Cancelled", content: <></> },
  ];
  const screenWidth = Dimensions.get("window").width - 50;

  return (
    <View style={styles.container}>
      <HeaderApp title={"Orders"} />
      <View
        style={{
          height: "7%",
          width: screenWidth,
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        {tabList.map((tab, i) => {
          const active = isActive === i;
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabBar}
              onPress={() => {
                setIsActive(i);
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 15,
                  color: active ? theme.primary : theme.textDarkGray,
                }}
              >
                {tab.tabName}
              </Text>
              <View
                style={{
                  height: active ? 5 : 1.5,
                  borderRadius: 2.5,
                  width: "100%",
                  marginTop: 10,
                  backgroundColor: active
                    ? theme.primary
                    : theme.primaryDisabled,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ flex: 1, width: screenWidth }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {tabList[isActive].content}
        </ScrollView>
      </View>
    </View>
  );
}
export default WithSafeArea(Orders);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  tabBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
