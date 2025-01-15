import { useContext } from "react";
import { contexto } from "../context/ContextProvider.jsx";

const Skills = () => {
  const { theme } = useContext(contexto);

  const tecnologias = [
    {
      nombre: "HTML5",
      imgurl: "https://cdn.svgporn.com/logos/html-5.svg",
      stars: "★★★★★᠎᠎᠎᠎",
      color: "#e85326",
    },
    {
      nombre: "CSS3",
      imgurl: "https://cdn.svgporn.com/logos/css-3.svg",
      stars: "★★★★★",
      color: "#2652e8",
    },
    {
      nombre: "JavaScript",
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg",
      stars: "★★★★★",
      color: "#e4a424",
    },
    {
      nombre: "React JS",
      imgurl: "https://cdn.svgporn.com/logos/react.svg",
      stars: "★★★★★",
      color: "#04dcfc",
    },
    {
      nombre: "Vue JS",
      imgurl: "https://cdn.svgporn.com/logos/vue.svg",
      stars: "★★★☆☆",
      color: "#44bb84",
    },
    {
      nombre: "Java",
      imgurl: "https://cdn.svgporn.com/logos/java.svg",
      stars: "★★★☆☆",
      color: "#f7c53d",
    },
    {
      nombre: "Tailwind CSS",
      imgurl: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
      stars: "★★★★★",
      color: "#18b8bb",
    },
    {
      nombre: "Bootstrap",
      imgurl: "https://cdn.svgporn.com/logos/bootstrap.svg",
      stars: "★★★★★",
      color: "#7c14fc",
    },
    {
      nombre: "Node JS",
      imgurl: "https://cdn.svgporn.com/logos/nodejs.svg",
      stars: "★★★★☆",
      color: "#81b38b",
    },
    {
      nombre: "Spring Boot",
      imgurl: "https://cdn.svgporn.com/logos/spring-icon.svg",
      stars: "★★★☆☆",
      color: "#6cb33f",
    },
    {
      nombre: "Github",
      imgurl: "https://cdn.svgporn.com/logos/github-icon.svg",
      stars: "★★★★★",
      color: "#8c8c8c",
    },
    {
      nombre: "Python",
      imgurl: "https://cdn.svgporn.com/logos/python.svg",
      stars: "★★★★☆",
      color: "#3473a5",
    },
    {
      nombre: "MySQL",
      imgurl: "https://cdn.svgporn.com/logos/mysql.svg",
      stars: "★★★★☆",
      color: "#04748c",
    },
    {
      nombre: "MongoDB",
      imgurl: "https://cdn.svgporn.com/logos/mongodb-icon.svg",
      stars: "★★★★★",
      color: "#04ec64",
    },
    {
      nombre: "Oracle DB",
      imgurl: "https://cdn.svgporn.com/logos/oracle.svg",
      stars: "★★★☆☆",
      color: "#f80000",
    },
    {
      nombre: "Redux",
      imgurl: "https://cdn.svgporn.com/logos/redux.svg",
      stars: "★★★☆☆",
      color: "#744cbc",
    },
    {
      nombre: "PHP",
      imgurl: "https://cdn.svgporn.com/logos/php.svg",
      stars: "★★★☆☆",
      color: "#6382af",
    },
    {
      nombre: "C++",
      imgurl: "https://cdn.svgporn.com/logos/c-plusplus.svg",
      stars: "★★★★☆",
      color: "#33a9f9",
    },
    {
      nombre: "Illustrator",
      imgurl: "https://cdn.svgporn.com/logos/adobe-illustrator.svg",
      stars: "★★★★★",
      color: "#f99904",
    },
    {
      nombre: "Photoshop",
      imgurl: "https://cdn.svgporn.com/logos/adobe-photoshop.svg",
      stars: "★★★☆☆",
      color: "#33a9f9",
    },
    {
      nombre: "After Effects",
      imgurl: "https://cdn.svgporn.com/logos/adobe-after-effects.svg",
      stars: "★★★☆☆",
      color: "#9a9afa",
    },
    {
      nombre: "Office",
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg",
      stars: "★★★★★",
      color: "#ec3c04",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="sm:mx-32 mb-32 max-w-[1200px] w-full">
        <h1
          className={`text-5xl text-center mt-24 sm:text-left sm:mx-5 sm:text-6xl font-black sm:mt-24 mb-14 ${theme === "dark" ? "claro" : "oscuro"}`}
        >
          Habilidades
        </h1>
        <div className="flex justify-center flex-wrap gap-6">
          {tecnologias.map((tecnologia, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-2 px-1 sm:w-34 w-3/12 rounded-xl shadow-xl cursor-default border-2 dark:hover:shadow-[#6e6e6e] dark:hover:shadow-lg hover:shadow-xl hover:shadow-[#acacac] duration-100 ease-linear"
              style={{
                borderColor: theme === "dark" ? tecnologia.color + "20" : tecnologia.color + "30",
                backgroundColor: theme === "dark" ? tecnologia.color + "50" : tecnologia.color + "20",
              }}
            >
              <img src={tecnologia.imgurl} alt={tecnologia.nombre} className="w-14 h-14 sm:w-20 sm:h-20" />
              <p className={`text-center mt-1 font-black text-sm sm:text-lg`} style={{ color: tecnologia.color }}>
                {tecnologia.nombre}
              </p>
              <p style={{ color: tecnologia.color }} className={`text-center font-thin text-lg sm:text-xl`}>
                {tecnologia.stars}  
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
