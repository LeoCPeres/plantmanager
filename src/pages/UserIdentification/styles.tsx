import { StyleSheet, Platform, Dimensions } from "react-native";

import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? 15 : 0,
    paddingHorizontal: 30,
  },

  content: {
    flex: 1,
    width: "100%",
  },

  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 20,
  },

  textInput: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.body,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },

  footer: {
    marginTop: 40,
    width: 231,
    paddingHorizontal: 20,
  },
});
