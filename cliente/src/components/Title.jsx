import React, { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";

const Title = () => {
  const { theme } = useContext(contexto);
  return (
    <div className="h-screen -mt-16 grid place-content-center place-items-center">
      <h1 className={`font-black text-6xl text-center sm:text-8xl ${theme === "dark" ? "claro" : "oscuro"}`}>
        &lt;Cristopher Paiz /&gt;
      </h1>
      <h2 className={`font-black text-3xl sm:text-5xl ${theme === "dark" ? "claro" : "oscuro"}`}>
        Desarrollador
      </h2>
    </div>
  );
};

export default Title;
