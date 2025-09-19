import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  Search,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { faqs, companyInfo } from '../data/products';
import '../styles/FAQPage.css';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'products', name: 'Products' },
    { id: 'installation', name: 'Installation' },
    { id: 'support', name: 'Support' },
    { id: 'shipping', name: 'Shipping' }
  ];

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

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="faq-title"
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="faq-subtitle"
            >
              Find answers to common questions about our products, installation, 
              and services. Can't find what you're looking for? Contact us!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="faq-search">
        <div className="faq-search-content">
          <h2 className="faq-search-title">Search Questions</h2>
          <p className="faq-search-subtitle">Type your question or keyword to find relevant answers</p>
          
          <div className="faq-search-form">
            <Search className="faq-search-icon" />
            <Input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="faq-search-input"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="faq-accordion"
          >
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`} className="faq-item">
                  <AccordionTrigger className="faq-trigger">
                    <span className="faq-question">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="faq-content">
                    <div className="faq-answer">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="faq-contact">
        <div className="faq-contact-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="faq-contact-title"
            >
              Still Have Questions?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="faq-contact-subtitle"
            >
              Our support team is here to help you with any questions or concerns you may have.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="faq-contact-grid"
            >
              <div className="faq-contact-card">
                <div className="faq-contact-icon">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="faq-contact-title-card">Call Us</h3>
                <p className="faq-contact-description">
                  Speak directly with our technical experts for immediate assistance.
                </p>
                <a href={`tel:${companyInfo.phone}`} className="faq-contact-button">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
              
              <div className="faq-contact-card">
                <div className="faq-contact-icon">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="faq-contact-title-card">Email Us</h3>
                <p className="faq-contact-description">
                  Send us your detailed questions and we'll respond within 24 hours.
                </p>
                <a href={`mailto:${companyInfo.email}`} className="faq-contact-button">
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
              
              <div className="faq-contact-card">
                <div className="faq-contact-icon">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="faq-contact-title-card">Live Chat</h3>
                <p className="faq-contact-description">
                  Get instant support through our live chat feature during business hours.
                </p>
                <a href="#" className="faq-contact-button">
                  <MessageCircle className="w-4 h-4" />
                  Start Chat
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta">
        <div className="faq-cta-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="faq-cta-title"
            >
              Ready to Get Started?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="faq-cta-subtitle"
            >
              Explore our products and find the perfect electrical solution for your home or business.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="faq-cta-buttons"
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

export default FAQPage;