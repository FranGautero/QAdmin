import React, { useState } from "react";
import { View, SafeAreaView, Image, Button } from "react-native";
import tw from "tailwind-rn";
import { Input } from "react-native-elements";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [ip, setIp] = useState(null);
  const [puerto, setPuerto] = useState(null);

  const { signIn } = useAuth();

  return (
    <SafeAreaView style={tw("flex-1 justify-center items-center")}>
      <Image
        style={{
          width: 256,
          height: 256,
          resizeMode: "contain",
          marginTop: -100,
        }}
        source={require("../assets/images/adaptive-icon.png")}
      />
      <View
        style={{
          width: 300,
          marginBottom: 25,
        }}
      >
        <Input
          placeholder={"Usuario"}
          value={user}
          onChangeText={(text) => setUser(text)}
        ></Input>
        <Input
          placeholder={"Contraseña"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        ></Input>
        <Input
          placeholder={"IP"}
          value={ip}
          onChangeText={(text) => setIp(text)}
        ></Input>
        <Input
          placeholder={"Puerto"}
          value={puerto}
          onChangeText={(text) => setPuerto(text)}
        ></Input>
      </View>

      <Button
        title="Iniciar Sesión"
        onPress={() => signIn(user, password, ip, puerto)}
        color={"gray"}
      ></Button>
    </SafeAreaView>
  );
};

export default LoginScreen;
