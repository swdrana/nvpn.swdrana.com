'use client';

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Shield } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      service: ''
    });
    
    setIsSubmitting(false);
    alert('Message sent successfully! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "support@swdrana.com",
      description: "Send us an email anytime"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WeChat Support",
      details: "developerrana",
      description: "For বিকাশ, নগদ payments"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: "24/7 Available",
      description: "Round the clock support"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Reach",
      details: "Worldwide Service",
      description: "Serving clients globally"
    }
  ];

  const services = [
    { value: 'vpn', label: 'VPN Services' },
    { value: 'web', label: 'Web Development' },
    { value: 'digital', label: 'Digital Services' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond within 2-4 hours during business hours, and within 24 hours on weekends."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer refunds for our Starter VPN plan within the first month. Other services have specific refund policies."
    },
    {
      question: "Can I get a custom quote for my project?",
      answer: "Absolutely! Contact us with your requirements and we'll provide a detailed custom quote within 24 hours."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, we offer 24/7 customer support for all our premium services and priority support for enterprise clients."
    }
  ];

  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-content py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <AnimateOnScroll animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Get in touch with our team. We&apos;re here to help you with all your digital service needs.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">Get In Touch</h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="fade-in-up" 
                delay={index * 0.1}
              >
                <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="card-body p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {info.icon}
                    </div>
                    <h3 className="card-title text-lg font-bold mb-2 text-base-content justify-center">{info.title}</h3>
                    <p className="text-primary font-semibold mb-1">{info.details}</p>
                    <p className="text-base-content/70 text-sm">{info.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateOnScroll animation="fade-in-left">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8">
                  <h3 className="card-title text-2xl font-bold mb-6 text-base-content">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Name *</span>
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name" 
                          className="input input-bordered w-full focus:input-primary" 
                          required 
                        />
                      </div>
                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Email *</span>
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com" 
                          className="input input-bordered w-full focus:input-primary" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Service Interest</span>
                        </label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="select select-bordered w-full focus:select-primary"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Subject *</span>
                        </label>
                        <input 
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Brief subject of your message" 
                          className="input input-bordered w-full focus:input-primary" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Message *</span>
                      </label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements or questions..." 
                        className="textarea textarea-bordered h-32 w-full focus:textarea-primary" 
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn btn-primary w-full hover:scale-105 transition-transform"
                    >
                      {isSubmitting ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* FAQ Section */}
            <AnimateOnScroll animation="fade-in-right">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-base-content">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-100 shadow-lg">
                      <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                      <div className="collapse-title text-lg font-semibold text-base-content">
                        {faq.question}
                      </div>
                      <div className="collapse-content">
                        <p className="text-base-content/80">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Additional Contact Methods */}
                <div className="mt-8 p-6 bg-base-100 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold mb-4 text-base-content flex items-center">
                    <Shield className="mr-2 text-primary" size={24} />
                    Secure Communication
                  </h4>
                  <div className="space-y-3 text-base-content/80">
                    <p className="flex items-center">
                      <MessageCircle className="mr-2 text-primary" size={16} />
                      <strong>WeChat:</strong> developerrana (For বিকাশ, নগদ payments)
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-2 text-primary" size={16} />
                      <strong>Email:</strong> support@swdrana.com
                    </p>
                    <p className="text-sm text-base-content/60">
                      All communications are encrypted and secure. We respect your privacy and never share your information.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Don&apos;t wait! Contact us today and let&apos;s discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@swdrana.com" 
                className="btn btn-accent btn-lg hover:scale-105 transition-transform"
              >
                <Mail size={20} />
                Email Us Now
              </a>
              <a 
                href="#contact-form" 
                className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary hover:scale-105 transition-transform"
              >
                Fill Contact Form
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}