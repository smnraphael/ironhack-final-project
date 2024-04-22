import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ApplicantSignup from "./pages/ApplicantSignup";
import ApplicantLogin from "./pages/ApplicantLogin";
import CompanySignup from "./pages/CompanySignup";
import CompanyLogin from "./pages/CompanyLogin";
import OneJobOffer from "./pages/OneJobOffer";
import CompanyProfile from "./pages/CompanyProfile";
import SendApplication from "./pages/SendApplication";
import ApplicantPrivateProfile from "./pages/ApplicantPrivateProfile";
import CompanyPrivateProfile from "./pages/CompanyPrivateProfile";
import PostJobOffer from "./pages/PostJobOffer";
import CompanyJobOffers from "./pages/CompanyJobOffers";
import IsLoggedIn from "./components/routing/IsLoggedIn";
import ApplicantsList from "./pages/ApplicantsList";
import ApplicantApplications from "./pages/ApplicantApplications";

function App() {
  return (
    <div className="App bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <div className="pt-6 pb-10 px-6 md:px-10 lg:px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applicants/signup" element={<ApplicantSignup />} />
          <Route path="/applicants/login" element={<ApplicantLogin />} />
          <Route path="/companies/signup" element={<CompanySignup />} />
          <Route path="/companies/login" element={<CompanyLogin />} />
          <Route path="/job-offers/:jobOfferId" element={<OneJobOffer />} />
          <Route path="/companies/:companyId" element={<CompanyProfile />} />
          <Route element={<IsLoggedIn />}>
            <Route
              path="/job-offers/:jobOfferId/application"
              element={<SendApplication />}
            />
            <Route
              path="/applicants/profile"
              element={<ApplicantPrivateProfile />}
            />
            <Route
              path="/companies/profile"
              element={<CompanyPrivateProfile />}
            />
            <Route
              path="companies/publish-job-offer"
              element={<PostJobOffer />}
            />
            <Route
              path="/companies/job-offers"
              element={<CompanyJobOffers />}
            />
            <Route
              path="/companies/job-offers/:jobOfferId"
              element={<ApplicantsList />}
            />
            <Route
              path="/applicants/applications"
              element={<ApplicantApplications />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
