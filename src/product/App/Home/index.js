import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { SpaceBetween, HeaderApp } from "../../../components/index";
import SearchBox from "../../../components/SearchBox";
import WithSafeArea from "../../../Config/safeArea";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";
import categories from "../../../FakeData/categories";
import { getData } from "./../../../utils/getData";
import CategoryContent from "./CategoryContent";

const defaultFilter = {
  category: "",
  searchText: "",
  pricing: 0,
  distance: 0,
};

const Home = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [filter, setFilter] = useState(defaultFilter);
  const products = getData("product");
  const CategoryList = [
    { lable: "NEW ARRIVAL" },
    { lable: "TOP TRANDING" },
    { lable: "BEST SALE" },
    { lable: "OTHER" },
  ];

  return (
    <View>
      <View style={[styles.container, { width }]}>
        <HeaderApp
          title={"15/2 Texas"}
          styleTitle={{}}
          isButton
          iconLeft={"md-menu-outline"}
          onPressLeftIcon={() => navigation.openDrawer()}
          iconRight={"notifications"}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.slogan}>Slogan</Text>
          </View>
          <SearchBox
            value={filter.searchText}
            onChangeText={(text) => setFilter({ searchText: text })}
            handleSubmit={() =>
              navigation.navigate("Search", { filter, navigation })
            }
          />
          <ScrollView>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.category}
            >
              {categories.map((item, index) => (
                <CategoryItem
                  key={index}
                  style={{ marginHorizontal: 10 }}
                  selected={selectedCategory === index}
                  label={item.label}
                  imageSource={item.imageSource}
                  onPress={() => setSelectedCategory(index)}
                />
              ))}
            </ScrollView>
            <CategoryContent
              navigation={navigation}
              categoryList={CategoryList}
            />
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

export default WithSafeArea(Home);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    fontWeight: "bold",
  },
  slogan: {
    fontSize: 18,
    color: "#b1b1b1",
    marginBottom: 20,
  },
  category: {
    marginTop: 20,
    marginBottom: 20,
  },
});
