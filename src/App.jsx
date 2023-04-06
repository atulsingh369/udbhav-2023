import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Tour from "./pages/Tour";
import TechEventsPage from "./pages/TechEventsPage";
import CulturalEventPage from "./pages/CulturalEventPage";
import FormEvent from "./pages/FormEvent";
import Profile from "./pages/Profile";
import PathikForm from "./pages/PathikForm";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        {/* events pages routing */}
        <Route path="/technovation" element={<TechEventsPage />} />
        <Route path="/cultural" element={<CulturalEventPage />} />
        {/* Form pages */}
        <Route path="/form-event" element={<FormEvent />} />
        <Route path="/pathik-form-event" element={<PathikForm />} />
        {/* Profile page */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
