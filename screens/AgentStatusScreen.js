import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AgentCard from "../components/AgentCard";
import { FlatList } from "react-native-gesture-handler";
import Header from "../components/Header";
import { View } from "react-native";
import useAuth from "../hooks/useAuth";

const AgentStatusScreen = () => {
  const [agentes, setAgentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [triggerEffect, setTriggerEffect] = useState(false);
  const [runInterval, setRunInterval] = useState(true);

  const { user } = useAuth();

  const URL = `http://${user.ip}:${user.puerto}/api/agents.php?usr=${user.user}&pwd=${user.password}`;

  useEffect(() => {
    const loggedAgents = (agentsList) => {
      return Object.values(
        agentsList.reduce((acc, curr) => {
          const { agente_nro, timestamp_login } = curr;
          const value =
            !acc[agente_nro] ||
            acc[agente_nro].timestamp_login < timestamp_login
              ? curr
              : acc[agente_nro];
          return { ...acc, [agente_nro]: value };
        }, {})
      ).filter((log) => log.evento === "LOGIN");
    };

    if (triggerEffect) {
      setTriggerEffect(false);
    }
    const getAgents = async () => {
      await fetch(URL)
        .then((res) => res.json())
        .then((json) => {
          const reg = loggedAgents(json.registros);
          setAgentes(reg);
        })
        .catch((error) => alert(error))
        .finally(() => setLoading(false));
    };

    getAgents();

    if (runInterval) {
      setInterval(async () => {
        await fetch(URL)
          .then((res) => res.json())
          .then((json) => {
            const reg = loggedAgents(json.registros);
            setAgentes(reg);
          })
          .catch((error) => alert(error))
          .finally(() => setLoading(false));
      }, 30000);
    }
  }, [triggerEffect, runInterval]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
      }}
    >
      <Header
        screenName={"Agentes Online"}
        refreshFunction={setTriggerEffect}
        runInterval={setRunInterval}
      ></Header>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#3399FF"
          style={{ transform: [{ scale: 1.5 }], marginTop: 125 }}
        />
      ) : (
        <FlatList
          data={agentes}
          renderItem={({ item }) => <AgentCard agent={item} />}
          keyExtractor={(item) => item.agente_nro}
        ></FlatList>
      )}
    </SafeAreaView>
  );
};

export default AgentStatusScreen;
