import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //     setLoadingInitial(false);
  //   });
  // }, []);

  const logout = async () => {
    setUser(null);
  };

  const signIn = async (email, password, ip) => {
    setUser({
      email: email,
      password: password,
      ip: ip,
    });
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
