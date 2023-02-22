import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { BottomSheet } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { BaseButton, RangeSliderFilter } from "../../../../components";
import AutoRender from "./../../../../Config/AutoRender";

const FiltersBottomSheet = ({ elOpenBottomSheet, styleEl }) => {
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  function handleSelected(isSelect) {
    let isSelected = !isSelect;
    return isSelected;
  }
  const categories = [
    { label: "New Arrival" },
    { label: "New Arrival" },
    { label: "New Arrival" },
  ];
  const rangeSlides = [
    {
      label: "Pricing",
      prefix: "$",
      leftValue: price.min,
      rightValue: price.max,
      onChange: setPrice,
    },
    {
      label: "Distance",
      prefix: "Km",
      leftValue: distance.min,
      rightValue: distance.max,
      onChange: setDistance,
    },
  ];

  const dataFilter = [
    {
      type: "other",
      ordersComponnets: (
        <View style={styles.filterHeaderView}>
          <TouchableOpacity>
            <Text> Clear</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "700" }}> Filters</Text>
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <View style={styles.viewIcon}>
              <Icon name="ios-close" size={18} />
            </View>
          </TouchableOpacity>
        </View>
      ),
    },

    {
      type: "other",
      ordersComponnets: (
        <View style={styles.optionsFilter}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Category</Text>
          <View style={styles.categoryFilter}>
            {categories.map((item, i) => {
              return (
                <BaseButton
                  key={i}
                  selected={true}
                  title={item.label}
                  styleView={styles.btnCategory}
                  styleText={{
                    fontSize: 18,
                    fontWeight: "500",
                    asFont: "Inter",
                  }}
                />
              );
            })}
          </View>
        </View>
      ),
    },
    {
      type: "other",
      ordersComponnets: (
        <>
          {rangeSlides.map((item, i) => {
            return (
              <RangeSliderFilter
                key={i}
                label={item.label}
                prefix={item.prefix}
                leftValue={item.leftValue}
                rightValue={item.rightValue}
                onValuesChange={(values) =>
                  item.onChange({ min: values[0], max: values[1] })
                }
              />
            );
          })}
        </>
      ),
    },
    {
      type: "button",
      title: "Apply Filter",
      view: styles.applyFilter,
    },
  ];
  return (
    <View style={styleEl}>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        {elOpenBottomSheet}
      </TouchableOpacity>
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <View style={styles.filter}>
          <View style={styles.filterView}>
            <AutoRender data={dataFilter} flexDirection="column" />
          </View>
        </View>
      </BottomSheet>
    </View>
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
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 70,
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
    paddingBottom: 10,
    flexDirection: "column",
  },
  categoryFilter: {
    marginTop: 20,
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-start",
  },
  btnCategory: {
    width: "auto",
    paddingHorizontal: 5,
    borderRadius: 10,
    marginRight: 10,
    height: 55,
  },
  applyFilter: {
    flex: 0.5,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersBottomSheet;
