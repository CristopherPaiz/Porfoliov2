import { useContext, useEffect, useState } from "react";
import { contexto } from "../context/ContextProvider.jsx";
import GifPlayer from "react-gif-player";
import LOGO from "/CAPLTITLE1TIMES.gif";

const Title = () => {
  const { theme } = useContext(contexto);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldEnlarge, setShouldEnlarge] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth <= 768); // Establecer como móvil si el ancho de la pantalla es menor o igual a 768 píxeles
  }, []);

  useEffect(() => {
    let timeout;
    if (isMobile) {
      timeout = setTimeout(() => {
        setShouldEnlarge(true);
      }, 2500); // Aumentar tamaño después de 2.5 segundos
    }
    return () => clearTimeout(timeout);
  }, [isMobile]);

  return (
    <div className="h-screen -mt-16 grid place-content-center place-items-center relative">
      <div
        className="px-2 -z-10"
        style={{
          transform: shouldEnlarge ? "scale(2.0)" : "none",
          transition: shouldEnlarge ? "transform 0.5s ease-in-out" : "none",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <GifPlayer
          gif={LOGO}
          autoplay={true}
          loop={false}
          style={{ pointerEvents: "none" }} // Hacer que el GIF no sea clickeable
        />
      </div>
      <div className="absolute inset-0" style={{ pointerEvents: "none", zIndex: 1 }}></div>
      <h2 className={`z-10 mt-4 sm:-mt-32 text-2xl sm:text-5xl ${theme === "dark" ? "claro" : "oscuro"}`}>
        Desarrollador
      </h2>
    </div>
  );
};

export default Title;
