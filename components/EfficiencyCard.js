import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressCircle from "react-native-progress-circle";

const EfficiencyCard = ({ cola }) => {
  const eficiencia = Math.round(
    (cola.cantidad_atendidas / cola.cantidad_total) * 100
  );

  const [color, setColor] = useState("#3399FF");

  useEffect(() => {
    if (eficiencia <= 75 && eficiencia >= 50) {
      setColor("#ff9f1e");
    } else {
      if (eficiencia < 50) {
        setColor("#ff0000");
      } else {
        setColor("#3399FF");
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          margin: 10,
          width: 224,
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 17,
            marginBottom: 16,
          }}
        >
          {`Cola: ${cola.nombre_cola}`}
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            color: "#9B9B9B",
            marginBottom: 8,
          }}
        >
          {`Llamadas Totales: ${cola.cantidad_total}`}
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            color: "#9B9B9B",
            marginBottom: 8,
          }}
        >
          {`Llamadas Atendidas: ${cola.cantidad_atendidas}`}
        </Text>
      </View>

      <ProgressCircle
        percent={eficiencia}
        radius={35}
        borderWidth={8}
        color={color}
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 16 }}>{`${eficiencia}%`}</Text>
      </ProgressCircle>
    </View>
  );
};

export default EfficiencyCard;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 32,

    margin: 10,
    marginHorizontal: 15,
    height: 116,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,

    elevation: 1,
    borderRadius: 15,

    alignItems: "center",
    flexDirection: "row",
  },
});
