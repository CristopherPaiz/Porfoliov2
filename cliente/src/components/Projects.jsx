import { useContext } from "react";
import { Button } from "@nextui-org/react";
import { contexto } from "../context/ContextProvider.jsx";
import Pokedex from "/pokedex.webp";
import Clima from "/clima.webp";
import Comunidad from "/comunidad.webp";
import Intecap from "/intecap.webp";
import musicPlayer from "/musicPlayer.webp";
import biblian from "/biblian.webp";
import backgrounds from "/backgrounds.webp";
import paycut from "/paycut.webp";
import lz77 from "/lz77.webp";

const Projects = () => {
  const { theme } = useContext(contexto);

  const colores = {
    react: "rgba(4, 220, 252, 0.9)",
    html: "rgba(232, 83, 38, 1)",
    css: "rgba(38, 82, 232, 0.8)",
    javascript: "rgba(232, 232, 38, 1)",
    tailwind: "rgba(24, 184, 187, 1)",
    nextui: "rgba(238, 238, 238, 0.4)",
    MongoDB: "rgba(4, 236, 100, 0.8)",
    NodeJS: "rgba(129, 179, 139, 1)",
    Express: "rgba(68, 187, 132, 1)",

    PokeApi: "rgba(238, 238, 238, 0.4)",
    OpenWeatherAPI: "rgba(238, 238, 238, 0.4)",
    UnsplashAPI: "rgba(238, 238, 238, 0.4)",
  };

  const projects = [
    {
      name: "Pokédex CRP",
      tech: [
        { nombre: "React JS", color: colores.react },
        { nombre: "HTML", color: colores.html },
        { nombre: "CSS", color: colores.css },
        { nombre: "PokeAPI", color: colores.PokeApi },
      ],
      img: Pokedex,
      link: "https://pokedex-crp.netlify.app/",
      git: "https://github.com/ProphetFlark/pokedex",
      showrepo: true,
    },
    {
      name: "Music Player",
      tech: [
        { nombre: "React JS", color: colores.react },
        { nombre: "HTML", color: colores.html },
        { nombre: "CSS", color: colores.css },
        { nombre: "Tailwind CSS", color: colores.tailwind },
      ],
      img: musicPlayer,
      link: "https://music-crp.netlify.app/",
      git: "https://github.com/CristopherPaiz/musicPlayer",
      showrepo: true,
    },
    {
      name: "Biblian - Comparador de versículos",
      tech: [
        { nombre: "React JS", color: colores.react },
        { nombre: "HTML", color: colores.html },
        { nombre: "CSS", color: colores.css },
        { nombre: "Tailwind CSS", color: colores.tailwind },
      ],
      img: biblian,
      link: "https://biblian.netlify.app/",
      git: "https://github.com/CristopherPaiz/multi-bible-compare",
      showrepo: true,
    },
    {
      name: "Sistema de control - Comunidad San Francisco de Asís",
      tech: [
        { nombre: "React JS", color: colores.react },
        { nombre: "HTML", color: colores.html },
        { nombre: "CSS", color: colores.css },
        { nombre: "Tailwind CSS", color: colores.tailwind },
        { nombre: "NextUI", color: colores.nextui },
        { nombre: "MongoDB", color: colores.MongoDB },
        { nombre: "Express", color: colores.Express },
      ],
      img: Comunidad,
      link: "https://csfa.es",
      git: "#",
      showrepo: false,
    },
    {
      name: "Paycut - Credit Card Pay & Cut Calendar",
      tech: [
        { nombre: "HTML", color: colores.html },
        { nombre: "CSS", color: colores.css },
        { nombre: "Javascript", color: colores.javascript },
      ],
      img: paycut,
      link: "https://paycut.netlify.app/",
      git: "https://github.com/CristopherPaiz/pago-corte-tarjetas",
      showrepo: true,
    },
    {
      name: "Scheduler App",
      tech: [
        { nombre: "React JS", color: colores.react },
        { nombre: "HTML", color: colores.html },
        { nombre: "CSS", color: colores.css },
        { nombre: "Tailwind CSS", color: colores.tailwind },
        { nombre: "NextUI", color: colores.nextui },
        { nombre: "MongoDB", color: colores.MongoDB },
        { nombre: "Express", color: colores.Express },
      ],
      img: Intecap,
      link: "https://intecapscheduler.netlify.app/",
      git: "#",
      showrepo: false,
    },
    {
      name: "Background HTML & React",
      tech: [
        { nombre: "React", color: colores.react },
        { nombre: "HTML", color: colores.html },
        { nombre: "CSS", color: colores.css },
        { nombre: "Tailwind", color: colores.tailwind },
      ],
      img: backgrounds,
      link: "https://html-backgrounds.netlify.app/",
      git: "https://github.com/CristopherPaiz/backgrounds_HTML_REACT",
      showrepo: true,
    },
    {
      name: "LZ77 - Text Compression",
      tech: [
        { nombre: "HTML", color: colores.html },
        { nombre: "CSS", color: colores.css },
        { nombre: "Javascript", color: colores.javascript },
      ],
      img: lz77,
      link: "https://lz77.netlify.app/",
      git: "https://github.com/CristopherPaiz/LZ77-Texto",
      showrepo: true,
    },
    {
      name: "Weather App",
      tech: [
        { nombre: "React JS", color: colores.react },
        { nombre: "HTML", color: colores.html },
        { nombre: "CSS", color: colores.css },
        { nombre: "OpenWeatherAPI", color: colores.OpenWeatherAPI },
      ],
      img: Clima,
      link: "https://clima-crp.netlify.app/",
      git: "https://github.com/ProphetFlark/app-clima-reactJS",
      showrepo: true,
    },
  ];

  return (
    <div className="sm:mx-32 mb-32">
      <h1
        className={`text-5xl text-center mt-24 sm:text-left sm:mx-5 font-black sm:mt-24 ${
          theme === "dark" ? "claro" : "oscuro"
        }`}
      >
        Proyectos
      </h1>
      <div className="relative flex flex-row flex-wrap sm:gap-x-2 gap-y-6 mx-6 mt-6 justify-evenly">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative sm:w-5/12 rounded-2xl sm:rounded-3xl ${
              theme === "dark" ? "divoscuroBorder" : "divclaroBorder"
            } dark:bg-opacity-50 px-5 pt-7 pb-5 w-11/12 drop-shadow-lg border-[1px] border-black/10 dark:border-white/30`}
          >
            <img src={project.img} className="object-cover rounded-lg sm:rounded-lg drop-shadow-lg border-[1px]" />
            <div className="flex flex-col gap-2 sm:mb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-center my-3 text-black dark:text-white">
                {project.name}
              </h2>
              <div className="text-center sm:text-lg flex flex-wrap flex-row w-full gap-y-2 gap-x-1 justify-center">
                {project.tech.map((techs, index) => (
                  <div
                    key={index}
                    className={"px-3 py-1  text-[12px] sm:text-[14px] rounded-full"}
                    style={{ backgroundColor: techs.color }}
                  >
                    {techs.nombre}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row w-full flex-nowrap justify-center my-5 gap-2 sm:hidden">
              <Button
                Button
                className="border-[1px] border-black/40 dark:border-white/40"
                variant="shadow"
                as={"a"}
                href={project.link}
                target="_blank"
              >
                <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                  <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
                </svg>
                Demo proyecto
              </Button>
              {project.showrepo ? (
                <Button
                  className="border-[1px] border-black/40 dark:border-white/40"
                  variant="shadow"
                  as={"a"}
                  href={project.git}
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
                >
                  <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                  </svg>
                  Privado
                </Button>
              )}
            </div>
            <>
              <div className="absolute inset-0 justify-center items-center rounded-3xl bg-black hover:bg-opacity-60 opacity-0 hover:opacity-100 transition hidden lg:flex">
                <div className="flex flex-col w-full flex-nowrap justify-evenly mx-2 my-5 gap-4">
                  <Button variant="shadow" className="w-7/12 mx-auto" as={"a"} href={project.link} target="_blank">
                    <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                      <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
                    </svg>
                    Demo proyecto
                  </Button>
                  {project.showrepo ? (
                    <Button variant="shadow" className="w-7/12 mx-auto" as={"a"} href={project.git} target="_blank">
                      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                      </svg>
                      Repositorio
                    </Button>
                  ) : (
                    <Button
                      variant="shadow"
                      className="w-7/12 mx-auto"
                      as={"a"}
                      href={project.git}
                      target="_blank"
                      isDisabled
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
      </div>
    </div>
  );
};

export default Projects;
