import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  FlatList,
} from "react-native";
import colors from "../../../styles/colors";
import { BigCard } from "../../components/BigCard/BigCard";
import { EnviromentButton } from "../../components/EnviromentButton/EnviromentButton";
import { Header } from "../../components/Header/Header";
import { Load } from "../../components/Load/Load";
import api from "../../services/api";
import { styles } from "./styles";

interface EnviromentsProps {
  key: string;
  title: string;
}

interface PlantsProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: Array<string>;
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([]);

  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);

  const [enviromentSelected, setEnviromentSelected] = useState("all");

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(true);

  function handleSelected(enviroments: string) {
    setEnviromentSelected(enviroments);

    if (enviroments == "all") return setFilteredPlants(plants);

    const filtered = plants.filter((plant) =>
      plant.environments.includes(enviroments)
    );

    setFilteredPlants(filtered);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return;
    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_asc&_page=${page}&_limit=8`
    );

    if (!data) return setLoading(true);

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get("plants_environments?_sort=title&_asc");
      setEnviroments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }

    fetchEnviroment();
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header lightTitle="Olá," title="Leonardo" />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={enviroments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnviromentButton
              active={item.key === enviromentSelected}
              onPress={() => handleSelected(item.key)}
            >
              {item.title}
            </EnviromentButton>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <BigCard data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </View>
    </SafeAreaView>
  );
}
