import React from "react";
import { Text, StyleSheet, View } from "react-native";
import BaseButton from "../../BaseButton";
import RangeSliderFilter from "../../RangeSlideFilter";

function ContentFilter({ data }) {
  return (
    <>
      <View style={styles.optionsFilter}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Category</Text>
        <View style={styles.categoryFilter}>
          {data.categories.map((item, i) => {
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
                valueSelecteds={data.category}
                setValueSelecteds={data.setCategory}
              />
            );
          })}
        </View>
      </View>
      {data.rangeSlides.map((item, i) => {
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
  );
}
export default ContentFilter;
const styles = StyleSheet.create({
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
});
