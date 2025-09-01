import Image from "next/image";
import Link from "next/link";
import { Shield, Globe, Zap, Lock, Server, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  const currentYear = new Date().getFullYear();
  
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
      <section className="bg-gradient-to-b from-primary-900 to-primary-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <AnimateOnScroll animation="fade-in-left" className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Secure & High Speed VPN Service</h1>
              <p className="text-lg md:text-xl mb-8">Protect your online privacy with military-grade encryption and access content worldwide.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="/register" 
                  className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/login" 
                  className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-center transition-colors"
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Why Choose Our VPN</h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="fade-in-up" 
                delay={index * 0.1}
              >
                <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-primary-600 dark:text-primary-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">Simple, Transparent Pricing</h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">No hidden fees, no complicated tiers</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <AnimateOnScroll animation="fade-in-up" delay={0.1}>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 flex flex-col bg-white dark:bg-gray-900 h-full hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">Basic</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">For casual users</p>
                <div className="text-4xl font-bold mb-1 dark:text-white">$4.99<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/mo</span></div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Billed monthly</p>
                
                <ul className="mb-8 flex-grow space-y-3 dark:text-gray-300">
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> 10 Server locations</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Connect 2 devices</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Standard speed</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Email support</li>
                </ul>
                
                <Link 
                  href="/register" 
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors w-full"
                >
                  Get Started
                </Link>
              </div>
            </AnimateOnScroll>
            
            {/* Premium Plan */}
            <AnimateOnScroll animation="fade-in-up" delay={0.2}>
              <div className="border-2 border-primary-500 rounded-lg p-8 flex flex-col relative shadow-lg bg-white dark:bg-gray-900 h-full hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 bg-primary-500 text-white py-1 px-4 text-sm font-bold rounded-bl-lg rounded-tr-lg">POPULAR</div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white">Premium</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">For regular users</p>
                <div className="text-4xl font-bold mb-1 dark:text-white">$9.99<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/mo</span></div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Billed monthly</p>
                
                <ul className="mb-8 flex-grow space-y-3 dark:text-gray-300">
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> 40+ Server locations</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Connect 5 devices</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> High speed</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> 24/7 support</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Ad blocker</li>
                </ul>
                
                <Link 
                  href="/register" 
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors w-full animate-pulse-slow"
                >
                  Get Started
                </Link>
              </div>
            </AnimateOnScroll>
            
            {/* Ultimate Plan */}
            <AnimateOnScroll animation="fade-in-up" delay={0.3}>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 flex flex-col bg-white dark:bg-gray-900 h-full hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">Ultimate</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">For power users</p>
                <div className="text-4xl font-bold mb-1 dark:text-white">$14.99<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/mo</span></div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Billed monthly</p>
                
                <ul className="mb-8 flex-grow space-y-3 dark:text-gray-300">
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> 60+ Server locations</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Connect 10 devices</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Ultra-fast speed</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Priority support</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Ad & malware blocker</li>
                  <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Dedicated IP option</li>
                </ul>
                
                <Link 
                  href="/register" 
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors w-full"
                >
                  Get Started
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your online presence?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of satisfied users who trust our VPN service for their privacy and security needs.</p>
            <Link 
              href="/register" 
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors animate-bounce-slow"
            >
              Get Started Today
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
