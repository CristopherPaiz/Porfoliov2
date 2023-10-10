import React, { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";

const Projects = () => {
  const { theme } = useContext(contexto);
  return (
    <div className="sm:mx-32 mb-32">
      <h1
        className={`text-5xl text-center mt-24 sm:text-left sm:mx-5 sm:text-65l font-black sm:mt-32 ${
          theme === "dark" ? "claro" : "oscuro"
        }`}
      >
        Proyectos
      </h1>
    </div>
  );
};

export default Projects;
