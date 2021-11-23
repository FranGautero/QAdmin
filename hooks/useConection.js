import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

import { NetworkInfo } from "react-native-network-info";

const IpContext = createContext({});

export const IpProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [ip, setIp] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    NetworkInfo.getIPV4Address().then((ipv4Address) => {
      console.log(ipv4Address);
      let net = ipv4Address.split(".");
      if (ipv4Address[2] == "1") {
        setIp(net);
      } else {
        setIp(null);
      }
      setLoadingInitial(false);
    });
  }, []);

  const memoedValue = useMemo(
    () => ({
      ip,
      loading,
      error,
    }),
    [ip, loading, error]
  );

  return (
    <IpContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </IpContext.Provider>
  );
};

export default function useConection() {
  return useContext(IpContext);
}
