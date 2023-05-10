import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EfficiencyCard from "../components/EfficiencyCard";
import { FlatList } from "react-native-gesture-handler";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";

const ColasScreen = () => {
  const [colas, setColas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [triggerEffect, setTriggerEffect] = useState(false);
  const [runInterval, setRunInterval] = useState(true);

  const { user } = useAuth();

  const URL = `http://${user.ip}:${user.puerto}/api/colas.php?usr=${user.user}&pwd=${user.password}`;

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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#3399FF"
            style={{ transform: [{ scale: 1.5 }] }}
          />
        ) : (
          <FlatList
            data={colas}
            renderItem={({ item }) => <EfficiencyCard cola={item} />}
            keyExtractor={(item) => item.nombre_cola}
          ></FlatList>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ColasScreen;
