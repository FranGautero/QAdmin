import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ConectionScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Text>Por favor conectese en una red valida</Text>
    </SafeAreaView>
  );
};

export default ConectionScreen;
