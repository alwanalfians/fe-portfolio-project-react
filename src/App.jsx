import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Educations from "./pages/educations";
import Experiences from "./pages/experiences";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/educations" element={<Educations />} />
      <Route path="/experiences" element={<Experiences />} />
    </Routes>
  );
};

export default App;
