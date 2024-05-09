import { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";

const ContactMe = () => {
  const { theme } = useContext(contexto);
  return (
    <div className={`flex flex-col sm:mx-32`}>
      <h1
        className={`font-black text-5xl text-center sm:text-6xl sm:ml-6 mb-16 ${theme === "dark" ? "claro" : "oscuro"}`}
      >
        Contáctame
      </h1>
      <div
        className={`flex flex-col sm:flex-row w-[85%] sm:w-[400px] m-auto mx-6 bg-black/20 dark:bg-white/10 py-20 rounded-3xl`}
      >
        <form name="contact" method="post" data-netlify="true" className={`flex flex-col gap-5 px-8 w-full`}>
          <input type="hidden" name="form-name" value="contact" />
          <label className="flex flex-col mb-2">
            <span className="mb-2">Nombre:</span>
            <input type="text" name="name" placeholder="Tu nombre" />
          </label>
          <label className="flex flex-col mb-2">
            <span className="mb-2">Correo electrónico:</span>
            <input type="email" name="email" placeholder="Tu correo electrónico" />
          </label>
          <label className="flex flex-col mb-2">
            <span className="mb-2">Mensaje:</span>
            <textarea name="message" placeholder="Escríbeme algo..." style={{ height: "auto" }} defaultValue={""} />
          </label>
          <div className="submitsub">
            <input type="submit" defaultValue="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};
//
export default ContactMe;
