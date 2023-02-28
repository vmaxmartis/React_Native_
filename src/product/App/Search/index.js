import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { Loadding, SpaceBetween } from "./../../../components";
import ProductItem from "../Home/ProductItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../../theme/theme";
import { isEmpty } from "lodash";
import filterProducts from "./../Home/filter";

const Search = ({ filter, products, navigation }) => {
  const [resultProducts, setResultProducts] = React.useState(products);
  console.log("resultProducts:", resultProducts);
  React.useEffect(() => {
    setResultProducts(filterProducts(products, filter.searchText, 50, 150));
  }, [filter]);

  const viewProducts = () => {
    if (resultProducts.length % 2 === 1) [...products].push({});
    return resultProducts;
  };

  return (
    <View>
      <View style={styles.resultFor}>
        <SpaceBetween style={styles.recentSearch}>
          <Text style={styles.text}>Recent Searches </Text>
          <Loadding
            condition={filter.searchText.trim().length > 0}
            stopped={resultProducts.length === 0}
            time={{ maxTime: 1500, waitTime: 333 }}
            contents={"Đang tìm nè "}
          />
          <Icon name="navigate-next" size={25} color={theme.primary} />
        </SpaceBetween>
        <Text style={styles.text}>
          {filter.searchText
            ? "Search result for " + ` "${filter.searchText}"`
            : ""}
        </Text>
      </View>
      {viewProducts().length > 0 ? (
        <FlatList
          style={styles.searchList}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
          data={viewProducts()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ProductItem
              key={index}
              style={{ marginHorizontal: 1 }}
              name={item.name}
              price={item.price}
              imageSource={item.imageSource}
              backgroundColor={item.backgroundColor}
              favorite={true}
              onPress={() =>
                navigation.navigate("Detail", { productId: item.id })
              }
            />
          )}
        />
      ) : (
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "100" }}>
            Currently, there are no products that match the above keywords. . .
          </Text>
        </View>
      )}
    </View>
  );
};

Search.propTypes = {
  filter: PropTypes.object,
};

Search.defaultProps = {
  filter: {},
};

export default Search;

const styles = StyleSheet.create({
  recentSearch: {
    marginTop: 10,
  },
  searchList: {
    marginBottom: 190,
  },
  resultFor: {
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  itemStart: {
    marginRight: 5,
    marginBottom: 10,
  },
  itemMiddle: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  itemEnd: {
    marginLeft: 5,
    marginBottom: 10,
  },
});
