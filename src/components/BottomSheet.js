import React, { useRef, useState } from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { BottomSheet } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import RangeSliderFilter from "../components/RangeSlideFilter/index";
import BaseButton from "./BaseButton";

const BottomSheetFilter = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0);
  function handleSelected(isSelect) {
    let isSelected = !isSelect;
    return isSelected;
  }

  const dataFilter = [
    {
      type: "button",
      title: "New Arrival",
      styles: {
        width: "auto",
        paddingHorizontal: 10,
        height: 50,
        textColor: "white",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
        backgroundColor: "#f77951",
      },
      isSelect: false,
      handleSelected: handleSelected,
      styleSelected: {
        width: "auto",
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
        backgroundColor: "white",
      },
      handle: handleSelected,
    },
    {
      type: "button",
      title: "Top trainning",
      styles: {
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
        boderRadisus: 50,
        backgroundColor: "#f77951",
      },
      isSelect: false,
      handleSelected: handleSelected,
    },
    {
      type: "button",
      title: "Featured product",
      styles: {
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        boderRadisus: 50,
        backgroundColor: "#f77951",
      },
      isSelect: false,
      handleSelected: handleSelected,
    },
  ];
  return (
    <>
      <View style={{ padding: 20 }}>
        <Button title="Open Bottom Sheet" onPress={() => setIsVisible(true)} />
        <BottomSheet modalProps={{}} isVisible={isVisible}>
          <View style={styles.filter}>
            <View style={styles.filterHeaderView}>
              <TouchableOpacity>
                <Text> Clear</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20, fontWeight: "500" }}> Filters</Text>
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <View style={styles.viewIcon}>
                  <Icon name="ios-close" size={18} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.filterView}>
              <View style={styles.optionsFilter}>
                <Text style={styles.filterTitle}>Category</Text>
                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                ></View>
              </View>
              <View style={styles.optionsFilter}>
                <Text style={styles.filterTitle}>Pricing</Text>
                <RangeSliderFilter
                  label={"Giá mong muốn"}
                  prefix={"$"}
                  // suffix={"s"}
                  leftValue={price.min}
                  rightValue={price.max}
                  onValuesChange={(values) =>
                    setPrice({ min: values[0], max: values[1] })
                  }
                />
              </View>
              <View style={styles.optionsFilter}>
                <Text style={styles.filterTitle}>Distance</Text>
                <RangeSliderFilter
                  label={"Khoảng cách "}
                  // prefix={"$"}
                  suffix={"Km"}
                  leftValue={distance.min}
                  rightValue={distance.max}
                  onValuesChange={(values) =>
                    setDistance({ min: values[0], max: values[1] })
                  }
                />
              </View>
              <View style={styles.applyFilter}>
                <BaseButton nameButton="Apply Filters" />
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  filter: {
    height: "auto",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "column",
    paddingBottom: 20,
  },
  filterHeaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  filterView: { flex: 1 },
  viewIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#fff1ee",
    alignItems: "center",
    justifyContent: "center",
  },
  optionsFilter: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  filterTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  applyFilter: { flex: 0.8, justifyContent: "center", alignItems: "center" },
});

export default BottomSheetFilter;
