import React, { createContext, useContext, useState, useEffect } from "react";

const agentContext = createContext({});

export const agentProvider = ({ children }) => {
  const [agentes, setAgentes] = useState(null);

  useEffect(() => {}, []);

  return (
    <agentContext.Provider value={agentes}>{children}</agentContext.Provider>
  );
};

export default function useAgents() {
  return useContext(agentContext);
}
