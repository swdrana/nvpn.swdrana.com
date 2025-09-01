'use client';

import Image from "next/image";
import Link from "next/link";
import { Code, Palette, Smartphone, Globe, Zap, Users, CheckCircle, Star } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function WebDevelopment() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleContactClick = () => {
    if (session) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  // Services data
  const services = [
    {
      icon: <Globe size={48} />,
      title: "Website Development",
      description: "Custom websites built with modern technologies like React, Next.js, and Node.js for optimal performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"]
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      features: ["React Native", "Flutter", "Native iOS/Android", "Cross-platform"]
    },
    {
      icon: <Code size={48} />,
      title: "Backend Development",
      description: "Robust server-side solutions with APIs, databases, and cloud integration for scalable applications.",
      features: ["REST APIs", "Database Design", "Cloud Integration", "Security"]
    },
    {
      icon: <Palette size={48} />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed to enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: <Zap size={48} />,
      title: "Performance Optimization",
      description: "Speed up your existing websites and applications with advanced optimization techniques.",
      features: ["Code Optimization", "Image Compression", "Caching", "CDN Setup"]
    },
    {
      icon: <Users size={48} />,
      title: "Consultation & Support",
      description: "Expert advice and ongoing support to help you make the right technology decisions.",
      features: ["Technical Consultation", "24/7 Support", "Maintenance", "Updates"]
    }
  ];

  // Portfolio/testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      comment: "Exceptional work! Our website performance improved by 300% and user engagement doubled."
    },
    {
      name: "Ahmed Rahman",
      company: "Digital Solutions",
      rating: 5,
      comment: "Professional team with excellent communication. Delivered exactly what we needed on time."
    },
    {
      name: "Emily Chen",
      company: "E-commerce Plus",
      rating: 5,
      comment: "Outstanding mobile app development. Our sales increased by 150% after the app launch."
    }
  ];

  // Pricing packages
  const packages = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small businesses",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month support",
        "Mobile responsive design"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      description: "Ideal for growing businesses",
      features: [
        "10-page custom website",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "3 months support",
        "Performance optimization"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Database integration",
        "API development",
        "6 months support",
        "Advanced security features"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-content py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <AnimateOnScroll animation="fade-in-left" className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Web Development Services</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">Transform your ideas into powerful digital solutions with our expert web development team.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={handleContactClick}
                  className="btn btn-accent btn-lg hover:scale-105 transition-transform"
                >
                  Start Your Project
                </button>
                <Link 
                  href="#portfolio" 
                  className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary hover:scale-105 transition-transform"
                >
                  View Portfolio
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-right" className="md:w-1/2">
              <div className="animate-float">
                <div className="mockup-code bg-base-100 text-base-content">
                  <pre data-prefix="1"><code>{`const website = {`}</code></pre>
                  <pre data-prefix="2"><code>{`  design: 'modern',`}</code></pre>
                  <pre data-prefix="3"><code>{`  performance: 'optimized',`}</code></pre>
                  <pre data-prefix="4"><code>{`  responsive: true,`}</code></pre>
                  <pre data-prefix="5"><code>{`  seo: 'enhanced'`}</code></pre>
                  <pre data-prefix="6"><code>{`};`}</code></pre>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">Our Services</h2>
            <p className="text-xl text-center text-base-content/70 mb-12">Comprehensive web development solutions for your business</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="fade-in-up" 
                delay={index * 0.1}
              >
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="card-body p-6">
                    <div className="text-primary mb-4">
                      {service.icon}
                    </div>
                    <h3 className="card-title text-xl font-bold mb-3 text-base-content">{service.title}</h3>
                    <p className="text-base-content/70 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle size={16} className="text-success mr-2 flex-shrink-0" />
                          <span className="text-base-content">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">Transparent Pricing</h2>
            <p className="text-xl text-center text-base-content/70 mb-12">Choose the package that fits your needs</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
                <div className={`card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full ${
                  pkg.isPopular ? 'border-2 border-primary' : ''
                }`}>
                  {pkg.isPopular && (
                    <div className="absolute top-4 left-4 badge badge-primary text-white font-bold">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="card-body p-6">
                    <h3 className="card-title text-2xl font-bold text-base-content mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {pkg.price}
                    </div>
                    <p className="text-sm text-base-content/60 mb-6">{pkg.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle size={16} className="text-success mr-2 flex-shrink-0" />
                          <span className="text-base-content">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="card-actions justify-end mt-auto">
                      <button 
                        onClick={handleContactClick}
                        className={`btn w-full ${
                          pkg.isPopular 
                            ? 'btn-primary animate-pulse' 
                            : 'btn-outline btn-primary'
                        } hover:scale-105 transition-transform`}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="portfolio" className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">What Our Clients Say</h2>
            <p className="text-xl text-center text-base-content/70 mb-12">Real feedback from satisfied customers</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="card-body p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-warning fill-current" />
                      ))}
                    </div>
                    <p className="text-base-content/80 mb-4 italic">&quot;{testimonial.comment}&quot;</p>
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-base-content">{testimonial.name}</h4>
                      <p className="text-sm text-base-content/60">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">Let&apos;s discuss your project and turn your vision into reality with our expert development team.</p>
            <button 
              onClick={handleContactClick}
              className="btn btn-accent btn-lg hover:scale-110 transition-transform animate-bounce-slow"
            >
              Start Your Project Today
            </button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}