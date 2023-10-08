import React, { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";
import { Button } from "@nextui-org/react";
import Perfil from "/profile.webp";
import CV from "/Cristopher_Paiz_CV.pdf";

const AboutMe = () => {
  const { theme } = useContext(contexto);
  return (
    <div className="flex flex-col">
      <div className={`h-screen -mb-16 flex flex-col m-2 sm:mx-32 ${theme === "dark" ? "claro" : "oscuro"}`}>
        <h1 className={`font-black text-5xl text-center sm:text-left sm:text-6xl sm:ml-6 `}>Sobre mí</h1>
        <div className="flex flex-col mt-6 sm:flex-row sm:w-full h-3 sm:ml-6 sm:mt-0">
          <img
            src={Perfil}
            alt="Cristopher Paiz foto"
            className="mx-auto w-52 h-52 rounded-full sm:w-64 sm:h-64 sm:mt-10 sm:rounded-none"
          />
          <h3 className={`font-bold m-10`}>
            Me llamo Cristopher Paiz y soy de Quetzaltenango, Guatemala. Soy un desarrollador junior con una
            pasión por la tecnología y el aprendizaje constante. Mi objetivo es utilizar mis habilidades
            técnicas para resolver problemas y ayudar a las personas a alcanzar sus metas.
            <br />
            Estoy siempre buscando nuevas oportunidades para aprender y crecer en mi carrera, en mi tiempo
            libre, disfruto participar en proyectos personales y colaborar en proyectos de código abierto.
            Estoy emocionado de aplicar mis habiidades y conocimientos para contribuir al éxito de una
            empresa.
          </h3>
        </div>
      </div>
      <div className="mx-auto w-9/12 -mt-[30px] sm:-mt-[210px] sm:w-96 sm:ml-[600px]">
        <Button color="warning" variant="ghost" className="w-full ">
          <a href={CV} className="fontbutton" target="_blank">
            &darr; ᠎᠎᠎᠎│ DESCARGAR CV
          </a>
        </Button>
      </div>
    </div>
  );
};
//
export default AboutMe;
