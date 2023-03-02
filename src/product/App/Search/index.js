import React, { useEffect } from "react";
import { isEmpty } from "lodash";
import { FlatList, StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { HeaderApp, SpaceBetween } from "./../../../components";
import ProductItem from "../Home/ProductItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../../theme/theme";
import SearchBox from "../../../components/SearchBox";
import WithSafeArea from "./../../../Config/safeArea";
import { getData } from "./../../../utils/getData";
import { filterResult } from "../../../redux/slide/productSlide";
import utils from "../../../utils";

const Search = ({ navigation, route }) => {
  const DataResults = getData("ressultFilter");
  const product = getData("product");
  const [searchText, setSearchText] = React.useState("");
  const [resultProducts, setResultProducts] = React.useState([]);

  useEffect(() => {
    setSearchText(route.params.filter.searchText);
  }, []);
  useEffect(() => {
    setResultProducts(utils.filterByName(product, searchText));
  }, [searchText]);

  useEffect(() => {
    setResultProducts(DataResults);
  }, [DataResults]);

  return (
    <View style={styles.container}>
      <HeaderApp
        title={"15/2 Texas"}
        isButton
        iconLeft={"md-menu-outline"}
        onPressLeftIcon={() => navigation.openDrawer()}
        iconRight={"notifications"}
      />
      <SearchBox
        onChangeText={(text) => {
          setSearchText(text);
        }}
        value={searchText}
      />
      <View style={styles.resultFor}>
        <SpaceBetween style={styles.recentSearch}>
          <Text style={styles.text}>Recent Searches </Text>
          <Icon name="navigate-next" size={25} color={theme.primary} />
        </SpaceBetween>
        <Text style={styles.text}>
          {searchText ? "Search result for " + ` "${searchText}"` : ""}
        </Text>
      </View>
      {(searchText.trim().length != "" || filterResult) && (
        <>
          {!isEmpty(resultProducts) ? (
            <FlatList
              columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
              data={resultProducts}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <ProductItem
                  key={index}
                  data={item}
                  hideFavorite
                  onPress={() =>
                    navigation.navigate("Detail", { productId: item.id })
                  }
                />
              )}
            />
          ) : (
            <View style={styles.nonProduct}>
              <Text style={{ fontSize: 15, fontWeight: "100" }}>
                Currently, there are no products that match the above keywords
              </Text>
            </View>
          )}
        </>
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
  resultFor: {
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  nonProduct: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
