import { createContext, useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const contexto = createContext();

const ContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null); // setear el tipo de usuario activo
  const [loggedIn, setLoggedIn] = useState(false); // indicar si el usuario ha iniciado sesión
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Intenta recuperar el tema del localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  const changeTheme = (valor) => {
    if (valor === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <contexto.Provider
      value={{
        usuario,
        loggedIn,
        setLoggedIn,
        setUsuario,
        changeTheme,
        theme,
      }}
    >
      {children}
    </contexto.Provider>
  );
};

export default ContextProvider;
