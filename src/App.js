import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
