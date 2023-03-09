import { theme } from "../../theme/theme";
import { StyleSheet } from "react-native";

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
  forgot: { fontSize: 15, color: theme.textDarkGray },
  viewText: {
    width: 350,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  imageView: {
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 40,
  },
});

export default styles;
