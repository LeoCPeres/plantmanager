import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginRight: 8,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },

  text: {
    fontSize: 16,
    color: colors.heading,
    fontFamily: fonts.text,
  },
});
