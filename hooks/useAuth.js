import React, { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = async () => {
    setUser(null);
  };

  const signIn = async (user, password, ip, puerto) => {
    const URL = `http://${ip}:${puerto}/api/logon.php?usr=${user}&pwd=${password}`;

    await fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        if (json.validado == 1) {
          setUser({
            user: user,
            password: password,
            ip: ip,
            puerto: puerto,
          });
        } else {
          setUser(null);
          alert("Usuario o Contraseña incorrectos");
        }
      })
      .catch((error) => alert("IP o Puerto Incorrectos"));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      signIn,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
