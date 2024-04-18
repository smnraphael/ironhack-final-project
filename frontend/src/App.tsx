import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import CompanySignup from "./pages/CompanySignup";
import CompanyLogin from "./pages/CompanyLogin";
import OneJobOffer from "./pages/OneJobOffer";
import CompanyProfile from "./pages/CompanyProfile";
import Application from "./pages/Application";
import UserProfile from "./pages/UserProfile";
import CompanyPrivateProfile from "./pages/CompanyPrivateProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/company/signup" element={<CompanySignup />} />
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/job-offers/:jobOfferId" element={<OneJobOffer />} />
        <Route
          path="/company/profile/:companyId"
          element={<CompanyProfile />}
        />
        <Route
          path="/job-offers/:jobOfferId/application"
          element={<Application />}
        />
        <Route path="/user/profile/:userId" element={<UserProfile />} />
        <Route
          path="/company/private-profile/:companyId"
          element={<CompanyPrivateProfile />}
        />
      </Routes>
    </div>
  );
}

export default App;
