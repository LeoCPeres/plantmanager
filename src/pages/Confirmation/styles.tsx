import { Platform, StyleSheet } from "react-native";
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
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    marginTop: 40,
    width: 231,
    paddingHorizontal: 20,
  },

  title: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.heading,
    marginTop: 60,
  },
  subtitle: {
    textAlign: "center",
    color: colors.body,
    fontFamily: fonts.text,
    fontSize: 17,
    marginTop: 20,
  },
  emoji: {},
});
