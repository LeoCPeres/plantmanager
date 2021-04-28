import { StyleSheet, Platform } from "react-native";

import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",

    paddingTop: Platform.OS === "android" ? 15 : 0,
  },

  title: {
    alignSelf: "flex-start",
    fontSize: 17,
    fontFamily: fonts.medium,
    color: colors.body,
    marginTop: 20,
    lineHeight: 20,
  },

  enviromentList: {
    paddingBottom: 5,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 32,
    marginVertical: 32,
  },

  header: {
    paddingHorizontal: 30,
  },

  plants: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  subtitle: {
    alignSelf: "flex-start",
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.body,
    lineHeight: 20,
  },
});
