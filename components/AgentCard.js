import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const AgentCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.agentCircle}></View>
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 17,
            marginBottom: 3,
          }}
        >
          Agente 420
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            color: "#9B9B9B",
          }}
        >
          time: 69
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginStart: 145,
        }}
      >
        <Ionicons name="chevron-down" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default AgentCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    marginHorizontal: 15,
    height: 80,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 15,

    alignItems: "center",
    flexDirection: "row",
  },
  agentCircle: {
    marginTop: -20,
    backgroundColor: "#04DB00",
    height: 27,
    width: 27,
    borderRadius: 50,
  },
});
