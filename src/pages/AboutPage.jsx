import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Building,
  Target,
  Lightbulb,
  Heart,
  Factory,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo } from '../data/products';
import '../styles/AboutPage.css';

const AboutPage = () => {
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

  const milestones = [
    {
      year: '2006',
      title: 'Company Founded',
      description: 'Started as a small electrical components manufacturer with a vision to revolutionize the industry.'
    },
    {
      year: '2010',
      title: 'First Smart Switch',
      description: 'Launched our first smart electrical switch, pioneering the smart home revolution in India.'
    },
    {
      year: '2015',
      title: 'National Expansion',
      description: 'Expanded operations across major Indian cities, establishing a strong distribution network.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched our online platform and mobile app, making our products accessible nationwide.'
    },
    {
      year: '2023',
      title: 'Innovation Leader',
      description: 'Became the leading innovator in smart electrical switches with cutting-edge technology.'
    }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'Visionary leader with 20+ years in electrical industry, passionate about innovation and quality.'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      description: 'Technology expert specializing in smart home solutions and IoT integration.'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Design',
      description: 'Creative designer focused on creating elegant and functional electrical solutions.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards.'
    },
    {
      icon: Heart,
      title: 'Customer Centric',
      description: 'Our customers are at the heart of everything we do. We listen, learn, and continuously improve based on their feedback.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly innovate to bring you the latest technology and features in electrical switches.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="about-title"
            >
              About <span className="gradient-text">Super Fin</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="about-subtitle"
            >
              We are passionate about creating innovative electrical solutions that enhance 
              your home and lifestyle with cutting-edge technology and elegant design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="about-story-text"
          >
            <motion.h2 
              variants={itemVariants}
              className="about-story-title"
            >
              Our Story
            </motion.h2>
            <div className="storycontent">
            <motion.p 
              variants={itemVariants}
              className="about-story-description"
            >
              We are proud to introduce Simoni Enterprises ,established in 2006, we are a top manufacturer of smart touch and modular switches, known for reliability, aesthetics, and technology. 
Based in Mumbai with a manufacturing unit in Vasai, we've completed over <span className='about-story-numbers'>50+</span> projects, partnered with <span className='about-story-numbers'>150+</span> dealers, and expanded to <span className='about-story-numbers'>100+</span> cities in <span className='about-story-numbers'>18+ years</span>. 
<br />
We provide innovative solutions for residential, commercial, and hospitality sectors and have received <span className='about-story-numbers'>5+</span> awards for our commitment to quality and customer satisfaction.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="about-story-features"
            >
              <div className="about-story-feature">
                <div className="about-story-feature-icon">
                  <Award className="w-6 h-6" />
                </div>
                <div className="about-story-feature-text">
                  <div className="about-story-feature-title">18+ Years Experience</div>
                  <div className="about-story-feature-description">Decades of expertise in electrical solutions</div>
                </div>
              </div>
              
              <div className="about-story-feature">
                <div className="about-story-feature-icon">
                  <Users className="w-6 h-6" />
                </div>
                <div className="about-story-feature-text">
                  <div className="about-story-feature-title">10,000+ Happy Customers</div>
                  <div className="about-story-feature-description">Trusted by families across India</div>
                </div>
              </div>
              
              <div className="about-story-feature">
                <div className="about-story-feature-icon">
                  <Building className="w-6 h-6" />
                </div>
                <div className="about-story-feature-text">
                  <div className="about-story-feature-title">100+ Cities Served</div>
                  <div className="about-story-feature-description">Nationwide presence and service</div>
                </div>
              </div>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="about-milestones">
        <div className="about-milestones-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="about-milestones-title"
            >
              Our Journey
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="about-milestones-subtitle"
            >
              Key milestones that shaped our company and the electrical industry
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="milestones-timeline"
            >
              {milestones.map((milestone, index) => (
                <div key={index} className="milestone-item">
                  <div className="milestone-content">
                    <h3 className="milestone-title">{milestone.title}</h3>
                    <p className="milestone-description">{milestone.description}</p>
                  <div className="milestone-year">{milestone.year}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="about-values-title"
            >
              Our Values
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="about-values-subtitle"
            >
              The principles that guide everything we do and every decision we make
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="values-grid"
            >
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="value-card"
                  >
                    <div className="value-icon">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutPage;