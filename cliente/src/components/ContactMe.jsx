import { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Netlify form handling
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        alert("Mensaje enviado correctamente");
        form.reset();
      })
      .catch((error) => alert("Error al enviar el mensaje: " + error));
  };

  const { theme } = useContext(contexto);

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <h1 className={`font-black text-4xl md:text-5xl text-center mb-8 ${theme === "dark" ? "claro" : "oscuro"}`}>Contáctame</h1>

      <div className="bg-black/10 dark:bg-white/10 rounded-2xl p-6 md:p-8">
        <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-4" onSubmit={handleSubmit} netlify>
          <input type="hidden" name="form-name" value="contact" />

          <label className="flex flex-col">
            <span className="mb-1 font-semibold">Nombre</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Ingrese su nombre"
              className="p-2 dark:bg-black/30 dark:text-white rounded-lg bg-white/80 text-black"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 font-semibold">Correo electrónico</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Ingrese su correo electrónico"
              className="p-2 dark:bg-black/30 dark:text-white rounded-lg bg-white/80 text-black"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 font-semibold">Mensaje</span>
            <textarea
              name="message"
              required
              placeholder="Escríbeme algo..."
              className="p-2 h-24 dark:bg-black/30 dark:text-white rounded-lg bg-white/80 text-black resize-y"
            />
          </label>

          <button
            type="submit"
            className="mt-4 bg-yellow-300 text-black px-8 py-2 rounded-lg hover:bg-yellow-400 transition-colors w-full md:w-auto md:self-center"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
