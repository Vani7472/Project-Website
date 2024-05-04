import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Parts from "./pages/Parts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/parts-accessories' element={<Parts />} />
        <Route exact path='/about-us' element={<About/>} />
        <Route exact path='/contact-us' element={<Contact/>} />
        <Route exact path='/services' element={<Services/>} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
