import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import AgentStatusScreen from "./screens/AgentStatusScreen";
import ConectionScreen from "./screens/ConectionScreen";
import useAuth from "./hooks/useAuth";
import useConection from "./hooks/useConection";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();
  const { ip } = useConection();
  // const ip = () => {
  //   return true;
  // };
  return (
    <Stack.Navigator>
      {!ip ? (
        <Stack.Screen name="Conection" component={ConectionScreen} />
      ) : !user ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen name="AgentStatus" component={AgentStatusScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
