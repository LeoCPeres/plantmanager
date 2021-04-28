import { StyleSheet, Platform, Dimensions } from "react-native";

import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? 15 : 0,
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 32,
    lineHeight: 38,
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
  },

  image: {
    height: Dimensions.get("window").width * 0.7,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.body,
    fontFamily: fonts.text,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 20,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 30,
    color: colors.white,
  },
});
