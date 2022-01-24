import React, { useState } from "react";
import { View, SafeAreaView, Image, Button } from "react-native";
import tw from "tailwind-rn";
import { Input } from "react-native-elements";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [ip, setIp] = useState(null);

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
          value={email}
          onChangeText={(text) => setEmail(text)}
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
      </View>

      <Button
        title="Iniciar Sesión"
        onPress={() => signIn(email, password, ip)}
        color={"gray"}
      ></Button>
    </SafeAreaView>
  );
};

export default LoginScreen;
