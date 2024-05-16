import { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";
import Perfil from "/profile.webp";
import CV from "/Cristopher_Paiz_CV.pdf";

const AboutMe = () => {
  const { theme } = useContext(contexto);
  return (
    <div className="flex w-full m-auto justify-center">
      <div className={`flex flex-col m-2 sm:mx-32 max-w-[1200px] `}>
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
              Me llamo Cristopher paiz, soy un desarrollador con una pasión por la tecnología y el aprendizaje
              constante. Mi objetivo es utilizar mis habilidades técnicas para resolver problemas y ayudar a las
              personas a alcanzar sus metas.
              <br />
              <br />
              Estoy siempre buscando nuevas oportunidades para aprender y crecer en mi carrera, en mi tiempo libre,
              disfruto participar en proyectos personales y colaborar en proyectos de código abierto.
            </h3>
            <div className="w-full text-center flex justify-center mt-6">
              <button className="animated-button">
                <a href={CV} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="circle"></span>
                  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">&nbsp;&nbsp;&nbsp;Descargar CV &nbsp;</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//
export default AboutMe;
