'use client';

import Image from "next/image";
import Link from "next/link";
import { Shield, Palette, Brain, Play, Globe, Star, CheckCircle, Crown, Zap } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DigitalShop() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleServiceClick = (serviceType: string) => {
    if (session) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  // Digital services data
  const digitalServices = [
    {
      id: 'vpn',
      name: 'Premium VPN',
      icon: <Shield size={48} />,
      description: 'Secure your internet connection with our premium VPN service',
      price: '¥10-30',
      period: '/month',
      features: [
        'Military-grade encryption',
        'Global server network',
        'No-logs policy',
        'Multi-device support',
        '24/7 customer support'
      ],
      isPopular: true,
      badge: 'Most Popular',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'canva',
      name: 'Canva Pro',
      icon: <Palette size={48} />,
      description: 'Professional design tools for creating stunning visuals',
      price: '¥45',
      period: '/month',
      features: [
        'Premium templates',
        'Brand kit access',
        'Background remover',
        'Magic resize',
        'Team collaboration'
      ],
      isPopular: false,
      badge: '',
      color: 'from-pink-500 to-orange-500'
    },
    {
      id: 'gemini',
      name: 'Google Gemini Pro',
      icon: <Brain size={48} />,
      description: 'Advanced AI assistant for productivity and creativity',
      price: '¥65',
      period: '/month',
      features: [
        'Advanced AI capabilities',
        'Code generation',
        'Document analysis',
        'Image understanding',
        'Priority access'
      ],
      isPopular: false,
      badge: 'New',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'youtube',
      name: 'YouTube Premium',
      icon: <Play size={48} />,
      description: 'Ad-free YouTube experience with exclusive features',
      price: '¥35',
      period: '/month',
      features: [
        'Ad-free videos',
        'Background play',
        'YouTube Music included',
        'Offline downloads',
        'YouTube Originals'
      ],
      isPopular: false,
      badge: '',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'netflix',
      name: 'Netflix Premium',
      icon: <Play size={48} />,
      description: 'Stream unlimited movies and TV shows in 4K',
      price: '¥55',
      period: '/month',
      features: [
        '4K Ultra HD streaming',
        'Multiple device access',
        'Offline downloads',
        'No ads',
        'Exclusive content'
      ],
      isPopular: false,
      badge: '',
      color: 'from-red-600 to-black'
    },
    {
      id: 'spotify',
      name: 'Spotify Premium',
      icon: <Play size={48} />,
      description: 'Unlimited music streaming with premium features',
      price: '¥30',
      period: '/month',
      features: [
        'Ad-free music',
        'Offline downloads',
        'High-quality audio',
        'Unlimited skips',
        'Podcast access'
      ],
      isPopular: false,
      badge: '',
      color: 'from-green-600 to-green-800'
    }
  ];

  // Bundle packages
  const bundles = [
    {
      name: 'Starter Bundle',
      price: '¥80',
      originalPrice: '¥100',
      period: '/month',
      description: 'Perfect for individuals',
      services: ['VPN Premium', 'YouTube Premium'],
      savings: '20%',
      isPopular: false
    },
    {
      name: 'Professional Bundle',
      price: '¥150',
      originalPrice: '¥200',
      period: '/month',
      description: 'Ideal for professionals',
      services: ['VPN Premium', 'Canva Pro', 'Gemini Pro'],
      savings: '25%',
      isPopular: true
    },
    {
      name: 'Ultimate Bundle',
      price: '¥220',
      originalPrice: '¥300',
      period: '/month',
      description: 'Everything you need',
      services: ['All Services Included'],
      savings: '27%',
      isPopular: false
    }
  ];

  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-content py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <AnimateOnScroll animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Services Shop</h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Discover premium digital services and subscriptions to enhance your digital lifestyle
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleServiceClick('browse')}
                  className="btn btn-accent btn-lg hover:scale-105 transition-transform"
                >
                  Browse Services
                </button>
                <Link 
                  href="#bundles" 
                  className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary hover:scale-105 transition-transform"
                >
                  View Bundles
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">Premium Digital Services</h2>
            <p className="text-xl text-center text-base-content/70 mb-12">Choose from our curated selection of premium subscriptions</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <AnimateOnScroll 
                key={service.id} 
                animation="fade-in-up" 
                delay={index * 0.1}
              >
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}></div>
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className={`absolute top-4 right-4 badge ${
                      service.isPopular ? 'badge-primary' : 'badge-secondary'
                    } text-white font-bold z-10`}>
                      {service.badge}
                    </div>
                  )}
                  
                  <div className="card-body p-6 relative z-10">
                    <div className="text-primary mb-4">
                      {service.icon}
                    </div>
                    
                    <h3 className="card-title text-xl font-bold mb-2 text-base-content">{service.name}</h3>
                    
                    <div className="flex items-baseline mb-3">
                      <span className="text-3xl font-bold text-primary">{service.price}</span>
                      <span className="text-sm text-base-content/60 ml-1">{service.period}</span>
                    </div>
                    
                    <p className="text-base-content/70 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle size={16} className="text-success mr-2 flex-shrink-0" />
                          <span className="text-base-content">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="card-actions justify-end mt-auto">
                      <button 
                        onClick={() => handleServiceClick(service.id)}
                        className={`btn w-full ${
                          service.isPopular 
                            ? 'btn-primary animate-pulse' 
                            : 'btn-outline btn-primary'
                        } hover:scale-105 transition-transform`}
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section id="bundles" className="py-16 bg-base-100">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">Bundle Packages</h2>
            <p className="text-xl text-center text-base-content/70 mb-12">Save more with our specially curated bundles</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bundles.map((bundle, index) => (
              <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
                <div className={`card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full relative ${
                  bundle.isPopular ? 'border-2 border-primary scale-105' : ''
                }`}>
                  {bundle.isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="badge badge-primary text-white font-bold px-4 py-2">
                        <Crown size={16} className="mr-1" />
                        BEST VALUE
                      </div>
                    </div>
                  )}
                  
                  <div className="card-body p-6">
                    <h3 className="card-title text-2xl font-bold text-base-content mb-2">{bundle.name}</h3>
                    
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-primary">{bundle.price}</span>
                      <span className="text-lg text-base-content/50 line-through ml-2">{bundle.originalPrice}</span>
                      <span className="text-sm text-base-content/60 ml-1">{bundle.period}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Zap size={16} className="text-warning mr-1" />
                      <span className="text-success font-bold">Save {bundle.savings}</span>
                    </div>
                    
                    <p className="text-sm text-base-content/60 mb-6">{bundle.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-base-content">Includes:</h4>
                      {bundle.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle size={16} className="text-success mr-2 flex-shrink-0" />
                          <span className="text-base-content">{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="card-actions justify-end mt-auto">
                      <button 
                        onClick={() => handleServiceClick('bundle')}
                        className={`btn w-full ${
                          bundle.isPopular 
                            ? 'btn-primary animate-pulse' 
                            : 'btn-outline btn-primary'
                        } hover:scale-105 transition-transform`}
                      >
                        Get Bundle
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">Why Choose swdRana?</h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield size={32} />,
                title: 'Secure & Reliable',
                description: 'All services are verified and secure'
              },
              {
                icon: <Star size={32} />,
                title: 'Premium Quality',
                description: 'Only the best digital services'
              },
              {
                icon: <Zap size={32} />,
                title: 'Instant Activation',
                description: 'Get access immediately after purchase'
              },
              {
                icon: <Globe size={32} />,
                title: '24/7 Support',
                description: 'Round-the-clock customer assistance'
              }
            ].map((feature, index) => (
              <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-base-content">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Digital Life?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of satisfied customers and get access to premium digital services today.
            </p>
            <button 
              onClick={() => handleServiceClick('cta')}
              className="btn btn-accent btn-lg hover:scale-110 transition-transform animate-bounce-slow"
            >
              Start Shopping Now
            </button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}