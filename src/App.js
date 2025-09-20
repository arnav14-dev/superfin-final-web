import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Pages
import HomePage from './pages/HomePage';
// import FeaturesPage from './pages/FeaturesPage';
import ProductPage from './pages/ProductPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CataloguesPage from './pages/CataloguesPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <motion.main 
          className="app-main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:seriesname" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </motion.main>
        
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
