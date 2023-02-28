import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { BottomSheet } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { BaseButton, RangeSliderFilter } from "../../../../components";
import AutoRender from "./../../../../Config/AutoRender";
import { useDispatch } from "react-redux";
import { filterResult } from "../../../../redux/slide/productSlide";
const defaulValue = {
  price: { min: 0, max: 1000 },
  distance: { min: 0, max: 1000 },
};

const FiltersBottomSheet = ({ elOpenBottomSheet, styleEl }) => {
  const [distance, setDistance] = useState(defaulValue.distance);
  const [price, setPrice] = useState(defaulValue.price);
  const [isVisible, setIsVisible] = useState(false);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  let payload = { price: price, distance: distance, category: category };
  const handleApply = () => {
    dispatch(filterResult(payload));
    setIsVisible(!isVisible);
    setCategory([]);
  };
  console.log("payload:", payload);

  const categories = [
    { id: 1, label: "New Arrival" },
    { id: 2, label: "Top Tranding" },
    { id: 3, label: "Feature Products" },
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
  const handleResetFilter = () => {
    setDistance(defaulValue.distance);
    setPrice(defaulValue.price);
  };
  const dataFilter = [
    {
      type: "other",
      ordersComponnets: (
        <View style={styles.filterHeaderView}>
          <TouchableOpacity onPress={handleResetFilter}>
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
                  id={item.id}
                  selected={true}
                  title={item.label}
                  styleView={styles.btnCategory}
                  styleText={{
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                  valueSelecteds={category}
                  setValueSelecteds={setCategory}
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
      handle: handleApply,
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
