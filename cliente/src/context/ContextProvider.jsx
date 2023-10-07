import React, { createContext, useState } from "react";

export const contexto = createContext();

const ContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null); // setear el tipo de usuario activo
  const [loggedIn, setLoggedIn] = useState(false); // indicar si el usuario ha iniciado sesión

  return (
    <contexto.Provider
      value={{
        usuario,
        loggedIn,
        setLoggedIn,
        setUsuario,
      }}
    >
      {children}
    </contexto.Provider>
  );
};

export default ContextProvider;
