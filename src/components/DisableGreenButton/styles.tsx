import { StyleSheet, Platform, Dimensions } from "react-native";

import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(50, 183, 104, 0.5)",

    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.medium,
  },
});
