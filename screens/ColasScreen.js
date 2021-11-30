import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EfficiencyCard from "../components/EfficiencyCard";
import { FlatList } from "react-native-gesture-handler";

import Header from "../components/Header";

const ColasScreen = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      nombre_cola: "107",
      cantidad_total: 6381,
      cantidad_atendidas: 5763,
    },
    {
      id: 2,
      nombre_cola: "central_derivaciones",
      cantidad_total: 3387,
      cantidad_atendidas: 2777,
    },
    {
      id: 3,
      nombre_cola: "mesa_sectorial",
      cantidad_total: 32,
      cantidad_atendidas: 23,
    },
    {
      id: 4,
      nombre_cola: "reguladores",
      cantidad_total: 236,
      cantidad_atendidas: 213,
    },
    {
      id: 5,
      nombre_cola: "traslados_iapos",
      cantidad_total: 367,
      cantidad_atendidas: 290,
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
      }}
    >
      <Header screenName={"Estadísticas de Colas"}></Header>
      <FlatList
        data={DUMMY_DATA}
        renderItem={({ item }) => <EfficiencyCard cola={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

export default ColasScreen;
