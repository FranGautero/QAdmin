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
  const [ip, setIp] = useState(null);

  useEffect(() => {
    if (!ip) {
      // Subscribe to network state updates
      const unsubscribe = NetInfo.addEventListener((state) => {
        // console.log(state.details);
        if (state.type == "wifi") {
          let net = state.details.ipAddress.split(".");

          if (net[0] == "192" && net[1] == "168" && net[2] == "1") {
            setIp(state.details.ipAddress);
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
