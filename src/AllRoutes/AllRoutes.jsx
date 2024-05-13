import { Route, Routes } from "react-router-dom";
import HomeLight from "../components/HomeLight";
import AboutLight from "../components/AboutLight";
import NotFound from "../components/NotFound";
import Projects from "../components/Projects";
import { Appy } from "../components/Navbar";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLight />} />
      <Route path="/about" element={<AboutLight />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={ <Appy />} />
    </Routes>
  );
};

export default AllRoutes;
