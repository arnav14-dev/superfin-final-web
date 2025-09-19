import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/products';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your electric switches. Could you please provide more information?"
    );
    const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${companyInfo.contact.phone}`, '_self');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${companyInfo.contact.email}`, '_self');
  };

  return (
    <div className="whatsapp-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="whatsapp-popup"
          >
            <div className="whatsapp-popup-header">
              <h3 className="whatsapp-popup-title">Contact Us</h3>
              <p className="whatsapp-popup-subtitle">How can we help you?</p>
            </div>
            
            <div className="whatsapp-popup-buttons">
              <Button
                onClick={handleWhatsAppClick}
                className="whatsapp-button-green"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Chat
              </Button>
              
              <Button
                onClick={handlePhoneClick}
                variant="outline"
                className="whatsapp-button-outline"
                size="sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              
              <Button
                onClick={handleEmailClick}
                variant="outline"
                className="whatsapp-button-outline"
                size="sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-float-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;