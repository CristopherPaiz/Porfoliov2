import AboutMe from "../components/AboutMe.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Timeline from "../components/Timeline.jsx";
import Title from "../components/Title.jsx";

const Homepage = () => {
  return (
    <>
      <Title />
      <AboutMe />
      <Timeline />
      <Skills />
      <Projects />
    </>
  );
};

export default Homepage;
