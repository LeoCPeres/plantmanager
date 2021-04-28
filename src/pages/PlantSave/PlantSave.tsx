import React from "react";
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SvgFromUri } from "react-native-svg";
import waterDrop from "../../assets/waterDrop.png";

import { styles } from "./styles";

export function PlantSave() {
  return (
    <>
      <View style={styles.container}>
        <SvgFromUri uri={} height={150} width={150} />
        <Text style={styles.plantName}>Nome da planta</Text>
        <Text style={styles.plantInfo}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quis
          veritatis id, minus accusamus maiores eligendi aliquam nobis!
        </Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterDrop} style={styles.tipImage} />
          <Text style={styles.tipText}>
            lorem ipsum dolor sit, amet consectetur adip
          </Text>
        </View>
      </View>
    </>
  );
}
