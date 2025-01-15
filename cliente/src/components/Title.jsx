import { useContext, useEffect, useState } from "react";
import { contexto } from "../context/ContextProvider.jsx";
import LOGO from "/CAPLTITLE1TIMES.gif";

const Title = () => {
  const { theme } = useContext(contexto);
  const [shouldEnlarge, setShouldEnlarge] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth <= 768);
  }, []);

  useEffect(() => {
    const gif = new Image();
    gif.src = LOGO;
    gif.onload = () => {
      setIsLoaded(true);

      // Iniciar la cuenta de tiempo para el agrandamiento después de 2.5 segundos de reproducción
      if (isMobile) {
        setTimeout(() => {
          setShouldEnlarge(true);
        }, 2000);
      }
    };
  }, [isMobile]);

  return (
    <div className="h-screen -mt-16 grid place-content-center place-items-center relative overflow-hidden">
      <div
        className="px-2 -z-10"
        style={{
          transform: shouldEnlarge ? "scale(2.0)" : "none",
          transition: shouldEnlarge ? "transform 0.5s ease-in-out" : "none",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {isLoaded && <img src={LOGO} alt="GIF" />}
      </div>
      <div className="absolute inset-0" style={{ pointerEvents: "none", zIndex: 1 }}></div>
      <h2 className={`z-10 mt-4 sm:-mt-32 text-2xl sm:text-5xl font-bold ${theme === "dark" ? "claro" : "oscuro"}`}>Desarrollador</h2>
    </div>
  );
};

export default Title;
