import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../data/products';
import '../styles/ContactPage.css';

const ContactPage = () => {
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

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      action: 'Call Now',
      href: `tel:${companyInfo.contact.phone}`
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your requirements',
      action: 'Send Email',
      href: `mailto:${companyInfo.contact.email}`
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come and see our showroom',
      action: 'Visit Now',
      href: `https://maps.app.goo.gl/vLd4z7Sm9nEA9RsT6`
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="contact-title"
            >
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="contact-subtitle"
            >
              Have questions about our products? Need a custom quote? 
              We're here to help you find the perfect electrical solution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods">
        <div className="contact-methods-content">
          <h2 className="contact-methods-title">How Can We Help You?</h2>
          <p className="contact-methods-subtitle">Choose your preferred way to reach us</p>
          
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  className="contact-method-card"
                >
                  <div className="contact-method-icon">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="contact-method-title">{method.title}</h3>
                  <p className="contact-method-description">{method.description}</p>
                  <div className="contact-method-button">
                    {method.action}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="contact-container">
            <div className="contact-schedule">
              <h3 className="contact-schedule-title">Business Hours</h3>
              <p className="contact-schedule-description">
                We're available to help you during these hours
              </p>
              
              <div className="contact-schedule-list">
                <div className="contact-schedule-item">
                  <span className="contact-schedule-day">Monday - Friday</span>
                  <span className="contact-schedule-hours">9:00 AM - 6:00 PM</span>
                </div>
                <div className="contact-schedule-item">
                  <span className="contact-schedule-day">Saturday</span>
                  <span className="contact-schedule-hours">10:00 AM - 4:00 PM</span>
                </div>
                <div className="contact-schedule-item">
                  <span className="contact-schedule-day">Sunday</span>
                  <span className="contact-schedule-hours">Closed</span>
                </div>
              </div>
            </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="contact-cta">
        <div className="contact-cta-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="contact-cta-title"
            >
              Ready to Get Started?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="contact-cta-subtitle"
            >
              Don't wait! Contact us today and let us help you find the perfect 
              electrical solution for your home or business.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="contact-cta-buttons"
            >
              <a href="/product/gr8-series" className="contact-cta-button contact-cta-button-primary" onClick={(e) => { e.preventDefault(); window.location.href = '/product/gr8-series'; }}>
                View Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+917666793388" className="contact-cta-button contact-cta-button-secondary">
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;