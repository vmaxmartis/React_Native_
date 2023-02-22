import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Keyboard } from "react-native";
import { theme } from "../../theme/theme";
import withSafeArea from "../../Config/safeArea";
import AutoRender from "../../Config/AutoRender";
import { TouchableOpacity } from "react-native";
import LineWithText from "../../components/LineWithText";
import { useDispatch, useSelector } from "react-redux";
import TermConditions from "../../components/authComponents/TermConditions";
import { StackActions } from "@react-navigation/native";
import utils from "../../utils";
import LoginWithSocial from "../../components/authComponents/LoginWithSocial";

function Auth({ navigation }) {
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const userRedux = useSelector((state) => state.user);

  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShown(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShown(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const dispatch = useDispatch();
  const handleCheckField = () => {
    let fields = [email, password];
    if (signup) {
      fields.push(userName);
    }
    return utils.checkNullFormField(fields);
  };
  function clearForm() {
    setUserName("");
    setEmail("");
    setPassword("");
  }
  const handleLogin = () => {
    if (email === userRedux.email && password === userRedux.password) {
      alert("Logged in successfully");
      navigation.dispatch(StackActions.replace("Main"));
    } else if (email === userRedux.email && password !== userRedux.password) {
      alert("Password is incorrect");
      setPassword("");
    } else {
      setEmail("");
      alert("Email is incorrect");
    }
  };

  const nonAccount = () => {
    return (
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
        <Text style={{ color: theme.textDarkGray }}>
          {signup ? "Already a Accoutn?" : "Don't have an Accoutn?"}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setSignup(!signup);
            clearForm;
          }}
        >
          <Text style={{ fontWeight: "700" }}>
            {signup ? " Log in" : " Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const Authenticate = [
    !keyboardShown && {
      type: "image",
      src: require("../../../assets/logo.png"),
      viewStyle: {
        width: "100%",
        height: 100,
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 20,
      },
      imageStyle: { width: 80, height: 80 },
    },
    {
      type: "text",
      valueText: signup ? "Sign up" : "Log in",
      styleText: {
        fontSize: 25,
        fontWeight: "700",
        marginBottom: 40,
        marginTop: !keyboardShown ? 0 : 200,
      },
    },
    signup && {
      type: "input",
      placeholder: "Name",
      icon: "people",
      value: userName,
      initialValue: "",
      onChangeText: setUserName,
      styleView: { width: 350 },
      validateType: "username",
    },
    {
      type: "input",
      placeholder: "Email",
      icon: "mail",
      value: email,
      initialValue: "",
      onChangeText: setEmail,
      styleView: { width: 350 },
      validateType: "email",
    },
    {
      type: "input",
      placeholder: "Password",
      icon: "lock-closed",
      value: password,
      initialValue: "",
      onChangeText: setPassword,
      styleView: { width: 350 },
      validateType: "password",
    },
    !signup && {
      type: "text",
      styleText: { fontSize: 15, color: theme.textDarkGray },
      styleView: {
        width: 350,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 20,
      },
      valueText: "Forgot password ?",
    },
    signup && {
      type: "other",
      ordersComponnets: <TermConditions />,
    },
    {
      type: "button",
      title: signup ? "Sign up" : "Log in",

      disabled: handleCheckField(),
      handle: handleLogin,
    },
    {
      type: "other",
      ordersComponnets: LineWithText({ textValue: "Or" }),
    },
    {
      type: "other",
      ordersComponnets: <LoginWithSocial />,
    },
    {
      type: "other",
      ordersComponnets: nonAccount(),
    },
  ];
  return (
    <View style={styles.container}>
      <AutoRender flexDirection="column" data={Authenticate} />
    </View>
  );
}

export default withSafeArea(Auth);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.background,
  },
  loginWithSocial: {
    flexDirection: "row",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  socialImage: {
    backgroundColor: "#fff",
    width: 70,
    height: 70,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
    shadowOpacity: 0.37,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 50,
    },
  },
  iconSocialStyle: {
    width: 30,
    height: 30,
  },
  checkbox: {
    alignSelf: "center",
    borderRadius: 5,
  },
});
