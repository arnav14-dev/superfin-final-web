import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel';
import FeaturePage from './pages/FeaturePage';

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
            <Route path="/feature" element={<FeaturePage />} />
            <Route path="/product" element={<HorizontalScrollCarousel />} />
            <Route path="/product/:seriesname" element={<ProductPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </motion.main>
        
        <Footer />
        <WhatsAppFloat />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
