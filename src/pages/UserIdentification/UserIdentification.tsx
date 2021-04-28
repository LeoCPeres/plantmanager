import React, { useState } from "react";
import {
  Image,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import colors from "../../../styles/colors";

import smile from "../../assets/smile.png";
import eyeSmile from "../../assets/eye_smile.png";

import { GreenButton } from "../../components/GreenButton/GreenButton";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { DisableGreenButton } from "../../components/DisableGreenButton/DisableGreenButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function UserIndentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [name, setName] = useState<string>("");

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  const Navigation = useNavigation();

  async function handleConfirm() {
    await AsyncStorage.setItem("@plantmanager:user", name);

    Navigation.navigate("Confirmation");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.form}>
            {isFilled ? (
              <Image source={eyeSmile}></Image>
            ) : (
              <Image source={smile}></Image>
            )}
            <Text style={styles.title}>Como podemos {"\n"} chamar você?</Text>
            <TextInput
              style={[
                styles.textInput,

                (isFocused || isFilled) && {
                  borderColor: colors.green,
                },
              ]}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            ></TextInput>
            <View style={styles.footer}>
              {isFilled ? (
                <GreenButton onPress={handleConfirm}>Confirmar</GreenButton>
              ) : (
                <DisableGreenButton onPress={handleConfirm}>
                  Confirmar
                </DisableGreenButton>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
