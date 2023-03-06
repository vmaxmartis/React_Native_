import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SpaceBetween } from "../../../components/index";
import ProductItem from "./ProductItem";
import { getData } from "../../../utils/getData";
import { PropTypes } from "prop-types";
import categoryList from "../../../FakeData/CategoryContent";

function CategoryContent({ navigation }) {
  const products = getData("product");
  const contents = categoryList.slice(0, 3);
  return (
    <>
      {contents.map((item, index) => {
        const categoryId = index;
        const prod = products.filter((prod) => prod.categoryId === categoryId);
        return (
          <View key={index}>
            <SpaceBetween style={styles.header}>
              <Text style={styles.headerTitle}>{item.lable}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CategoryList", {
                    id: categoryId,
                    lable: item.lable,
                    prod: prod,
                  })
                }
              >
                <Text style={styles.headerLink}>See all</Text>
              </TouchableOpacity>
            </SpaceBetween>
            <View style={styles.productContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {prod.map((prod, i) => (
                  <ProductItem
                    key={i}
                    data={prod}
                    onPress={() => {
                      navigation.navigate("Detail", {
                        productId: prod.id,
                      });
                    }}
                    hideFavorite={true}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        );
      })}
    </>
  );
}

CategoryContent.defaultProps = {
  categoryList: PropTypes.array,
};

CategoryContent.defaultProps = {
  categoryList: [
    { lable: "NEW ARRIVAL" },
    { lable: "TOP TRANDING" },
    { lable: "BEST SALE" },
  ],
};
export default CategoryContent;
const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
  },
  headerTitle: {
    textTransform: "uppercase",
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
