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

  const DUMMY_DATA = [
    {
      id: 1,
      interno: 420,
      horaLogIn: 420,
    },
    {
      id: 2,
      interno: 421,
      horaLogIn: 420,
    },
    {
      id: 3,
      interno: 422,
      horaLogIn: 420,
    },
    {
      id: 4,
      interno: 423,
      horaLogIn: 420,
    },
    {
      id: 5,
      interno: 424,
      horaLogIn: 420,
    },
    {
      id: 6,
      interno: 425,
      horaLogIn: 420,
    },
    {
      id: 7,
      interno: 426,
      horaLogIn: 420,
    },
    {
      id: 8,
      interno: 427,
      horaLogIn: 420,
    },
    {
      id: 9,
      interno: 428,
      horaLogIn: 420,
    },
    {
      id: 10,
      interno: 429,
      horaLogIn: 420,
    },
  ];

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
        data={DUMMY_DATA}
        renderItem={({ item }) => <AgentCard agent={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

export default AgentStatusScreen;

const styles = StyleSheet.create({});
