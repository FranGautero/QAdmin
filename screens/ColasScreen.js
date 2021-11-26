import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";

const ColasScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Header screenName={"Estadísticas de Colas"}></Header>
      <Text>Estadisiticas de Colas</Text>
    </SafeAreaView>
  );
};

export default ColasScreen;

const styles = StyleSheet.create({});
