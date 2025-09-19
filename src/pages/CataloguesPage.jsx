import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  FileText,
  Eye,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import '../styles/CataloguesPage.css';

const CataloguesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const catalogues = [
    {
      id: 1,
      series: 'GR8',
      title: 'GR8 Series Catalogue',
      description: 'Complete range of smart electrical switches with advanced features and elegant design.',
      category: 'Smart Switches',
      rating: 4.9,
      features: [
        { icon: 'Zap', name: 'Smart Control' },
        { icon: 'Wifi', name: 'WiFi Enabled' },
        { icon: 'Shield', name: 'Safety First' },
        { icon: 'Battery', name: 'Long Battery' }
      ],
      specs: {
        pages: '24',
        size: '2.5 MB',
        updated: '2024'
      }
    },
    {
      id: 2,
      series: 'Classic',
      title: 'Classic Series Catalogue',
      description: 'Traditional electrical switches with modern reliability and timeless design.',
      category: 'Traditional',
      rating: 4.8,
      features: [
        { icon: 'CheckCircle', name: 'Reliable' },
        { icon: 'Shield', name: 'Durable' },
        { icon: 'Star', name: 'Premium' },
        { icon: 'Users', name: 'Popular' }
      ],
      specs: {
        pages: '18',
        size: '1.8 MB',
        updated: '2024'
      }
    },
    {
      id: 3,
      series: 'Pro',
      title: 'Pro Series Catalogue',
      description: 'Professional-grade electrical switches for commercial and industrial applications.',
      category: 'Commercial',
      rating: 4.9,
      features: [
        { icon: 'Zap', name: 'High Performance' },
        { icon: 'Shield', name: 'Industrial Grade' },
        { icon: 'Clock', name: '24/7 Ready' },
        { icon: 'Star', name: 'Certified' }
      ],
      specs: {
        pages: '32',
        size: '3.2 MB',
        updated: '2024'
      }
    }
  ];

  return (
    <div className="catalogues-page">
      {/* Hero Section */}
      <section className="catalogues-hero">
        <div className="catalogues-hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="catalogues-title"
            >
              Product <span className="gradient-text">Catalogues</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="catalogues-subtitle"
            >
              Download our comprehensive product catalogues to explore our complete range 
              of electrical switches and find the perfect solution for your needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Catalogues Section */}
      <section className="catalogues-section">
        <div className="catalogues-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="catalogues-grid"
          >
            {catalogues.map((catalogue, index) => (
              <motion.div
                key={catalogue.id}
                variants={itemVariants}
                className="catalogue-card"
              >
                <div className="catalogue-image">
                  <div className="catalogue-image-placeholder">
                    <FileText className="w-12 h-12" />
                  </div>
                  <div className="catalogue-badge">{catalogue.category}</div>
                </div>
                
                <div className="catalogue-content">
                  <div className="catalogue-header">
                    <div className="catalogue-series">{catalogue.series}</div>
                    <div className="catalogue-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="star" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="catalogue-title">{catalogue.title}</h3>
                  <p className="catalogue-description">{catalogue.description}</p>
                  
                  <div className="catalogue-features">
                    <h4 className="catalogue-features-title">Key Features</h4>
                    <div className="catalogue-features-grid">
                      {catalogue.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="catalogue-feature">
                          <CheckCircle className="catalogue-feature-icon" />
                          {feature.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="catalogue-specs">
                    <h4 className="catalogue-specs-title">Specifications</h4>
                    <div className="catalogue-specs-list">
                      <div className="catalogue-spec">
                        <span>Pages</span>
                        <span>{catalogue.specs.pages}</span>
                      </div>
                      <div className="catalogue-spec">
                        <span>File Size</span>
                        <span>{catalogue.specs.size}</span>
                      </div>
                      <div className="catalogue-spec">
                        <span>Updated</span>
                        <span>{catalogue.specs.updated}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="catalogue-actions">
                    <a href="#" className="catalogue-action-button catalogue-action-button-primary">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                    <a href="#" className="catalogue-action-button">
                      <Eye className="w-4 h-4" />
                      Preview
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="catalogue-showcase">
        <div className="catalogue-showcase-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="catalogue-showcase-text"
          >
            <motion.h2 
              variants={itemVariants}
              className="catalogue-showcase-title"
            >
              Why Download Our Catalogues?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="catalogue-showcase-description"
            >
              Our comprehensive catalogues provide detailed information about all our products, 
              helping you make informed decisions for your electrical needs.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="catalogue-showcase-features"
            >
              <div className="catalogue-showcase-feature">
                <CheckCircle className="catalogue-showcase-feature-icon" />
                <span className="catalogue-showcase-feature-text">Detailed Product Specifications</span>
              </div>
              <div className="catalogue-showcase-feature">
                <CheckCircle className="catalogue-showcase-feature-icon" />
                <span className="catalogue-showcase-feature-text">High-Quality Product Images</span>
              </div>
              <div className="catalogue-showcase-feature">
                <CheckCircle className="catalogue-showcase-feature-icon" />
                <span className="catalogue-showcase-feature-text">Technical Drawings and Dimensions</span>
              </div>
              <div className="catalogue-showcase-feature">
                <CheckCircle className="catalogue-showcase-feature-icon" />
                <span className="catalogue-showcase-feature-text">Installation Guidelines</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="catalogue-showcase-visual"
          >
            <div className="catalogue-showcase-image">
              <div className="catalogue-showcase-icon">
                <FileText className="w-16 h-16" />
              </div>
              <div className="catalogue-showcase-title-visual">Product Catalogues</div>
              <div className="catalogue-showcase-subtitle-visual">Download & Explore</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="catalogue-cta">
        <div className="catalogue-cta-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="catalogue-cta-title"
            >
              Need Help Choosing?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="catalogue-cta-subtitle"
            >
              Our experts are here to help you find the perfect electrical solution. 
              Contact us for personalized recommendations and support.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="catalogue-cta-buttons"
            >
              <a href="/contact" className="catalogue-cta-button catalogue-cta-button-primary">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/" className="catalogue-cta-button catalogue-cta-button-secondary" onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
                View Products
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CataloguesPage;