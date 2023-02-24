import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { HeaderApp, Loadding, SpaceBetween } from "./../../../components";
import ProductItem from "../Home/ProductItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../../theme/theme";
import { isEmpty } from "lodash";
import filterProducts from "./../Home/filter";
import SearchBox from "../../../components/SearchBox";
import WithSafeArea from "./../../../Config/safeArea";
import products from "../../../FakeData/products";

const Search = ({ navigation, route }) => {
  const [searchText, setSearchText] = React.useState("");
  const [resultProducts, setResultProducts] = React.useState(
    filterProducts(products, searchText)
  );
  React.useEffect(() => {
    setResultProducts(filterProducts(products, route.params.filter.searchText));
    setSearchText(route.params.filter.searchText);
  }, []);
  React.useEffect(() => {
    setResultProducts(filterProducts(products, searchText));
  }, [searchText]);

  return (
    <View style={styles.container}>
      <HeaderApp
        title={"15/2 Texas"}
        styleTitle={{}}
        iconLeft={"md-menu-outline"}
        onPressLeftIcon={() => route.params.drawer.openDrawer()}
        iconRight={"notifications"}
      />
      <SearchBox
        handleSubmit={() => {}}
        onChangeText={setSearchText}
        value={searchText}
      />
      <View style={styles.resultFor}>
        <SpaceBetween style={styles.recentSearch}>
          <Text style={styles.text}>Recent Searches </Text>
          <Loadding
            condition={searchText.trim().length > 0}
            stopped={resultProducts.length === 0}
            time={{ maxTime: 1500, waitTime: 333 }}
            contents={"Đang tìm nè "}
          />
          <Icon name="navigate-next" size={25} color={theme.primary} />
        </SpaceBetween>
        <Text style={styles.text}>
          {searchText ? "Search result for " + ` "${searchText}"` : ""}
        </Text>
      </View>
      {resultProducts.length === 0 ? (
        <FlatList
          style={styles.searchList}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
          data={resultProducts}
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

export default WithSafeArea(Search);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 20,
  },
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
});
