import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { BottomSheet } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import BaseButton from "../../BaseButton";
import { useDispatch } from "react-redux";
import { filterResult } from "../../../redux/slide/productSlide";
import ContentFilter from "./ContentFilter";
import categories from "../../../FakeData/CategoryContent";
const defaulValue = {
  price: { min: 0, max: 1000 },
  distance: { min: 0, max: 1000 },
};

const FiltersBottomSheet = ({ elOpenBottomSheet, styleEl, setSearchText }) => {
  const [distance, setDistance] = useState(defaulValue.distance);
  const [price, setPrice] = useState(defaulValue.price);
  const [isVisible, setIsVisible] = useState(false);
  const [category, setCategory] = useState([1, 2, 3]);
  const dispatch = useDispatch();
  let payload = { price: price, distance: distance, category: category };
  const handleApply = () => {
    setSearchText("");
    dispatch(filterResult(payload));
    setIsVisible(!isVisible);
    setCategory([]);
  };
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
  const data = {
    rangeSlides: rangeSlides,
    categories: categories,
    category: category,
    setCategory: setCategory,
  };
  return (
    <View style={styleEl}>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        {elOpenBottomSheet}
      </TouchableOpacity>
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <View style={styles.filter}>
          <View style={styles.filterView}>
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
            <ContentFilter data={data} />
            <BaseButton onPress={handleApply} title="Apply Filter" />
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
  filterView: {
    alignItems: "center",
  },
  viewIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#fff1ee",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FiltersBottomSheet;
