import React, { createContext, useContext, useState, useEffect } from "react";

const colasContext = createContext({});

export const colasProvider = ({ children }) => {
  const [colas, setColas] = useState(null);

  useEffect(() => {}, []);

  return (
    <colasContext.Provider value={agentes}>{children}</colasContext.Provider>
  );
};

export default function useColas() {
  return useContext(colasContext);
}
