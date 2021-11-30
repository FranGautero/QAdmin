import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import AgentStatusScreen from "./screens/AgentStatusScreen";
import ColasScreen from "./screens/ColasScreen";
import AlertConfigScreen from "./screens/AlertConfigScreen";
import useAuth from "./hooks/useAuth";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { logout } = useAuth();
  return (
    <Drawer.Navigator
      initialRouteName="AgentStatus"
      screenOptions={{
        drawerPosition: "right",
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Cerrar Sesión" onPress={logout} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Agentes Online"
        component={AgentStatusScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Estadísitcas de Colas"
        component={ColasScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Configuración de Alerta"
        component={AlertConfigScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
