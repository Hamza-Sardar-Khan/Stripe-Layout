import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import CarteTheBlance from "pages/CarteTheBlancheDownloadpageBuild";
import CarteTheBlanceGrow from "pages/CarteTheBlancheDownloadpageGrow";
import NotFound from "pages/NotFound";
const CarteTheBlancheDownloadpageGrow = React.lazy(
  () => import("pages/CarteTheBlancheDownloadpageGrow"),
);
const CarteTheBlancheDownloadpageBuild = React.lazy(
  () => import("pages/CarteTheBlancheDownloadpageBuild"),
);
const CarteTheBlanche = React.lazy(() => import("pages/CarteTheBlanche"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="" element={<CarteTheBlance />} />
          <Route path="" element={<CarteTheBlanceGrow />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cartetheblanche" element={<CarteTheBlanche />} />
          <Route
            path="/cartetheblanchedownloadpagebuild"
            element={<CarteTheBlancheDownloadpageBuild />}
          />
          <Route
            path="/cartetheblanchedownloadpagegrow"
            element={<CarteTheBlancheDownloadpageGrow />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
