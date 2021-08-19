import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  authenticated: false,
  login: () => {},
});

export const AuthProvider = (props) => {
  const [authState, setauthState] = useState({
    _id: "",
    email: "",
    username: "",
    role: "",
  });

  return (
    <AuthContext.Provider value={[authState, setauthState]}>
      {props.children}
    </AuthContext.Provider>
  );
};
