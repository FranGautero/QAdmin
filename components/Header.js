import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function Header({ screenName }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          margin: 10,
          marginLeft: 16,
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        {screenName}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{
          marginEnd: 28,
        }}
      >
        <Ionicons name="menu" size={35} color="black" />
      </TouchableOpacity>
    </View>
  );
}
