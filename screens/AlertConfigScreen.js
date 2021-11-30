import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import CircleSlider from "react-native-circle-slider";

const AlertConfigScreen = () => {
  const [value, setValue] = useState(100);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
      }}
    >
      <Header screenName={"Configuración de Alerta"}></Header>
      <View
        style={{
          position: "absolute",
          top: 200,
          start: "25%",
        }}
      >
        <CircleSlider min={0} dialRadius={80} />
      </View>
    </SafeAreaView>
  );
};

export default AlertConfigScreen;
