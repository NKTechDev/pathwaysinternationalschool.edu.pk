import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSlideshow from "./components/HeroSlideshow";
import OurCampuses from "./components/OurCampuses";
import CampusDetails from "./components/CampusDetails";
import "./App.css";
import OlevelsSubjectOptions from "./components/OlevelsSubjectOptions";
import Footer from "./components/Footer";
import PathwaysWelcomePage from "./components/PathwaysWelcomePage";
import SuccessStoriesPage from "./components/Successstories";
import CurriculumOverviewPage from "./components/CurriculumOverviewPage";
import OLevelResultsPage from "./components/OLevelResultsPage";
import EarlyYearsPage from "./components/Kindergartensection";
import PrimarySectionPage from "./components/PrimarySectionPage";
import JuniorSectionPage from "./components/JuniorSectionPage";
import SeniorSectionPage from "./components/SeniorSectionPage";
import BeyondClassroomPage from "./components/BeyondClassroomPage";
import ExtraCurricularActivitiesPage from "./components/ExtraCurricularActivitiesPage";
import SchoolEventsPage from "./components/SchoolEventsPage";
import AdmissionsPage from "./components/AdmissionsPage";
import CareersPage from "./components/CareersPage";
import ContactPage from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <br />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlideshow />
              <OurCampuses />
              <OlevelsSubjectOptions />
            </>
          }
        />

        <Route path="/campuses/:id" element={<CampusDetails />} />
        <Route path="/events/:id" element={<CampusDetails />} />
        <Route path="/welcome" element={<PathwaysWelcomePage />} />
        <Route path="/success" element={<SuccessStoriesPage />} />
        <Route path="/curriculum" element={<CurriculumOverviewPage />} />
        <Route path="/results" element={<OLevelResultsPage />} />
        <Route path="/kg" element={<EarlyYearsPage />} />
        <Route path="/primary" element={<PrimarySectionPage />} />
        <Route path="/junior" element={<JuniorSectionPage />} />
        <Route path="/senior" element={<SeniorSectionPage />} />
        <Route path="/beyond" element={<BeyondClassroomPage />} />
        <Route path="/extracurricular" element={<ExtraCurricularActivitiesPage />} />
        <Route path="/events" element={<SchoolEventsPage />} />
        <Route path="/application-process" element={<AdmissionsPage />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />




      </Routes>
              <Footer />

    </>
  );
}
