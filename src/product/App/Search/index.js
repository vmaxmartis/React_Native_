import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { HeaderApp } from "./../../../components";
import SearchBox from "../../../components/SearchBox";
import WithSafeArea from "./../../../Config/safeArea";
import { getData } from "./../../../utils/getData";
import utils from "../../../utils";
import SearchResults from "./SearchResults";
import RecentSearch from "./RecentSearch";
import { isEmpty } from "lodash";

const Search = ({ navigation, route }) => {
  const param = route.params.filter.searchText;
  const DataResults = getData("ressultFilter");
  const product = getData("product");
  const [searchText, setSearchText] = React.useState("");
  const [resultProducts, setResultProducts] = React.useState([]);
  useEffect(() => {
    setSearchText(param);
  }, []);
  useEffect(() => {
    setResultProducts(
      utils.filterByName(
        isEmpty(DataResults) ? product : DataResults,
        searchText
      )
    );
  }, [searchText]);

  useEffect(() => {
    setResultProducts(DataResults);
  }, [DataResults]);

  const data = {
    searchText: searchText,
    product: product,
    resultProducts: resultProducts,
    navigation: navigation,
  };

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
        setSearchText={setSearchText}
      />
      <RecentSearch setSearchText={setSearchText} />
      <SearchResults dataResult={data} />
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
  resultContainer: {
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
