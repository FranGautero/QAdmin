import React, { useState } from "react";
import { View, SafeAreaView, Image, Button } from "react-native";
import tw from "tailwind-rn";
import { Input } from "react-native-elements";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { signInFirebase } = useAuth();

  return (
    <SafeAreaView style={tw("flex-1 justify-center items-center")}>
      <Image
        style={{
          width: 150,
          height: 150,
          resizeMode: "contain",
          marginTop: -100,
        }}
        source={require("../assets/images/icon.png")}
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
      </View>

      <Button
        title="Iniciar Sesión"
        onPress={() => signInFirebase(email, password)}
        color={"gray"}
      ></Button>
    </SafeAreaView>
  );
};

export default LoginScreen;
