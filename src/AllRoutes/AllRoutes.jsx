import { Route, Routes } from "react-router-dom";
import HomeLight from "../components/HomeLight";
import AboutLight from "../components/AboutLight";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLight />} />
      <Route path="/about" element={<AboutLight />} />
    </Routes>
  );
};

export default AllRoutes;
