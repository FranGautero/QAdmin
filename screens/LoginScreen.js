import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-rn";

import { Input, Button } from "react-native-elements";
import tailwind from "tailwind-rn";
import { useNavigation } from "@react-navigation/core";
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw("flex-1 justify-center items-center")}>
      <Image
        style={{
          width: 150,
          height: 150,
          resizeMode: "contain",
          marginTop: -100,
        }}
        source={require("../assets/Qualis_Logo.png")}
      />
      <Input></Input>
      <Input></Input>
      <Button
        title="Log In"
        onPress={() => navigation.navigate("AgentStatus")}
      ></Button>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
