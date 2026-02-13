import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSlideshow from "./components/HeroSlideshow";
import OurCampuses from "./components/OurCampuses";
import CampusDetails from "./components/CampusDetails";
import "./App.css";
import OlevelsSubjectOptions from "./components/OlevelsSubjectOptions";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlideshow />
              <OurCampuses />
              <OlevelsSubjectOptions/>
              <Footer/>
            </>
          }
        />

        <Route path="/campuses/:id" element={<CampusDetails />} />
        <Route path="/events/:id" element={<CampusDetails />} />
      </Routes>
    </>
  );
}
