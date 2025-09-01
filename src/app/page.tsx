import Link from "next/link";
import { Shield, Code, Settings, Clock } from "lucide-react";
import AboutUs from "@/components/AboutUs";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LatestBlogs from "@/components/LatestBlogs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Hero Section */}
      <section className="text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">swdRana</h1>
          <p className="text-2xl mb-4">Your Trusted Digital Service Partner</p>
          <p className="text-lg mb-8 max-w-4xl mx-auto">
            We provide premium VPN services, professional web development, and 
            innovative digital products to empower your digital journey.
          </p>
          <div className="flex gap-4 justify-center mb-4">
            <Link href="/vpn" className="bg-accent hover:bg-accent/90 text-accent-content font-bold py-3 px-8 rounded-lg text-lg">
              Explore VPN
            </Link>
            <Link href="/web" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg border border-white/20 text-lg backdrop-blur-sm">
              Web Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center text-white">
                  <Settings className="mx-auto mb-2 text-white" size={32} />
                  <h3 className="text-sm font-bold">Digital Service</h3>
                </div>
                
                <div className="text-center text-white">
                  <Clock className="mx-auto mb-2 text-white" size={32} />
                  <h3 className="text-sm font-bold">24/7 Support</h3>
                </div>
                
                <div className="text-center text-white">
                  <Shield className="mx-auto mb-2 text-white" size={32} />
                  <h3 className="text-sm font-bold">Secure VPN</h3>
                </div>
                
                <div className="text-center text-white">
                  <Code className="mx-auto mb-2 text-white" size={32} />
                  <h3 className="text-sm font-bold">Web Dev</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Statistics Section */}
      <Statistics />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Latest Blog Posts Section */}
      <LatestBlogs />
    </div>
  );
}
