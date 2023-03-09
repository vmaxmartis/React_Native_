import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./Style";
import withSafeArea from "../../Config/safeArea";
import { useDispatch } from "react-redux";
import { StackActions } from "@react-navigation/native";
import utils from "../../utils";
import { getData } from "../../utils/getData";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import HiddenKeyBoard from "../../Config/HideKeyBoard";
import { signUp } from "../../redux/slide/siginUpSlice";
import { login } from "../../redux/slide/userSlide";
import API from "./../../lib/api";
import {
  BaseButton,
  BaseInputField,
  BaseText,
  CustomImage,
  LineWithText,
  LoginWithSocial,
  TermConditions,
  NonAccount,
} from "../../components";

function Auth({ navigation }) {
  const [isSignup, setIsSignup] = useState(false);
  console.log("signup:", isSignup);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isSuccessRegister = getData("register");
  const User = getData("user");

  const dispatch = useDispatch();
  function clearForm() {
    setUserName("");
    setEmail("");
    setPassword("");
    setIsSignup(!isSignup);
  }
  const handleSignUp = createAsyncThunk("auth/register", async (payload) => {
    try {
      const response = await axios.post(`${API.register}`, payload);
      dispatch(signUp(response));
      return response;
    } catch (err) {
      console.log("err", err);
    }
  });
  const handleLogin = createAsyncThunk("auth/login", async (payload) => {
    try {
      const response = await axios.post(`${API.login}`, payload);
      const dataUser = response.data.user;
      console.log("dataUser:", dataUser);
      if (response.status === 200) {
        Object.assign(response.data.user, {
          isLogin: true,
        });
        console.log("dataUser:", dataUser);
        dispatch(login(dataUser));
      }
      return response;
    } catch (err) {
      setErrorMessage(err.response.data.error.message);
    }
  });

  useEffect(() => {
    if (isSuccessRegister.status === 200) {
      setIsSignup(false);
      clearForm();
      setEmail(isSuccessRegister.data.user.email);
    }
  }, [isSuccessRegister]);
  useEffect(() => {
    if (User.isLogin === true) {
      alert("Logged in successfully");
      navigation.dispatch(StackActions.replace("DrawerApp"));
    }
  }, [User]);

  const onRegister = () => {
    dispatch(
      handleSignUp({
        email: email,
        password: password,
        username: userName,
      })
    );
  };
  const onlogIn = () => {
    dispatch(
      handleLogin({
        identifier: email,
        password: password,
      })
    );
  };
  return (
    <View style={styles.container}>
      {!HiddenKeyBoard() && (
        <CustomImage
          src={require("../../../assets/logo.png")}
          viewStyle={styles.imageView}
          imageStyle={{ with: 90, height: 90 }}
        />
      )}
      <BaseText
        valueText={isSignup ? "Sign up" : "Log in"}
        styleText={[styles.title, { marginTop: !HiddenKeyBoard() ? 0 : 200 }]}
        validateType="name"
      />
      {isSignup && (
        <BaseInputField
          styleView={{ width: 350 }}
          icon={"people"}
          placeholder="Name"
          onChangeText={setUserName}
          value={userName}
        />
      )}
      <BaseInputField
        validateType="email"
        styleView={{ width: 350 }}
        icon={"mail"}
        placeholder="Mail"
        onChangeText={setEmail}
        value={email}
      />
      <BaseInputField
        validateType="password"
        styleView={{ width: 350 }}
        icon={"lock-closed"}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
      />
      {isSignup ? (
        <TermConditions />
      ) : (
        <BaseText
          styleView={styles.viewText}
          valueText={"Forgot password ?"}
          styleText={styles.forgot}
        />
      )}
      <BaseButton
        onPress={isSignup ? onRegister : onlogIn}
        //   disabled={handleCheckField()}
        title={isSignup ? "Sign up" : "Log in"}
      />
      <LineWithText textValue={"Or"} />
      <LoginWithSocial />
      <NonAccount signup={isSignup} handle={() => clearForm} />
    </View>
  );
}
export default withSafeArea(Auth);
