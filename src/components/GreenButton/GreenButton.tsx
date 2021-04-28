import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

interface GreenButtonProps extends TouchableOpacityProps {}

export const GreenButton: React.FC<GreenButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
