import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  ThumbsUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { testimonials } from '../data/products';
import '../styles/TestimonialsPage.css';



const TestimonialsPage = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextTestimonials = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerPage < 0 ? Math.max(0, testimonials.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  const stats = [
    { icon: ThumbsUp, number: '4.9/5', label: 'Average Rating' },
    { icon: CheckCircle, number: '17+', label: 'Years Experience' }
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
    <div className="testimonials-page">
      {/* Testimonials Section */}
      <section className="testimonials-section">
      <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Customers Say</h2>
          <p className="testimonials-subtitle">
            Discover how Superfin has transformed 
            <br />
            homes across India
          </p>
        </div>
        <div className="testimonials-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="testimonials-grid"
          >
            {(testimonials || []).slice(currentIndex, currentIndex + itemsPerPage).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="testimonial-card"
              >
                <div className="testimonial-quote">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star" />
                  ))}
                </div>
                
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="testimonial-author-info">
                    <div className="testimonial-author-name">{testimonial.name}</div>
                    <div className="testimonial-author-company">{testimonial.company}</div>
                    <div className="testimonial-author-location">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;