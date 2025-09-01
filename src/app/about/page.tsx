'use client';

import Image from "next/image";
import Link from "next/link";
import { Users, Target, Award, Globe, Heart, Zap, Shield, Code } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Masud Rana",
      role: "Founder & CEO",
      description: "Passionate about creating digital solutions that make a difference.",
      expertise: ["Full-Stack Development", "Digital Strategy", "Team Leadership"]
    },
    {
      name: "Development Team",
      role: "Technical Experts",
      description: "Skilled developers dedicated to delivering high-quality solutions.",
      expertise: ["React/Next.js", "Node.js", "Mobile Development"]
    },
    {
      name: "Design Team",
      role: "Creative Minds",
      description: "UI/UX designers focused on creating beautiful user experiences.",
      expertise: ["UI/UX Design", "Brand Identity", "User Research"]
    }
  ];

  const values = [
    {
      icon: <Shield size={48} />,
      title: "Security First",
      description: "We prioritize the security and privacy of our clients' data in everything we do."
    },
    {
      icon: <Heart size={48} />,
      title: "Client-Centric",
      description: "Our clients' success is our success. We build lasting relationships based on trust."
    },
    {
      icon: <Zap size={48} />,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions."
    },
    {
      icon: <Globe size={48} />,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions and 24/7 support."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to provide secure digital solutions"
    },
    {
      year: "2021",
      title: "VPN Service Launch",
      description: "Launched our premium VPN service with global server network"
    },
    {
      year: "2022",
      title: "Web Development Expansion",
      description: "Expanded into professional web development services"
    },
    {
      year: "2023",
      title: "Digital Services Platform",
      description: "Launched comprehensive digital services marketplace"
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Serving thousands of satisfied customers worldwide"
    }
  ];

  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-content py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <AnimateOnScroll animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About swdRana</h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
                We are a digital service company committed to providing secure, innovative, and reliable solutions for businesses and individuals worldwide.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-in-left">
              <div>
                <div className="flex items-center mb-6">
                  <Target className="text-primary mr-4" size={48} />
                  <h2 className="text-3xl md:text-4xl font-bold text-base-content">Our Mission</h2>
                </div>
                <p className="text-lg text-base-content/80 mb-6">
                  To empower individuals and businesses with secure, innovative digital solutions that enhance their online presence and protect their digital assets.
                </p>
                <p className="text-base-content/70">
                  We believe in making advanced technology accessible to everyone, regardless of their technical expertise. Our mission is to bridge the gap between complex digital solutions and user-friendly experiences.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in-right">
              <div>
                <div className="flex items-center mb-6">
                  <Award className="text-secondary mr-4" size={48} />
                  <h2 className="text-3xl md:text-4xl font-bold text-base-content">Our Vision</h2>
                </div>
                <p className="text-lg text-base-content/80 mb-6">
                  To become the leading provider of comprehensive digital services, known for our commitment to security, innovation, and customer satisfaction.
                </p>
                <p className="text-base-content/70">
                  We envision a future where every business and individual has access to enterprise-level digital solutions that are both powerful and easy to use.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">Our Core Values</h2>
            <p className="text-xl text-center text-base-content/70 mb-12">The principles that guide everything we do</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="fade-in-up" 
                delay={index * 0.1}
              >
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="card-body p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="card-title text-xl font-bold mb-3 text-base-content justify-center">{value.title}</h3>
                    <p className="text-base-content/70">{value.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">Our Journey</h2>
            <p className="text-xl text-center text-base-content/70 mb-12">Key milestones in our growth story</p>
          </AnimateOnScroll>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimateOnScroll 
                  key={index} 
                  animation="fade-in-up" 
                  delay={index * 0.1}
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    <div className="lg:w-1/2">
                      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="card-body p-6">
                          <div className="flex items-center mb-4">
                            <div className="badge badge-primary text-white font-bold text-lg px-4 py-2">
                              {milestone.year}
                            </div>
                          </div>
                          <h3 className="card-title text-xl font-bold mb-2 text-base-content">{milestone.title}</h3>
                          <p className="text-base-content/70">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-base-100 shadow-lg"></div>
                    
                    <div className="lg:w-1/2"></div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">Meet Our Team</h2>
            <p className="text-xl text-center text-base-content/70 mb-12">The passionate people behind swdRana</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="fade-in-up" 
                delay={index * 0.1}
              >
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="card-body p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="text-white" size={32} />
                    </div>
                    <h3 className="card-title text-xl font-bold mb-2 text-base-content justify-center">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-base-content/70 mb-4">{member.description}</p>
                    <div className="space-y-1">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="badge badge-outline text-xs mr-1">{skill}</span>
                      ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of satisfied customers who trust swdRana for their digital needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn btn-accent btn-lg hover:scale-105 transition-transform"
              >
                Get In Touch
              </Link>
              <Link 
                href="/shop" 
                className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary hover:scale-105 transition-transform"
              >
                Explore Services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}