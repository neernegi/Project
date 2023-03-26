import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Home from "./components/Home";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/booking.scss';
import './styles/mediaquery.scss';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/#contact" element={<Contact />} />
        <Route path="/#about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
