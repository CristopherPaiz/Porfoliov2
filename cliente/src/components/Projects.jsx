import { Button } from "@nextui-org/react";
import { useContext, useState } from "react";
import { contexto } from "../context/ContextProvider.jsx";
import TencnologiesMini from "./TencnologiesMini.jsx";
import BACKGROUNDNEW from "/new/BACKGROUNDS.webp";
import BIBLIANNEW from "/new/BIBLIAN.webp";
import CSFANEW from "/new/CSFA.webp";
import INTECAPNEW from "/new/INTECAP.webp";
import LZ77NEW from "/new/LZ77.webp";
import MUSICPLAYERNEW from "/new/MUSICPLAYER.webp";
import PAYCUTNEW from "/new/PAYCUT.webp";
import POKEDEXNEW from "/new/POKEDEX.webp";
import WEATHERNEW from "/new/WEATHER.webp";
import ASISTENCIANEW from "/new/ASISTENCIA.webp";
import LOTERIANEW from "/new/LOTERIA.webp";

// Constante para número de elementos a mostrar inicialmente
const ELEMENTS_TO_SHOW = 4;

const Projects = () => {
  const { theme } = useContext(contexto);
  const [showAll, setShowAll] = useState(false);

  const colores = {
    react: "rgba(88, 231, 253, 0.9)",
    html: "rgb(255, 99, 51)",
    css: "rgba(88, 141, 249, 0.8)",
    javascript: "rgb(255, 255, 0)",
    tailwind: "rgb(68, 245, 248)",
    nextui: "rgba(238, 238, 238, 1)",
    MongoDB: "rgba(4, 236, 100, 0.8)",
    NodeJS: "rgba(129, 179, 139, 1)",
    Express: "rgba(68, 187, 132, 1)",

    PokeApi: "rgba(238, 238, 238, 1)",
    OpenWeatherAPI: "rgba(238, 238, 238, 1)",
    UnsplashAPI: "rgba(238, 238, 238, 1)",
  };

  const coloresText = {
    react: "rgba(0,0,0,1)",
    html: "rgba(255,255,255,1)",
    css: "rgba(255,255,255,1)",
    javascript: "rgba(0,0,0,1)",
    tailwind: "rgba(0,0,0,1)",
    nextui: "rgba(0,0,0,1)",
    MongoDB: "rgba(0,0,0,1)",
    NodeJS: "rgba(255,255,255,1)",
    Express: "rgba(255,255,255,1)",

    PokeApi: "rgba(0,0,0,1)",
    OpenWeatherAPI: "rgba(0,0,0,1)",
    UnsplashAPI: "rgba(0,0,0,1)",
  };

  const projects = [
    {
      name: "Pokédex CRP",
      description: "Pokédex con todos los pokémones, con la posibilidad de buscar por nombre o número y ver sus detalles específicos.",
      tech: [
        { nombre: "React JS", color: colores.react, textColor: coloresText.react },
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
        { nombre: "API", color: colores.PokeApi, textColor: coloresText.PokeApi },
      ],
      img: POKEDEXNEW,
      link: "https://pokedex-crp.netlify.app/",
      git: "https://github.com/ProphetFlark/pokedex",
      showrepo: true,
      color: "#000000",
      shadow: "#ff8800",
      background: "#ff8800",
      secondary: "white",
    },
    {
      name: "Reproductor de música",
      description:
        "Un reproductor de música que permite reproducir canciones de forma muy rápida gracias a algoritmos de segmentación, funcionando en conexiones de red lentas.",
      tech: [
        { nombre: "React JS", color: colores.react, textColor: coloresText.react },
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
        { nombre: "Tailwind CSS", color: colores.tailwind, textColor: coloresText.tailwind },
      ],
      img: MUSICPLAYERNEW,
      link: "https://music-crp.netlify.app/",
      git: "https://github.com/CristopherPaiz/musicPlayer",
      showrepo: true,
      color: "white",
      shadow: "#01b2d1a6",
      background: "#79e9ff",
      secondary: "black",
    },
    {
      name: "Biblian - Comparador de versículos",
      description: "Una aplicación donde se muestran más de 100 versiones de biblias, con la posibilidad de comparar versículos entre ellas.",
      tech: [
        { nombre: "React JS", color: colores.react, textColor: coloresText.react },
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
        { nombre: "Tailwind CSS", color: colores.tailwind, textColor: coloresText.tailwind },
      ],
      img: BIBLIANNEW,
      link: "https://biblian.netlify.app/",
      git: "https://github.com/CristopherPaiz/multi-bible-compare",
      showrepo: true,
      color: "black",
      shadow: "#fcb83b",
      background: "#fcb83b",
      secondary: "black",
    },
    {
      name: "Asistencia Ebenezer",
      description:
        "Aplicación que permite el registro de asistencias, así como el manejo de usuarios, roles y permisos, para la iglesia Ebenezer de Guatemala.",
      tech: [
        { nombre: "React JS", color: colores.react, textColor: coloresText.react },
        { nombre: "Tailwind CSS", color: colores.tailwind, textColor: coloresText.tailwind },
        { nombre: "NextUI", color: colores.nextui, textColor: coloresText.nextui },
        { nombre: "Node JS", color: colores.Express, textColor: coloresText.Express },
      ],
      img: ASISTENCIANEW,
      link: "https://asistenciaebenezergt.vercel.app/",
      git: "#",
      showrepo: false,
      color: "#000000",
      shadow: "#2200ff80",
      background: "#1d8aff",
      secondary: "white",
    },
    {
      name: "Loteria Mexicana",
      description: "Aplicacion de loteria mexicana, con la posibilidad de cambiar las voces, el tipo de imagen, el tiempo y poder cantar las cartas.",
      tech: [
        { nombre: "JavaScript", color: colores.javascript, textColor: coloresText.javascript },
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
      ],
      img: LOTERIANEW,
      link: "https://loteria-mexicana-ivory.vercel.app",
      git: "https://github.com/CristopherPaiz/loteriaMexicana",
      showrepo: true,
      color: "#ffffff",
      shadow: "#09ff0080",
      background: "#ff1d1d",
      secondary: "white",
    },
    {
      name: "Comunidad San Francisco de Asís",
      description:
        "Aplicación completa para la gestión de una comunidad religiosa, con control de usuarios, roles y permisos, como parte de proyecto de graduación de la Universidad Mariano Gálvez de Guatemala.",
      tech: [
        { nombre: "React JS", color: colores.react, textColor: coloresText.react },
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
        { nombre: "Tailwind CSS", color: colores.tailwind, textColor: coloresText.tailwind },
        { nombre: "NextUI", color: colores.nextui, textColor: coloresText.nextui },
        { nombre: "MongoDB", color: colores.MongoDB, textColor: coloresText.MongoDB },
        { nombre: "Node JS", color: colores.Express, textColor: coloresText.Express },
      ],
      img: CSFANEW,
      link: "https://csfa.es",
      git: "#",
      showrepo: false,
      color: "#000000",
      shadow: "#ff000063",
      background: "#c70000",
      secondary: "white",
    },
    {
      name: "Paycut - Credit Card Calendar",
      description: "Aplicación que te permite ver visualmente los rangos de pago y corte de tus tarjetas de crédito.",
      tech: [
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
        { nombre: "JavaScript", color: colores.javascript, textColor: coloresText.javascript },
      ],
      img: PAYCUTNEW,
      link: "https://paycut.netlify.app/",
      git: "https://github.com/CristopherPaiz/pago-corte-tarjetas",
      showrepo: true,
      color: "#000000",
      shadow: "#00ff2a80",
      background: "#37d581",
      secondary: "white",
    },
    {
      name: "Scheduler App (Para Intecap)",
      description:
        "Aplicación que te permite asignar horarios a los docentes de INTECAP para sus clases y actividades, evitando colisiones entre horarios, fechas, docentes y aulas.",
      tech: [
        { nombre: "React JS", color: colores.react, textColor: coloresText.react },
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
        { nombre: "Tailwind CSS", color: colores.tailwind, textColor: coloresText.tailwind },
        { nombre: "NextUI", color: colores.nextui, textColor: coloresText.nextui },
        { nombre: "MongoDB", color: colores.MongoDB, textColor: coloresText.MongoDB },
        { nombre: "Node JS", color: colores.Express, textColor: coloresText.Express },
      ],
      img: INTECAPNEW,
      link: "https://intecapscheduler.netlify.app/",
      git: "#",
      showrepo: false,
      color: "#000000",
      shadow: "#2200ff80",
      background: "#1d8aff",
      secondary: "white",
    },
    {
      name: "Backgrounds HTML & React",
      description: "Simple aplicación que te permite copiar y pegar fondos personalizados para tu proyecto web.",
      tech: [
        { nombre: "React JS", color: colores.react, textColor: coloresText.react },
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
        { nombre: "Tailwind CSS", color: colores.tailwind, textColor: coloresText.tailwind },
      ],
      img: BACKGROUNDNEW,
      link: "https://html-backgrounds.netlify.app/",
      git: "https://github.com/CristopherPaiz/backgrounds_HTML_REACT",
      showrepo: true,
      color: "#af04af",
      shadow: "#af04af80",
      background: "#af04af",
      secondary: "white",
    },
    {
      name: "LZ77 - Text Compression",
      description:
        "Algoritmo de compresión de texto LZ77, que permite comprimir y descomprimir texto de forma eficiente, sin pérdida de información.",
      tech: [
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
        { nombre: "JavaScript", color: colores.javascript, textColor: coloresText.javascript },
      ],
      img: LZ77NEW,
      link: "https://lz77.netlify.app/",
      git: "https://github.com/CristopherPaiz/LZ77-Texto",
      showrepo: true,
      color: "#000000",
      shadow: "#ff9500",
      background: "#ff7700",
      secondary: "black",
    },
    {
      name: "Weather App",
      description: "Aplicación que te permite ver el clima de cualquier ciudad del mundo, utilizando la API de OpenWeather.",
      tech: [
        { nombre: "React JS", color: colores.react, textColor: coloresText.react },
        { nombre: "HTML5", color: colores.html, textColor: coloresText.html },
        { nombre: "CSS3", color: colores.css, textColor: coloresText.css },
        { nombre: "API", color: colores.OpenWeatherAPI, textColor: coloresText.OpenWeatherAPI },
      ],
      img: WEATHERNEW,
      link: "https://clima-crp.netlify.app/",
      git: "https://github.com/ProphetFlark/app-clima-reactJS",
      showrepo: true,
      color: "white",
      shadow: "#ffffff80",
      background: "#ffffff",
      secondary: "black",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, ELEMENTS_TO_SHOW);

  return (
    <>
      <style>{`
      .fade-container {
        position: relative;
      }

      .fade-overlay {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 400px;
        background: linear-gradient(transparent, var(--color-fondo, #000000));
        pointer-events: none;
      }
      /* Efecto de palpitación en el botón */
      .pulse-button {
        animation: pulsate 1.5s ease-in-out infinite;
      }
      @keyframes pulsate {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.07);
        }
      }
    `}</style>

      <div className="flex justify-center">
        <div className="sm:mx-32 mb-32 max-w-[1200px] w-full">
          <h1 className={`font-black text-5xl text-center sm:text-left sm:text-6xl sm:ml-6 mb-8 sm:mb-0 ${theme === "dark" ? "claro" : "oscuro"}`}>
            Proyectos
          </h1>
          <div
            className={`relative flex flex-row flex-wrap sm:gap-x-2 gap-y-10 mx-6 mt-6 justify-evenly ${
              !showAll && projects.length > ELEMENTS_TO_SHOW ? "fade-container" : ""
            }`}
          >
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className={`relative sm:w-[45%] lg:w-[30%] rounded-lg overflow-hidden border-2 border-black/30 dark:border-2 dark:border-white/10 ${
                  index >= ELEMENTS_TO_SHOW && !showAll ? "opacity-50" : ""
                }`}
              >
                <img src={project.img} className="object-cover rounded-t-lg min-w-full z-10" />
                <img
                  src={project.img}
                  className="absolute object-cover rounded-t-lg min-w-full min-h-full -z-10 filter blur-2xl brightness-110 dark:brightness-120"
                  style={{ zIndex: -10, width: "100%", height: "100%", top: 0, left: 0 }}
                />
                <div className="flex flex-col gap-2 sm:mb-3 pt-3 px-10" style={{ color: project.color, textShadow: `2px 2px 8px ${project.shadow}` }}>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-center mt-1 mb-3">{project.name}</h2>
                  <div className="flex flex-col -mt-5 justify-center items-center" style={{ height: "65px" }}>
                    <h3 className="text-[12px] sm:text-[14px] text-center overflow-hidden line-clamp-3">{project?.description}</h3>
                  </div>
                </div>
                {/* TECNOLOGIAS */}
                <div className="flex flex-wrap flex-row w-full gap-2 justify-center mb-4">
                  {project.tech.map((techs, index) => (
                    <TencnologiesMini key={index} nombre={techs.nombre} />
                  ))}
                </div>
                <div className="flex flex-row w-full flex-nowrap justify-center my-5 gap-2 sm:hidden">
                  <Button
                    variant="shadow"
                    as={"a"}
                    href={project.link}
                    target="_blank"
                    style={{ backgroundColor: project.background, color: project.secondary }}
                  >
                    <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                      <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
                    </svg>
                    Demo proyecto
                  </Button>
                  {project.showrepo ? (
                    <Button
                      variant="shadow"
                      as={"a"}
                      href={project.git}
                      style={{
                        backgroundColor: project.background + 40,
                        color: project.secondary,
                      }}
                      target="_blank"
                    >
                      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                      </svg>
                      Repositorio
                    </Button>
                  ) : (
                    <Button
                      className="border-[1px]"
                      variant="shadow"
                      as={"a"}
                      href={project.git}
                      target="_blank"
                      isDisabled
                      style={{
                        backgroundColor: project.background + 10,
                        color: project.secondary,
                      }}
                    >
                      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                      </svg>
                      Privado
                    </Button>
                  )}
                </div>
                {/* HOVER SHADOW */}
                <>
                  <div className="absolute inset-0 justify-center items-center rounded-md bg-black hover:bg-opacity-80 opacity-0 hover:opacity-100 transition hidden lg:flex">
                    <div className="flex flex-col w-full flex-nowrap justify-evenly mx-2 my-5 gap-4">
                      <Button
                        variant="shadow"
                        className="w-7/12 mx-auto"
                        as={"a"}
                        href={project.link}
                        target="_blank"
                        style={{
                          backgroundColor: project.background,
                          color: project.secondary,
                        }}
                      >
                        <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                          <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
                        </svg>
                        Demo proyecto
                      </Button>
                      {project.showrepo ? (
                        <Button
                          variant="shadow"
                          className="w-7/12 mx-auto"
                          as={"a"}
                          href={project.git}
                          target="_blank"
                          style={{
                            backgroundColor: project.background,
                            color: project.secondary,
                          }}
                        >
                          <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                          </svg>
                          Ver repositorio
                        </Button>
                      ) : (
                        <Button
                          variant="shadow"
                          className="w-7/12 mx-auto"
                          as={"a"}
                          href={project.git}
                          target="_blank"
                          isDisabled
                          style={{
                            backgroundColor: project.background,
                            color: project.secondary,
                          }}
                        >
                          <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                          </svg>
                          Repositorio Privado
                        </Button>
                      )}
                    </div>
                  </div>
                </>
              </div>
            ))}

            {!showAll && projects.length > displayedProjects.length && <div className="fade-overlay" />}
          </div>

          {projects.length > ELEMENTS_TO_SHOW && (
            <div className={`flex justify-center ${!showAll ? "-mt-6" : "mt-4"}`}>
              <Button
                variant="shadow"
                onClick={() => setShowAll(!showAll)}
                className={`bg-yellow-600 text-xl py-2 px-6 dark:bg-yellow-700 text-white ${!showAll ? "pulse-button" : ""}`}
              >
                {showAll ? "Ver menos proyectos" : "Mostrar más proyectos"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
