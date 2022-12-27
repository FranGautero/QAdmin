import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function Header({ screenName, refreshFunction, runInterval }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          margin: 10,
          marginLeft: 16,
          width: 200,
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        {screenName}
      </Text>
      <TouchableOpacity
        style={{
          marginStart: 64,
        }}
        onPress={() => {
          refreshFunction(true);
          runInterval(false);
        }}
      >
        <Ionicons name="refresh" size={35} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{
          marginEnd: 16,
        }}
      >
        <Ionicons name="menu" size={35} color="black" />
      </TouchableOpacity>
    </View>
  );
}
