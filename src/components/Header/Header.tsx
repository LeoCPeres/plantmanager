import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import userImg from "../../assets/perfil.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface HeaderProps {
  lightTitle: string;
  title: string;
}

export function Header(props: HeaderProps) {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStoreUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }
    loadStoreUserName();
  }, [userName]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>{props.lightTitle}</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={userImg} style={styles.userImg}></Image>
    </View>
  );
}
