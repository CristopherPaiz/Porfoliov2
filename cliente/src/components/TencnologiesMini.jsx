import PropTypes from "prop-types";

const TencnologiesMini = ({ nombre }) => {
  const tecnologias = [
    {
      nombre: "HTML5",
      imgurl: "https://cdn.svgporn.com/logos/html-5.svg",
      color: "#e85326",
    },
    {
      nombre: "CSS3",
      imgurl: "https://cdn.svgporn.com/logos/css-3.svg",
      color: "#2652e8",
    },
    {
      nombre: "JavaScript",
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg",
      color: "#e4a424",
    },
    {
      nombre: "React JS",
      imgurl: "https://cdn.svgporn.com/logos/react.svg",
      color: "#04dcfc",
    },
    {
      nombre: "Vue JS",
      imgurl: "https://cdn.svgporn.com/logos/vue.svg",
      color: "#44bb84",
    },
    {
      nombre: "Java",
      imgurl: "https://cdn.svgporn.com/logos/java.svg",
      color: "#f7c53d",
    },
    {
      nombre: "Tailwind CSS",
      imgurl: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
      color: "#18b8bb",
    },
    {
      nombre: "Bootstrap",
      imgurl: "https://cdn.svgporn.com/logos/bootstrap.svg",
      color: "#7c14fc",
    },
    {
      nombre: "Node JS",
      imgurl: "https://cdn.svgporn.com/logos/nodejs.svg",
      color: "#81b38b",
    },
    {
      nombre: "Spring Boot",
      imgurl: "https://cdn.svgporn.com/logos/spring-icon.svg",
      color: "#6cb33f",
    },
    {
      nombre: "Github",
      imgurl: "https://cdn.svgporn.com/logos/github-icon.svg",
      color: "#8c8c8c",
    },
    {
      nombre: "Python",
      imgurl: "https://cdn.svgporn.com/logos/python.svg",
      color: "#3473a5",
    },
    {
      nombre: "MySQL",
      imgurl: "https://cdn.svgporn.com/logos/mysql.svg",
      color: "#04748c",
    },
    {
      nombre: "MongoDB",
      imgurl: "https://cdn.svgporn.com/logos/mongodb-icon.svg",
      color: "#04ec64",
    },
    {
      nombre: "Oracle DB",
      imgurl: "https://cdn.svgporn.com/logos/oracle.svg",
      color: "#f80000",
    },
    {
      nombre: "Redux",
      imgurl: "https://cdn.svgporn.com/logos/redux.svg",
      color: "#744cbc",
    },
    {
      nombre: "PHP",
      imgurl: "https://cdn.svgporn.com/logos/php.svg",
      color: "#6382af",
    },
    {
      nombre: "C++",
      imgurl: "https://cdn.svgporn.com/logos/c-plusplus.svg",
      color: "#33a9f9",
    },
    {
      nombre: "Illustrator",
      imgurl: "https://cdn.svgporn.com/logos/adobe-illustrator.svg",
      color: "#f99904",
    },
    {
      nombre: "Photoshop",
      imgurl: "https://cdn.svgporn.com/logos/adobe-photoshop.svg",
      color: "#33a9f9",
    },
    {
      nombre: "After Effects",
      imgurl: "https://cdn.svgporn.com/logos/adobe-after-effects.svg",
      color: "#9a9afa",
    },
    {
      nombre: "Office",
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg",
      color: "#ec3c04",
    },
    {
      nombre: "NextUI",
      imgurl: "https://avatars.githubusercontent.com/u/86160567",
      color: "black",
    },
    {
      nombre: "API",
      imgurl: "https://cdn-icons-png.flaticon.com/512/4180/4180439.png",
      color: "#33a9f9",
    },
  ];
  // Encuentra el objeto tecnología con el nombre proporcionado
  const tecnologiaSeleccionada = tecnologias.find((tec) => tec.nombre === nombre);

  // Verifica si no se encontró la tecnología
  if (!tecnologiaSeleccionada) {
    return null;
  }

  return (
    <div
      className="flex rounded-full p-1 sm:p-2"
      style={{
        backgroundColor: "white",
        border: `4px solid ${tecnologiaSeleccionada.color}`,
        boxSizing: "border-box",
      }}
    >
      <img src={tecnologiaSeleccionada.imgurl} alt={tecnologiaSeleccionada.nombre} className="w-4 h-4 sm:w-6 sm:h-6" />
    </div>
  );
};

export default TencnologiesMini;

TencnologiesMini.propTypes = {
  nombre: PropTypes.string.isRequired,
};
