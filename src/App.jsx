import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import DestinationList from './components/DestinationList';
import ContactForm from './components/ContactForm';
import DestinationDetail from './components/DestinationDetail';
import FavoriteDestinations from './components/favouritedestination';
import About from './components/About';   // ✅ New About page import
import img1 from './assets/tour15.jpg';
import img2 from './assets/tour7.jpg';
import img3 from './assets/tour9.jpg';
import img4 from './assets/tour16.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <Navbar className="custom-navbar" expand="lg" bg="light">
        <Navbar.Brand className="brand-heading">INCREDIBLE INDIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/about" className="nav-link">About</Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Carousel className="custom-carousel">
        {[img1, img3, img2, img4].map((src, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100 carousel-image" src={src} alt={`Slide ${idx + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <br />

      <Routes>
        <Route path="/" element={<DestinationList favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/favorites" element={<FavoriteDestinations favorites={favorites} />} />
        <Route path="/about" element={<About />} /> 
      </Routes>

      <footer className="custom-footer">
        <div className="footer-section">
          <h3>Connect with us</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact us</h3>
          <p>Email: sksanthosh2566@gmail.com</p>
          <p>Phone: +91 936-1962-566</p>
        </div>

        <div className="footer-section">
          <h3>Tourist places</h3>
          <p>Choose the place you like, and be happy.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default App;

