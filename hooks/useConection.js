import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

import NetInfo from "@react-native-community/netinfo";

const IpContext = createContext({});

export const IpProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [ip, setIp] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!ip) {
      // Subscribe to network state updates
      const unsubscribe = NetInfo.addEventListener((state) => {
        console.log(
          `Connection type: ${state.type}
          Is connected?: ${state.isConnected}`
        );

        // console.log(state.details);
        if (state.type == "wifi") {
          let net = state.details.ipAddress.split(".");
          console.log(net);
          if (net[0] == "192" && net[1] == "168" && net[2] == "1") {
            setIp(state.details.ipAddress);
            console.log(`IP Address: ${ip}`);
          }
        } else {
          setIp(null);
        }
      });

      return () => {
        // Unsubscribe to network state updates
        unsubscribe();
      };
    }
  }, []);

  // NetInfo.fetch().then((state) => {
  //   if (state.type == "wifi") {
  //     let net = state.details.ipAddress.split(".");
  //     console.log(net);
  //     if (net[0] == "192" && net[1] == "168" && net[2] == "2") {
  //       setIp(state.details.ipAddress);
  //       console.log(`IP Address: ${ip}`);
  //     }
  //   } else {
  //     setIp(null);
  //   }
  // });

  const memoedValue = useMemo(
    () => ({
      ip,
    }),
    [ip]
  );

  return (
    <IpContext.Provider value={memoedValue}>{children}</IpContext.Provider>
  );
};

export default function useConection() {
  return useContext(IpContext);
}
