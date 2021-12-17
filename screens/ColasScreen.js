import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EfficiencyCard from "../components/EfficiencyCard";
import { FlatList } from "react-native-gesture-handler";

import Header from "../components/Header";

const ColasScreen = () => {
  const [colas, setColas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [triggerEffect, setTriggerEffect] = useState(false);
  const [runInterval, setRunInterval] = useState(true);

  const URL = "https://aqueous-harbor-90447.herokuapp.com/subscribers/colas";

  useEffect(() => {
    if (triggerEffect) {
      setTriggerEffect(false);
    }
    const getColas = async () => {
      await fetch(URL)
        .then((res) => res.json())
        .then((json) => {
          const reg = json.registros;
          setColas(reg);
        })
        .catch((error) => alert(error))
        .finally(() => setLoading(false));
    };
    getColas();
    if (runInterval) {
      setInterval(async () => {
        await fetch(URL)
          .then((res) => res.json())
          .then((json) => {
            const reg = json.registros;
            setColas(reg);
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
        screenName={"Estadísticas de Colas"}
        refreshFunction={setTriggerEffect}
        runInterval={setRunInterval}
      ></Header>
      <FlatList
        data={colas}
        renderItem={({ item }) => <EfficiencyCard cola={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

export default ColasScreen;
