import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import useAuth from "../hooks/useAuth";

const AgentStatusScreen = () => {
  const { logout } = useAuth();
  return (
    <View>
      <Text>Status Screen</Text>
      <Button title={"LogOut"} onPress={logout}></Button>
    </View>
  );
};

export default AgentStatusScreen;

const styles = StyleSheet.create({});
