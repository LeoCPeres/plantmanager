import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  userImg: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },

  greeting: {
    fontSize: 32,
    fontFamily: fonts.light,
    color: colors.heading,
  },

  userName: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 32,
    lineHeight: 40,
  },
});
