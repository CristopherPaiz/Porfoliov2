import { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";
import Intecap from "/Diploma_INTECAP_Cristopher_Paiz.pdf";
import Microcontroladores from "/Diploma_Microcontroladores_Cristopher_Paiz.pdf";

const estudios = [
  {
    titulo: "Ingeniería en Sistemas y Ciencias de la Computación 10mo. semestre",
    lugar: "Universidad Mariano Gálvez de Guatemala",
    inicio: new Date("2019-02-01"),
    fin: new Date("2023-11-01"),
    ubicacion: "Guatemala, Quetzaltenango, Quetzaltenango",
    estado: false,
  },
  {
    titulo: "Bachillerato en Computación Con Orientación Comercial",
    lugar: "Colegio Cristiano Mixto Pre-Universitario 'Pestalozzi'",
    inicio: new Date("2017-02-01"),
    fin: new Date("2018-11-01"),
    ubicacion: "Guatemala, Quetzaltenango, Quetzaltenango",
    estado: false,
  },
];

const cursos = [
  {
    titulo: "Programador de microcontroladores",
    lugar: "Fundación Carlos Slim",
    inicio: new Date("2022-03-01"),
    fin: new Date("2022-03-24"),
    ubicacion: "México, Ciudad de México (Virtual)",
    url: Microcontroladores,
    estado: false,
  },
  {
    titulo: "Programación en java con conexión a base de datos",
    lugar: "Instituto Técnico de Capacitación y Productividad (INTECAP)",
    inicio: new Date("2020-11-24"),
    fin: new Date("2020-12-09"),
    ubicacion: "Guatemala, Totonicapán",
    url: Intecap,
    estado: false,
  },
];

const Timeline = () => {
  const { theme } = useContext(contexto);

  const formatearFecha = (fecha) => {
    const mes = fecha.toLocaleString("default", { month: "long", timeZone: "UTC" });
    const año = fecha.getUTCFullYear();

    return `${mes} ${año}`;
  };

  const calcularDiferenciaFechas = (fecha) => {
    const fechaActual = new Date();
    const diferenciaEnMilisegundos = fechaActual - fecha;

    const milisegundosPorDia = 24 * 60 * 60 * 1000;
    const milisegundosPorMes = milisegundosPorDia * 30.44; // Asumiendo un mes de 30.44 días en promedio
    const milisegundosPorAño = milisegundosPorDia * 365.25; // Asumiendo un año de 365.25 días en promedio

    const años = Math.floor(diferenciaEnMilisegundos / milisegundosPorAño);
    const meses = Math.floor((diferenciaEnMilisegundos % milisegundosPorAño) / milisegundosPorMes);
    const dias = Math.floor((diferenciaEnMilisegundos % milisegundosPorMes) / milisegundosPorDia);

    return `Antigüedad: ${años} años, ${meses} meses, ${dias} días.`;
  };

  const calcularDiferenciaFechaspequenio = (fecha) => {
    const fechaActual = new Date();
    const diferenciaEnMilisegundos = fechaActual - fecha;

    const milisegundosPorDia = 24 * 60 * 60 * 1000;
    const milisegundosPorMes = milisegundosPorDia * 30.44; // Asumiendo un mes de 30.44 días en promedio
    const milisegundosPorAño = milisegundosPorDia * 365.25; // Asumiendo un año de 365.25 días en promedio

    const años = Math.floor(diferenciaEnMilisegundos / milisegundosPorAño);
    const meses = Math.floor((diferenciaEnMilisegundos % milisegundosPorAño) / milisegundosPorMes);
    const dias = Math.floor((diferenciaEnMilisegundos % milisegundosPorMes) / milisegundosPorDia);

    if (años > 0) {
      return `Antigüedad: ${años} años, ${meses} meses, ${dias} días.`;
    }
    if (meses > 0) {
      return `Antigüedad: ${meses} meses, ${dias} días.`;
    }
    if (dias > 0) {
      return `Antigüedad: ${dias} días.`;
    }
  };

  return (
    <div className="sm:mx-32 mb-12 shadow-lg dark:shadow-2xl px-4 py-0 rounded-3xl">
      <h1
        className={`pt-24 text-5xl text-center mt-24 mb-10 sm:text-left sm:mx-5 sm:text-65l font-black sm:mt-32 ${
          theme === "dark" ? "claro" : "oscuro"
        }`}
      >
        Educación
      </h1>
      <div className="my-6 mx-10">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {estudios.map((estudio, index) => (
            <li key={index} className="mb-16 ml-7 sm:ml-10">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-neutral-100 dark:ring-gray-600 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center sm:text-lg font-black">
                <span className={`${theme === "dark" ? "claro" : "oscuro"}  -mt-3 ml-2 sm:-mt-1`}>
                  {estudio?.titulo ?? "Título no disponible actualmente"}
                </span>
                {estudio?.estado && (
                  <span className="bg-blue-100 text-center sm:flex hidden text-blue-800 text-tiny font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    Activo actualmente
                  </span>
                )}
              </h3>
              {estudio?.estado && (
                <span className="bg-blue-100 text-center sm:hidden text-blue-800 text-tiny font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Activo actualmente
                </span>
              )}
              {estudio?.estado === false && (
                <>
                  <span className="bg-blue-100 text-center sm:hidden text-blue-800 text-tiny font-medium px-3 rounded py-1 dark:bg-yellow-200 dark:text-black">
                    {calcularDiferenciaFechaspequenio(estudio?.fin ?? new Date())}
                  </span>
                  <div className="mb-3"></div>
                </>
              )}

              <time
                className={`flex flex-row gap-x-2 mt-6 items-center mb-1 text-lg font-normal leading-snug capitalize text-gray-400 dark:text-gray-500 ${
                  theme === "dark" ? "claro" : "oscuro"
                }`}
              >
                <svg viewBox="0 0 512 512" fill="currentColor" height="1.2em" width="1.2em" className="min-w-[1.2em]">
                  <path d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z" />
                  <path d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z" />
                </svg>
                {estudio?.lugar ?? "Lugar no disponible actualmente"}
              </time>
              <time className="flex-col">
                <div
                  className={`flex flex-row gap-x-2 mb-1 text-lg font-normal leading-snug capitalize text-gray-400 dark:text-gray-500 ${
                    theme === "dark" ? "claro" : "oscuro"
                  }`}
                >
                  <svg viewBox="0 0 448 512" fill="currentColor" height="1em" width="1em" className="min-w-[1.2em]">
                    <path d="M152 64h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 248h80v-56H48v56zm0 48v64h80v-64H48zm128 0v64h96v-64h-96zm144 0v64h80v-64h-80zm80-104h-80v56h80v-56zm0 216h-80v56h64c8.8 0 16-7.2 16-16v-40zm-128 0h-96v56h96v-56zm-144 0H48v40c0 8.8 7.16 16 16 16h64v-56zm144-216h-96v56h96v-56z" />
                  </svg>
                  <div className={`flex flex-row capitalize ${theme === "dark" ? "claro" : "oscuro"}`}>
                    {`${formatearFecha(estudio?.inicio ?? new Date())} - ${formatearFecha(estudio?.fin ?? new Date())}`}
                  </div>
                  {estudio?.estado === false && (
                    <>
                      <span className="bg-blue-100 text-center mt-1 ml-4 h-full sm:inline-flex hidden text-blue-800 text-tiny font-medium px-3 rounded py-1 dark:bg-yellow-200 dark:text-black">
                        {calcularDiferenciaFechas(estudio?.fin ?? new Date())}
                      </span>
                      <div className="mb-3"></div>
                    </>
                  )}
                </div>
              </time>
              <time
                className={`flex flex-row gap-x-2 mb-1 text-lg font-normal leading-snug capitalize text-gray-400 dark:text-gray-500 ${
                  theme === "dark" ? "claro" : "oscuro"
                }`}
              >
                <svg viewBox="0 0 384 512" fill="currentColor" height="1em" width="1em" className="min-w-[1.2em]">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
                </svg>
                {estudio?.ubicacion ?? "Ubicación no disponible actualmente"}
              </time>
            </li>
          ))}
        </ol>
      </div>
      <h1
        className={`text-4xl text-center mt-36 mb-10 sm:text-left sm:mx-5 sm:text-5xl font-black sm:mt-24 ${
          theme === "dark" ? "claro" : "oscuro"
        }`}
      >
        Certificados, cursos
      </h1>
      <div className="my-6 mx-10 pb-12">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {cursos.map((estudio, index) => (
            <li key={index} className="mb-24 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-neutral-100 dark:ring-gray-600 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <h3 className="flex items-center text-lg font-black">
                <span className={`${theme === "dark" ? "claro" : "oscuro"} -mt-3 ml-2 sm:-mt-1`}>
                  {estudio?.titulo ?? "Título no disponible actualmente"}
                </span>
                {estudio?.estado && (
                  <span className="bg-blue-100 text-center text-blue-800 text-tiny font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    Activo actualmente
                  </span>
                )}
              </h3>
              {estudio?.estado === false && (
                <>
                  <span className="bg-blue-100 text-center text-blue-800 text-tiny font-medium px-3 py-1 rounded dark:bg-yellow-200 dark:text-black">
                    {calcularDiferenciaFechas(estudio?.fin ?? new Date())}
                  </span>
                  <div className="mb-3"></div>
                </>
              )}
              <time
                className={`flex flex-row gap-x-2 mt-6 mb-1 text-lg font-normal leading-snug text-gray-400 dark:text-gray-500 items-center ${
                  theme === "dark" ? "claro" : "oscuro"
                }`}
              >
                <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em" className="min-w-[1em]">
                  <path d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z" />
                  <path d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z" />
                </svg>
                {estudio?.lugar ?? "Lugar no disponible actualmente"}
              </time>
              <time className="flex-col">
                <div className="flex flex-row gap-x-2 mb-1 text-lg font-normal leading-snug text-gray-400 dark:text-gray-500">
                  <svg viewBox="0 0 448 512" fill="currentColor" height="1em" width="1em" className="min-w-[1em]">
                    <path d="M152 64h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 248h80v-56H48v56zm0 48v64h80v-64H48zm128 0v64h96v-64h-96zm144 0v64h80v-64h-80zm80-104h-80v56h80v-56zm0 216h-80v56h64c8.8 0 16-7.2 16-16v-40zm-128 0h-96v56h96v-56zm-144 0H48v40c0 8.8 7.16 16 16 16h64v-56zm144-216h-96v56h96v-56z" />
                  </svg>
                  <div className={`capitalize ${theme === "dark" ? "claro" : "oscuro"}`}>
                    {`${formatearFecha(estudio?.inicio ?? new Date())} - ${formatearFecha(estudio?.fin ?? new Date())}`}
                  </div>
                </div>
              </time>
              <time
                className={`flex flex-row gap-x-2 mb-4  text-lg font-normal leading-snug capitalize text-gray-400 dark:text-gray-500 ${
                  theme === "dark" ? "claro" : "oscuro"
                }`}
              >
                <svg viewBox="0 0 384 512" fill="currentColor" height="1em" width="1em" className="min-w-[1em]">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
                </svg>
                {estudio?.ubicacion ?? "Ubicación no disponible actualmente"}
              </time>
              <div className="w-full flex justify-center sm:justify-start">
                <a
                  href={estudio.url}
                  className="inline-flex items-center justify-center px-14 py-2 text-sm font-medium text-gray-900 bg-[#e2e2e2] border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-[#474747] dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg fill="currentColor" viewBox="0 0 16 16" height="1.3em" width="1.3em" className="-mt-1">
                    <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                  </svg>
                  <span className={`ml-3 ${theme === "dark" ? "claro" : "oscuro"}`}>Ver certificado</span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
