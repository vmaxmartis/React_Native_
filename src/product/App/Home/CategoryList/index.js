import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import WithSafeArea from "../../../../Config/safeArea";
import { BaseButton, HeaderApp, Icon } from "../../../../components";
import ProductItem from "./../ProductItem/index";
import { useDispatch } from "react-redux";
import Icons from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../../../theme/theme";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "./../../../../lib/api";

const screenWidth = Dimensions.get("window").width + 25;

function CategoryList({ route, navigation }) {
  const prods = route.params.prod;
  const [products, setProducts] = React.useState([]);
  console.log("products:", products);

  const dispatch = useDispatch();
  const handlGetProducts = createAsyncThunk("auth/demo", async () => {
    try {
      const response = await axios.get(`${API.products}?populate=*`);
      setProducts(response.data.data);
      return console.log("response prods:", response);
    } catch (err) {
      console.log("err", err);
    }
  });

  const onLogin = () => {
    dispatch(handlGetProducts());
    //  dispatch(handlSignUp(payload));
  };

  return (
    <View style={{ marginHorizontal: 10, alignItems: "center" }}>
      <HeaderApp
        showGoBack
        title={route.params.lable}
        isButton
        route={navigation}
      />
      <BaseButton title={"GET API"} onPress={onLogin} />
      <ScrollView>
        {products.map((item, i) => {
          console.log("item:", item);
          const imageUrl = `https://yt3.googleusercontent.com/ytc/AL5GRJVV4yw_WEdpdKWNscQWFbm4K8yWBB5hAdFo_Xx9=s900-c-k-c0x00ffffff-no-rj`;
          console.log("imageUrl:", imageUrl);
          return (
            <TouchableOpacity
              style={[styles.container]}
              activeOpacity={0.8}
              onPress={() => {}}
              key={i}
            >
              <View style={{}}>
                <Image
                  style={[
                    styles.image,
                    // { backgroundColor: data.backgroundColor },
                  ]}
                  source={{
                    uri: imageUrl,
                  }}
                />
              </View>

              <TouchableOpacity onPress={() => {}} style={styles.favorite}>
                <Icon
                  iconComponent={Icons}
                  name={
                    item.attributes.favorite ? "favorite" : "favorite-outline"
                  }
                  color={
                    item.attributes ? theme.primary : theme.primaryDisabled
                  }
                  size={15}
                />
              </TouchableOpacity>

              <Text style={styles.name}>{item.attributes.name}</Text>
              <Text style={styles.price}>${item.attributes.price}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
export default WithSafeArea(CategoryList);

const styles = StyleSheet.create({
  container: {
    width: 170,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 5,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  favorite: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 30,
    height: 30,
    position: "absolute",
    top: 15,
    right: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 15,
  },
  price: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
