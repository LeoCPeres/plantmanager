import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";

interface EnviromentButtonProps extends RectButtonProps {
  active?: boolean;
}

export const EnviromentButton: React.FC<EnviromentButtonProps> = ({
  children,
  active = false,
  ...rest
}) => {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.text, active && styles.textActive]}>{children}</Text>
    </RectButton>
  );
};
