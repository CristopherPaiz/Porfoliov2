import { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    alert("Mensaje enviado correctamente");
    form.reset();
  };

  const { theme } = useContext(contexto);
  return (
    <div className={`flex flex-col sm:mx-32`}>
      <h1
        className={`font-black text-5xl text-center sm:text-6xl sm:ml-6 mb-16 ${theme === "dark" ? "claro" : "oscuro"}`}
      >
        Contáctame
      </h1>
      <div className={`flex flex-col w-[85%] sm:w-[700px] m-auto bg-black/10 dark:bg-white/10 py-20 rounded-3xl`}>
        <form name="contact" method="post" data-netlify="true" className={`flex flex-col gap-5 px-8 w-full`} netlify>
          <input type="hidden" name="form-name" value="contact" />
          <label className="flex flex-col mb-2">
            <span className="mb-2 font-semibold">Nombre</span>
            <input
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
              className="py-3 px-4 dark:bg-black/30 dark:text-white rounded-lg bg-white/80 text-black"
            />
          </label>
          <label className="flex flex-col mb-2">
            <span className="mb-2 font-semibold">Correo electrónico</span>
            <input
              type="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              className="py-3 px-4 dark:bg-black/30 dark:text-white rounded-lg bg-white/80 text-black"
            />
          </label>
          <label className="flex flex-col mb-2">
            <span className="mb-2 font-semibold">Mensaje</span>
            <textarea
              name="message"
              placeholder="Escríbeme algo..."
              style={{ height: "100px" }}
              defaultValue={""}
              className="py-3 px-4 dark:bg-black/30 dark:text-white rounded-lg bg-white/80 text-black"
            />
          </label>
          <div className="flex w-full justify-center">
            <input
              type="submit"
              onClick={handleSubmit}
              defaultValue="Enviar"
              className="m-auto mt-5 bg-yellow-300 text-black px-20 py-4 rounded-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
