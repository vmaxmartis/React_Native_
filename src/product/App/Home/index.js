import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { SearchBox, SpaceBetween } from "../../../components/index";
import WithSafeArea from "../../../Config/safeArea";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";
import Header from "./Header";
import products from "./../../../FakeData/products";
import categories from "../../../FakeData/categories";
import { theme } from "../../../theme/theme";
import { isEmpty, isNull } from "lodash";
import Search from "../Search";

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
  const [openSearch, setOpenSearch] = useState(true);
  const [filter, setFilter] = useState(defaultFilter);

  React.useEffect(() => {
    if (!isEmpty(filter.searchText)) {
      setOpenSearch(true);
    } else {
      setOpenSearch(false);
    }
  });
  return (
    <View>
      <View style={[styles.container, { width }]}>
        <Header onPressMenu={() => drawerRef.current.openDrawer()} />
        {!openSearch && (
          <View>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.slogan}>Slogan</Text>
          </View>
        )}
        <SearchBox
          value={filter.searchText}
          onChangeText={(text) => setFilter({ searchText: text })}
          onFocus={() => !isNull(filter.searchText) && setOpenSearch(true)}
          onBlur={() => setOpenSearch(false)}
        />
        {!openSearch ? (
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
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Search
            navigation={navigation}
            products={products || []}
            filter={filter}
          />
        )}
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
