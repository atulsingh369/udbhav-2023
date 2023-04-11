import { Route, Routes } from "react-router-dom";
import Forms from "./pages/Forms";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Tour from "./pages/Tour";
import TechEventsPage from "./pages/TechEventsPage";
import CulturalEventPage from "./pages/CulturalEventPage";
import Profile from "./pages/Profile";
import Landing from "./components/Landing";
import TechForm from "./components/forms/techForms";
import CultForm from "./components/forms/cultForms";
import EasterEgg from "./components/EasterEgg";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        {/* events pages routing */}
        <Route path="/technovation" element={<TechEventsPage />} />
        <Route path="/cultural" element={<CulturalEventPage />} />
        {/* Form pages */}
        <Route path="/techform/:id" element={<TechForm />} />
        <Route path="/culturalform/:id" element={<CultForm />} />
        {/* Profile page */}
        <Route path="/profile" element={<Profile />} />
        {/* hidden eatser */}
        <Route path="/hidden-easter" element={<EasterEgg />} />
      </Routes>
    </div>
  );
};

export default App;
