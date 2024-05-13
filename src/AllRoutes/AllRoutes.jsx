import { Route, Routes } from "react-router-dom";
import HomeLight from "../components/HomeLight";
import AboutLight from "../components/AboutLight";
import NotFound from "../components/NotFound";
import Projects from "../components/Projects";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLight />} />
      <Route path="/about" element={<AboutLight />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
