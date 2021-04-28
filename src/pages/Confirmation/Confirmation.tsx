import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { GreenButton } from "../../components/GreenButton/GreenButton";
import { styles } from "./styles";

import bigSmile from "../../assets/big_smile.png";
import { useNavigation } from "@react-navigation/core";

export function Confirmation() {
  const Navigation = useNavigation();

  function handleNavigateToPlantSelect() {
    Navigation.navigate("PlantSelect");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={bigSmile} style={styles.emoji}></Image>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          {" "}
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <GreenButton onPress={handleNavigateToPlantSelect}>
            Começar
          </GreenButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
