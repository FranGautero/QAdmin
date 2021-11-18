import { TwitterAuthProvider } from "@firebase/auth";
import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../hooks/useAuth";
import AgentCard from "../components/AgentCard";

const AgentStatusScreen = () => {
  const { logout } = useAuth();
  const navigation = useNavigation();

  const DUMMY_DATA = {
    agente1: {
      interno: 420,
      horaLogIn: 420,
    },
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <AgentCard></AgentCard>
    </SafeAreaView>
  );
};

export default AgentStatusScreen;

const styles = StyleSheet.create({});
