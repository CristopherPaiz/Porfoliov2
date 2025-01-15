import { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";
import Perfil from "/profile.webp";
import CV from "/Cristopher_Paiz_CV.pdf";

const AboutMe = () => {
  const { theme } = useContext(contexto);
  return (
    <div className="p-5">
      <div className="flex w-full m-auto justify-center ">
        <div className={`flex flex-col m-2 sm:mx-32 max-w-[1200px] `}>
          <h1 className={`font-black text-5xl text-center sm:text-left sm:text-6xl sm:ml-6 mb-8 sm:mb-0 ${theme === "dark" ? "claro" : "oscuro"}`}>
            Sobre mí
          </h1>
          <div className="flex flex-col sm:flex-row">
            <img
              src={Perfil}
              alt="Cristopher Paiz foto"
              className="mx-auto w-52 h-52 rounded-full sm:w-64 sm:h-64 sm:mt-10 sm:rounded-none sm:ml-6"
            />
            <div className="flex-col m-auto">
              <h3 className={`font-semibold sm:font-bold text-pretty mx-10 mt-10 sm:text-left ${theme === "dark" ? "claro" : "oscuro"}`}>
                Me llamo Cristopher paiz, soy un desarrollador con una pasión por la tecnología y el aprendizaje constante. Mi objetivo es utilizar
                mis habilidades técnicas para resolver problemas y ayudar a las personas a alcanzar sus metas.
                <br />
                <br />
                Estoy siempre buscando nuevas oportunidades para aprender y crecer en mi carrera, en mi tiempo libre, disfruto participar en proyectos
                personales y colaborar en proyectos de código abierto.
              </h3>
              <div className="mt-6 flex justify-center sm:justify-start">
                <a
                  href={CV}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-full
                  transition-all duration-300 ease-in-out
                  ${theme === "dark" ? "bg-yellow-400 text-black hover:bg-yellow-200" : "bg-black text-white hover:bg-gray-800"}
                  font-medium shadow-md
                  active:scale-95
                  hover:gap-4
                `}
                >
                  <span>Descargar CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//
export default AboutMe;
