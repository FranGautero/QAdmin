import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./hooks/useAuth";
import { IpProvider } from "./hooks/useConection";

export default function App() {
  return (
    <NavigationContainer>
      <IpProvider>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </IpProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
