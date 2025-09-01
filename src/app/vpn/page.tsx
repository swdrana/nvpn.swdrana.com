'use client';

import Image from "next/image";
import Link from "next/link";
import { Shield, Globe, Zap, Lock, Server, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { vpnPlans, VPNPlan } from "@/data/vpnPlans";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function VPN() {
  const { data: session } = useSession();
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const handlePlanClick = (planId: string) => {
    if (session) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };
  
  // Feature cards data
  const features = [
    {
      icon: <Shield size={48} />,
      title: "Military-Grade Encryption",
      description: "Protect your data with AES-256 encryption, the same standard used by security experts worldwide."
    },
    {
      icon: <Globe size={48} />,
      title: "Global Server Network",
      description: "Access content from anywhere with our network of high-speed servers across 60+ countries."
    },
    {
      icon: <Zap size={48} />,
      title: "Lightning Fast Speeds",
      description: "Stream, download, and browse with no lag using our optimized server infrastructure."
    },
    {
      icon: <Lock size={48} />,
      title: "No-Logs Policy",
      description: "We never track, store, or share your online activities. Your privacy is guaranteed."
    },
    {
      icon: <Server size={48} />,
      title: "Multi-Device Support",
      description: "Connect up to 6 devices simultaneously with one account. Works on all major platforms."
    },
    {
      icon: <CheckCircle size={48} />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always available to help you with any questions."
    }
  ];
  
  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-content py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <AnimateOnScroll animation="fade-in-left" className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Secure & High Speed VPN Service</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">Protect your online privacy with military-grade encryption and access content worldwide.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => handlePlanClick('starter')}
                  className="btn btn-accent btn-lg hover:scale-105 transition-transform"
                >
                  Get Started
                </button>
                <Link 
                  href="/login" 
                  className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary hover:scale-105 transition-transform"
                >
                  Login
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-right" className="md:w-1/2">
              <div className="animate-float">
                <Image 
                  src="/globe.svg" 
                  alt="VPN Global Network" 
                  width={500} 
                  height={400} 
                  className="w-full max-w-lg mx-auto" 
                  priority 
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">Why Choose Our VPN</h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="fade-in-up" 
                delay={index * 0.1}
              >
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="card-body p-6">
                    <div className="text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="card-title text-xl font-bold mb-3 text-base-content">{feature.title}</h3>
                    <p className="text-base-content/70">{feature.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">Choose Your Perfect Plan</h2>
            <p className="text-xl text-center text-base-content/70 mb-12">Flexible pricing for every need</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {vpnPlans.map((plan, index) => (
              <AnimateOnScroll key={plan.id} animation="fade-in-up" delay={index * 0.1}>
                <div className={`card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full ${
                  plan.isPopular ? 'border-2 border-primary' : ''
                }`}>
                  {plan.badge && (
                    <div className="absolute top-4 right-4 badge badge-error text-white font-bold">
                      {plan.badge}
                    </div>
                  )}
                  {plan.isPopular && (
                    <div className="absolute top-4 left-4 badge badge-primary text-white font-bold">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="card-body p-6">
                    <h3 className="card-title text-2xl font-bold text-base-content mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {plan.currency}{plan.price.toFixed(2)}
                      <span className="text-lg font-normal text-base-content/60">/{plan.billing === 'Monthly' ? 'mo' : 'once'}</span>
                    </div>
                    <p className="text-sm text-base-content/60 mb-4">{plan.billing}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle size={16} className="text-success mr-2 flex-shrink-0" />
                        <span className="text-base-content">{plan.traffic}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle size={16} className="text-success mr-2 flex-shrink-0" />
                        <span className="text-base-content">{plan.devices}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle size={16} className="text-success mr-2 flex-shrink-0" />
                        <span className="text-base-content">{plan.speed}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-base-content mb-2">Servers:</p>
                      <div className="flex flex-wrap gap-1">
                        {plan.servers.map((server, idx) => (
                          <span key={idx} className="badge badge-outline text-xs">{server}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-base-content mb-2">Features:</p>
                      <ul className="space-y-1">
                        {plan.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-xs">
                            <CheckCircle size={12} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-base-content/80">{feature}</span>
                          </li>
                        ))}
                        {plan.features.length > 4 && (
                          <li className="text-xs text-base-content/60">+{plan.features.length - 4} more features</li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="card-actions justify-end mt-auto">
                      <button 
                        onClick={() => handlePlanClick(plan.id)}
                        className={`btn w-full ${
                          plan.isPopular 
                            ? 'btn-primary animate-pulse' 
                            : 'btn-outline btn-primary'
                        } hover:scale-105 transition-transform`}
                      >
                        {session ? 'Go to Dashboard' : 'Get Started'}
                      </button>
                    </div>
                    
                    {!plan.isRefundable && (
                      <p className="text-xs text-error text-center mt-2">‼️ Non Refundable 💰</p>
                    )}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your online presence?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">Join thousands of satisfied users who trust our VPN service for their privacy and security needs.</p>
            <button 
              onClick={() => handlePlanClick('general')}
              className="btn btn-accent btn-lg hover:scale-110 transition-transform animate-bounce-slow"
            >
              Get Started Today
            </button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}