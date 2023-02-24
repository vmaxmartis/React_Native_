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
import products from "./../../../FakeData/products";
import categories from "../../../FakeData/categories";
import { theme } from "../../../theme/theme";

const defaultFilter = {
  category: "",
  searchText: "",
  pricing: null,
  distance: null,
};

const Home = ({ drawerRef, navigation }) => {
  const { width } = useWindowDimensions();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterCategories, setFilterCategories] = useState([]);
  const [filter, setFilter] = useState(defaultFilter);

  return (
    <View>
      <View style={[styles.container, { width }]}>
        <HeaderApp
          title={"15/2 Texas"}
          styleTitle={{}}
          iconLeft={"md-menu-outline"}
          onPressLeftIcon={() => navigation.openDrawer()}
          iconRight={"notifications"}
        />
        <View>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.slogan}>Slogan</Text>
        </View>
        <SearchBox
          value={filter.searchText}
          onChangeText={(text) => setFilter({ searchText: text })}
          handleSubmit={() =>
            navigation.navigate("Search", { filter, drawer: navigation })
          }
        />
        <View>
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
          <SpaceBetween style={styles.header}>
            <Text style={styles.headerTitle}>NEW ARRIVAL</Text>
            <Text style={styles.headerLink}>See all</Text>
          </SpaceBetween>
          <View style={styles.productContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  price={item.price}
                  imageSource={item.imageSource}
                  backgroundColor={item.backgroundColor}
                  onPress={() => {
                    navigation.navigate("Detail", { productId: item.id });
                  }}
                  hideFavorite={true}
                />
              ))}
            </ScrollView>
          </View>
        </View>
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
  header: {
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },
  headerLink: {
    fontSize: 16,
    color: "#7e7e80",
  },
  productContainer: {
    justifyContent: "center",
  },
});
