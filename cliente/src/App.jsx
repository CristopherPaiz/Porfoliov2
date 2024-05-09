import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context/ContextProvider.jsx";

import Homepage from "./views/Homepage";
import NotFoundPage from "./views/NotFoundPage";
import Navibar from "./components/Navibar";
import About from "./views/About.jsx";

const App = () => {
  return (
    <ContextProvider>
      <Navibar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
