import React, { Fragment } from "react";
import { View } from "react-native";
import {
  CustomImage,
  BaseText,
  BaseInputField,
  BaseTouchable,
} from "../components";
import BaseButton from "../components/BaseButton";

function AutoRender(props) {
  const { data, flexDirection } = props;

  return (
    <View style={{ flexDirection: flexDirection, alignItems: "center" }}>
      {(data || []).map((item, i) => {
        switch (item.type) {
          case "input": {
            return (
              <BaseInputField
                key={i}
                styleView={item.styleView}
                placeholder={item.placeholder}
                icon={item.icon}
                iconName={item.icon}
                value={item.value}
                initialValue={item.initialValue}
                onChangeText={item.onChangeText}
                validateType={item.validateType}
              />
            );
          }
          case "button": {
            return (
              <BaseButton
                key={i}
                styleView={item.styleView}
                disabled={item.disabled}
                styleText={item.styleText}
                selected={item.selected}
                onPress={item.handle}
                title={item.title}
                view={item.view}
                setValueSelecteds={item.setValueSelecteds}
              />
            );
          }
          case "text": {
            return (
              <BaseText
                key={i}
                styleView={item.styleView}
                styleText={item.styleText}
                valueText={item.valueText}
              />
            );
          }
          case "touchable": {
            return (
              <BaseTouchable
                key={i}
                style={item.style}
                styleText={item.styleText}
                valueText={item.valueText}
                leftElement={item.leftElement}
                rightElement={item.rightElement}
                onPress={item.onPress}
              />
            );
          }
          case "image": {
            return (
              <CustomImage
                key={i}
                src={item.src}
                viewStyle={item.viewStyle}
                imageStyle={item.imageStyle}
              />
            );
          }
          case "other": {
            return <Fragment key={i}>{item.ordersComponnets}</Fragment>;
          }
          default: {
            return <View key={i}></View>;
          }
        }
      })}
    </View>
  );
}
export default AutoRender;
