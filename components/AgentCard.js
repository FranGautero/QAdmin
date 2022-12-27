import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

const AgentCard = ({ agent }) => {
  const [Expanded, setExpanded] = useState(false);

  //get tiempo de fichado
  const startClockTime = Math.round(Date.now() - agent.timestamp_login * 1000);

  const date = new Date(agent.timestamp_login * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const Hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const options = {
    text: {
      fontStyle: "normal",
      color: "#9B9B9B",
    },
  };

  return !Expanded ? (
    <View style={styles.containerContracted}>
      <View style={styles.agentCircleContracted}></View>
      <View
        style={{
          marginHorizontal: 20,
          width: 230,
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 17,
            marginTop: -5,
            marginBottom: 16,
          }}
        >
          {`Agente: ${agent.agente_nro.split("/")[1]}`}
        </Text>
        <View
          styles={{
            flexDirection: "row",
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 0,
            }}
          >
            <Text
              style={{
                fontStyle: "normal",
                color: "#9B9B9B",
                marginBottom: 8,
              }}
            >
              {`Tiempo de Log In:`}
            </Text>
          </View>

          <View
            style={{
              position: "absolute",
              left: 120,
            }}
          >
            <Stopwatch
              start={true}
              options={options}
              startTime={startClockTime}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setExpanded(true);
        }}
      >
        <Ionicons name="chevron-down" size={30} color="black" />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.containerExpanded}>
      <View style={styles.agentCircleExpanded}></View>
      <View
        style={{
          marginHorizontal: 20,
          width: 230,
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
          {`Agente: ${agent.agente_nro.split("/")[1]}`}
        </Text>
        <View
          styles={{
            flexDirection: "row",
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 0,
            }}
          >
            <Text
              style={{
                fontStyle: "normal",
                color: "#9B9B9B",
                marginBottom: 8,
              }}
            >
              {`Tiempo de Log In:`}
            </Text>
          </View>

          <View
            style={{
              position: "absolute",
              left: 120,
            }}
          >
            <Stopwatch start={true} options={options} />
          </View>
        </View>

        <Text
          style={{
            fontStyle: "normal",
            color: "#9B9B9B",
            marginTop: 28,
            marginBottom: 8,
          }}
        >
          {`Usuario: ${agent.agente_nombre}`}
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            color: "#9B9B9B",
            marginBottom: 8,
          }}
        >
          {`Interno: ${agent.interno_login.split("@")[0]}`}
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            color: "#9B9B9B",
            marginBottom: 8,
          }}
        >
          {`Fecha de Inicio: ${day}/${month}/${year}`}
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            color: "#9B9B9B",
          }}
        >
          {`Hora de Inicio: ${Hours}:${minutes}:${seconds}`}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setExpanded(false);
        }}
      >
        <Ionicons name="chevron-up" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default AgentCard;

const styles = StyleSheet.create({
  containerContracted: {
    padding: 20,
    paddingBottom: 30,
    margin: 10,
    marginHorizontal: 15,
    height: 90,
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
  containerExpanded: {
    padding: 20,
    margin: 10,
    marginHorizontal: 15,
    height: 210,
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

    flexDirection: "row",
  },
  agentCircleContracted: {
    marginTop: -20,
    backgroundColor: "#04DB00",
    height: 27,
    width: 27,
    borderRadius: 50,
  },
  agentCircleExpanded: {
    backgroundColor: "#04DB00",
    height: 27,
    width: 27,
    borderRadius: 50,
  },
});
