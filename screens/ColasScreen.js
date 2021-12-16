import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EfficiencyCard from "../components/EfficiencyCard";
import { FlatList } from "react-native-gesture-handler";

import Header from "../components/Header";

const ColasScreen = () => {
  const [colas, setColas] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://aqueous-harbor-90447.herokuapp.com/subscribers/colas";

  useEffect(() => {
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
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
      }}
    >
      <Header screenName={"Estadísticas de Colas"}></Header>
      <FlatList
        data={colas}
        renderItem={({ item }) => <EfficiencyCard cola={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

export default ColasScreen;
