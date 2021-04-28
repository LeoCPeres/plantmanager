import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { styles } from "./styles";
import LoadAnimation from "../../assets/load.json";

export function Load() {
  return (
    <View style={styles.container}>
      <LottieView
        source={LoadAnimation}
        autoPlay
        loop
        style={styles.animation}
      ></LottieView>
    </View>
  );
}
