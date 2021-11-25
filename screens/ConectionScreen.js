import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ConectionScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 18,
        }}
      >
        Por favor conéctese en una red WIFI válida
      </Text>
    </SafeAreaView>
  );
};

export default ConectionScreen;
