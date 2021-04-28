import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

interface DisableGreenButtonProps extends TouchableOpacityProps {}

export const DisableGreenButton: React.FC<DisableGreenButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
      disabled
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
