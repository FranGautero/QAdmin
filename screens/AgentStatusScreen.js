import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AgentCard from "../components/AgentCard";
import { FlatList } from "react-native-gesture-handler";
import Header from "../components/Header";
import { View } from "react-native";

const AgentStatusScreen = () => {
  const [agentes, setAgentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [triggerEffect, setTriggerEffect] = useState(false);
  const [runInterval, setRunInterval] = useState(true);

  const URL = "https://aqueous-harbor-90447.herokuapp.com/subscribers/agents";

  useEffect(() => {
    if (triggerEffect) {
      setTriggerEffect(false);
    }
    const getAgents = async () => {
      await fetch(URL)
        .then((res) => res.json())
        .then((json) => {
          const reg = json.registros;
          setAgentes(reg);
          console.log("cada refresh");
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
            const reg = json.registros;
            setAgentes(reg);
            console.log("cada 30");
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
        <View></View>
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
