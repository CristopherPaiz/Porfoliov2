import React, { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";

const Homepage = () => {
  const { theme } = useContext(contexto);
  return (
    <div>
      <h1 className={`font-black text-4xl ${theme === "dark" ? "claro" : "oscuro"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti consequatur eos distinctio sunt
        inventore dolorem perferendis exercitationem, reprehenderit quaerat quae quibusdam? Quisquam id ipsum
        harum non excepturi sapiente illum?
      </h1>
    </div>
  );
};

export default Homepage;
