import Link from "next/link";
import { Shield, Code, Headphones, Smartphone, Clock } from "lucide-react";
import AboutUs from "@/components/AboutUs";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import { AppleSection } from "@/components/ScrollEffects";
import FAQ from "@/components/FAQ";
import LatestBlogs from "@/components/LatestBlogs";

export default function Home() {
  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure VPN",
      description: "Premium VPN services for secure browsing"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Dev",
      description: "Professional web development solutions"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Digital Service",
      description: "Comprehensive digital solutions"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 text-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-white/10 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
            <Shield className="w-12 h-12" />
          </div>
          <div className="absolute top-32 right-20 text-white/10 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}>
            <Code className="w-16 h-16" />
          </div>
          <div className="absolute bottom-40 left-1/4 text-white/10 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}>
            <Smartphone className="w-10 h-10" />
          </div>
          <div className="absolute top-1/3 right-10 text-white/10 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}>
            <Clock className="w-14 h-14" />
          </div>
          <div className="absolute bottom-20 right-1/3 text-white/10 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}>
            <Headphones className="w-12 h-12" />
          </div>
          <div className="absolute top-1/2 left-20 text-white/10 animate-pulse" style={{animationDelay: '2.5s', animationDuration: '3s'}}>
            <Shield className="w-8 h-8" />
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 py-20">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">swdRana</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto drop-shadow-lg">
              Your Trusted Digital Service Partner
            </p>
            <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto opacity-90">
              We provide premium VPN services, professional web development, and innovative digital products to empower your digital journey.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/vpn" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Explore VPN
            </Link>
            <Link 
              href="/web" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Web Services
            </Link>
          </div>

          {/* Services Grid in Hero */}
          <div className="max-w-xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl aspect-square flex flex-col justify-center">
                      <div className="text-cyan-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                      <p className="text-white/80 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <AboutUs />
      </section>

      {/* Statistics Section */}
      <section className="bg-white dark:bg-gray-900">
        <Statistics />
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 dark:bg-gray-800">
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900">
        <FAQ />
      </section>

      {/* Latest Blogs Section */}
      <section className="bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-pink-900/90 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
        <LatestBlogs />
      </section>
    </div>
  );
}
