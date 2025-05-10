"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { ShopProvider } from '../context/ShopContext';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ShopProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="order">Order Status</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    required
                  />
                </div>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                    Something went wrong. Please try again later.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <section className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Phone",
                      info: "+91 9307598638",
                      icon: <FaPhone className="text-2xl text-accent" />,
                      link: "tel:+919307598638"
                    },
                    {
                      title: "WhatsApp",
                      info: "+91 9307598638",
                      icon: <FaWhatsapp className="text-2xl text-green-500" />,
                      link: "https://wa.me/919307598638"
                    },
                    {
                      title: "Email",
                      info: "support@shopify.com",
                      icon: <FaEnvelope className="text-2xl text-accent" />,
                      link: "mailto:support@shopify.com"
                    },
                    {
                      title: "Address",
                      info: "Greater Noida West, Uttar Pradesh, India",
                      icon: <FaMapMarkerAlt className="text-2xl text-accent" />,
                      link: "https://maps.google.com"
                    },
                    {
                      title: "Working Hours",
                      info: "Mon - Sat: 9:00 AM - 8:00 PM",
                      icon: <FaClock className="text-2xl text-accent" />,
                      link: null
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-600 hover:text-accent transition-colors"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.info}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "What are your shipping times?",
                      answer: "We typically ship within 1-2 business days. Domestic orders arrive in 3-5 business days."
                    },
                    {
                      question: "What is your return policy?",
                      answer: "We accept returns within 30 days of delivery. Items must be unused and in original packaging."
                    },
                    {
                      question: "Do you ship internationally?",
                      answer: "Yes, we ship to most countries. International shipping typically takes 7-14 business days."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </ShopProvider>
  );
} 