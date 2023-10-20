import React, { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";

const Projects = () => {
  const { theme } = useContext(contexto);
  return (
    <div className="sm:mx-32 mb-32">
      <h1
        className={`text-5xl text-center mt-24 sm:text-left sm:mx-5 sm:text-65l font-black sm:mt-24 ${
          theme === "dark" ? "claro" : "oscuro"
        }`}
      >
        Proyectos
      </h1>
      <div className="relative flex flex-row flex-wrap sm:gap-x-2 gap-y-6 mx-6 mt-6 justify-between"></div>
    </div>
  );
};

export default Projects;
