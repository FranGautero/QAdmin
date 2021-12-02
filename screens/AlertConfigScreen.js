import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import CircularSlider from "rn-circular-slider";

const AlertConfigScreen = () => {
  const [value, setValue] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
      }}
    >
      <Header screenName={"Configuración de Alerta"}></Header>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View
          style={{
            margin: 32,
            marginLeft: 16,
          }}
        >
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Seleccionar porcentaje de eficiencia
          </Text>
          <Text
            style={{
              fontStyle: "normal",
              color: "#9B9B9B",
              marginTop: 16,
            }}
          >
            Parámetro que indica a que porcentaje de eficiencia será lanzada una
            notificación a su dispositivo
          </Text>
        </View>

        <CircularSlider
          step={1}
          min={10}
          max={100}
          value={value}
          onChange={setValue}
          contentContainerStyle={styles.contentContainerStyle}
          strokeWidth={10}
          buttonBorderColor="#81b0ff"
          buttonFillColor="#fff"
          buttonStrokeWidth={10}
          openingRadian={Math.PI / 4}
          buttonRadius={10}
          linearGradient={[
            { stop: "0%", color: "#3FE3EB" },
            { stop: "100%", color: "#81b0ff" },
          ]}
        >
          <Text style={styles.value}>{`${value}%`}</Text>
        </CircularSlider>
        <View
          style={{
            margin: 16,
            marginRight: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Activar Alerta
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
          />
        </View>
        <Text
          style={{
            fontStyle: "normal",
            color: "#9B9B9B",
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          Una vez activada la Alerta se evaluarán todas las colas, y si alguna
          cae por debajo del porcentaje elegido se notificará.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AlertConfigScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontWeight: "500",
    fontSize: 32,
    color: "#81b0ff",
  },
});
