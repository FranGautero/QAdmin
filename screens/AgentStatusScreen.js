import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../hooks/useAuth";
import AgentCard from "../components/AgentCard";
import { FlatList } from "react-native-gesture-handler";

const AgentStatusScreen = () => {
  const { logout } = useAuth();
  const navigation = useNavigation();

  const DUMMY_DATA = {
    success: true,
    totalCount: 5,
    registros: [
      {
        agente_nro: 101,
        agente_nombre: "Jesica Sirio",
        timestamp_login: 1637816635,
        interno_login: 301,
      },
      {
        agente_nro: 205,
        agente_nombre: "Pedro Gonzalez",
        timestamp_login: 1637834268,
        interno_login: 101,
      },
      {
        agente_nro: 103,
        agente_nombre: "Silvina Luna",
        timestamp_login: 1637804508,
        interno_login: 402,
      },
      {
        agente_nro: 102,
        agente_nombre: "Burrito Ortega",
        timestamp_login: 1637807208,
        interno_login: 303,
      },
      {
        agente_nro: 204,
        agente_nombre: "Lionel Maradona",
        timestamp_login: 1637821364,
        interno_login: 104,
      },
    ],
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Button title={"logout"} onPress={logout}></Button>
      <Text
        style={{
          margin: 10,
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Online
      </Text>
      <FlatList
        data={DUMMY_DATA.registros}
        renderItem={({ item }) => <AgentCard agent={item} />}
        keyExtractor={(item) => item.agente_nro}
      ></FlatList>
    </SafeAreaView>
  );
};

export default AgentStatusScreen;

const styles = StyleSheet.create({});
