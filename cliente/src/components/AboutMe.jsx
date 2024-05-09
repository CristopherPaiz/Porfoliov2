import { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";
import { Button } from "@nextui-org/react";
import Perfil from "/profile.webp";
import CV from "/Cristopher_Paiz_CV.pdf";

const AboutMe = () => {
  const { theme } = useContext(contexto);
  return (
    <div className={`flex flex-col m-2 sm:mx-32`}>
      <h1
        className={`font-black text-5xl text-center sm:text-left sm:text-6xl sm:ml-6 mb-8 sm:mb-0 ${
          theme === "dark" ? "claro" : "oscuro"
        }`}
      >
        Sobre mí
      </h1>
      <div className="flex flex-col sm:flex-row">
        <img
          src={Perfil}
          alt="Cristopher Paiz foto"
          className="mx-auto w-52 h-52 rounded-full sm:w-64 sm:h-64 sm:mt-10 sm:rounded-none sm:ml-6"
        />
        <div className="flex-col m-auto">
          <h3
            className={`font-semibold sm:font-bold text-pretty mx-10 mt-10 sm:text-left ${
              theme === "dark" ? "claro" : "oscuro"
            }`}
          >
            Soy un desarrollador con una pasión por la tecnología y el aprendizaje constante. Mi objetivo es utilizar
            mis habilidades técnicas para resolver problemas y ayudar a las personas a alcanzar sus metas.
            <br />
            <br />
            Estoy siempre buscando nuevas oportunidades para aprender y crecer en mi carrera, en mi tiempo libre,
            disfruto participar en proyectos personales y colaborar en proyectos de código abierto. Estoy emocionado de
            aplicar mis habilidades y conocimientos para contribuir al éxito de quien necesite mi apoyo.
          </h3>
          <div className="w-full text-center mt-5">
            <Button color="warning" variant="ghost" className="sm:-ml-10 sm:w-[250px]">
              <a href={CV} className="fontbutton" target="_blank" rel="noreferrer">
                &darr;&nbsp;&nbsp;|&nbsp;&nbsp;DESCARGAR CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
//
export default AboutMe;
