'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Mail, Phone, MapPin, Download, Code, Briefcase, GraduationCap, Award, Star, Calendar, Eye } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='ecomGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#667eea;stop-opacity:1' /><stop offset='100%' style='stop-color:#764ba2;stop-opacity:1' /></linearGradient></defs><rect width='400' height='200' fill='url(#ecomGrad)'/><rect x='50' y='50' width='300' height='100' fill='white' opacity='0.9' rx='10'/><rect x='70' y='70' width='60' height='60' fill='#667eea' rx='5'/><rect x='150' y='80' width='120' height='15' fill='#764ba2' rx='3'/><rect x='150' y='105' width='80' height='15' fill='#667eea' rx='3'/><text x='200' y='180' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>E-commerce</text></svg>",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/masudrana/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "VPN Management Dashboard",
      description: "A comprehensive VPN management system with real-time monitoring, user management, and analytics. Built with React and Node.js with WebSocket integration.",
      image: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='vpnDashGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#4facfe;stop-opacity:1' /><stop offset='100%' style='stop-color:#00f2fe;stop-opacity:1' /></linearGradient></defs><rect width='400' height='200' fill='url(#vpnDashGrad)'/><circle cx='100' cy='100' r='25' fill='white' opacity='0.9'/><circle cx='200' cy='100' r='25' fill='white' opacity='0.9'/><circle cx='300' cy='100' r='25' fill='white' opacity='0.9'/><path d='M125 100 L175 100' stroke='white' stroke-width='3'/><path d='M225 100 L275 100' stroke='white' stroke-width='3'/><text x='200' y='170' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>VPN Dashboard</text></svg>",
      technologies: ["React", "Node.js", "Socket.io", "Chart.js", "PostgreSQL"],
      liveUrl: "https://vpn-dashboard.com",
      githubUrl: "https://github.com/masudrana/vpn-dashboard",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark/light mode, animations, and optimized performance.",
      image: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='portfolioGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#ff6b6b;stop-opacity:1' /><stop offset='100%' style='stop-color:#feca57;stop-opacity:1' /></linearGradient></defs><rect width='400' height='200' fill='url(#portfolioGrad)'/><rect x='80' y='60' width='240' height='80' fill='white' opacity='0.9' rx='10'/><rect x='100' y='80' width='40' height='40' fill='#ff6b6b' rx='5'/><rect x='160' y='85' width='120' height='10' fill='#feca57' rx='2'/><rect x='160' y='105' width='80' height='10' fill='#ff6b6b' rx='2'/><text x='200' y='170' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>Portfolio</text></svg>",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://masudrana.dev",
      githubUrl: "https://github.com/masudrana/portfolio",
      featured: false
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      image: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='taskGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#11998e;stop-opacity:1' /><stop offset='100%' style='stop-color:#38bdf8;stop-opacity:1' /></linearGradient></defs><rect width='400' height='200' fill='url(#taskGrad)'/><rect x='60' y='40' width='280' height='120' fill='white' opacity='0.9' rx='10'/><rect x='80' y='60' width='240' height='15' fill='#11998e' rx='3'/><rect x='80' y='85' width='200' height='15' fill='#38bdf8' rx='3'/><rect x='80' y='110' width='180' height='15' fill='#11998e' rx='3'/><rect x='80' y='135' width='220' height='15' fill='#38bdf8' rx='3'/><text x='200' y='185' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>Task Manager</text></svg>",
      technologies: ["React", "Express.js", "Socket.io", "MongoDB", "JWT"],
      liveUrl: "https://taskmanager.com",
      githubUrl: "https://github.com/masudrana/task-manager",
      featured: false
    }
  ];

  const skills = [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "Vue.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Express.js", level: 88, category: "Backend" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "AWS", level: 70, category: "DevOps" }
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead development of web applications using React, Next.js, and Node.js. Managed a team of 5 developers and implemented CI/CD pipelines.",
      achievements: [
        "Increased application performance by 40%",
        "Led migration to microservices architecture",
        "Implemented automated testing reducing bugs by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Specialized in e-commerce and business applications.",
      achievements: [
        "Delivered 15+ successful projects",
        "Improved client satisfaction by 35%",
        "Reduced development time by 25%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Built responsive web applications and collaborated with design teams to create user-friendly interfaces.",
      achievements: [
        "Implemented responsive design system",
        "Optimized loading times by 50%",
        "Contributed to 200% user growth"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      grade: "CGPA: 3.8/4.0"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      period: "2019",
      grade: "Certificate of Excellence"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-2022-001"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MDB-DEV-2021-001"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute top-32 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="fade-in-up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-base-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">MR</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-base-content">
                Masud Rana
              </h1>
              
              <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                Senior Full Stack Developer
              </p>
              
              <p className="text-lg text-base-content/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                Passionate about creating innovative web solutions with modern technologies. 
                Specialized in React, Next.js, Node.js, and cloud technologies with 5+ years of experience.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-base-content/60">
                  <MapPin className="w-4 h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 text-base-content/60">
                  <Mail className="w-4 h-4" />
                  <span>masud@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-base-content/60">
                  <Phone className="w-4 h-4" />
                  <span>+880 1234 567890</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-primary btn-lg">
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
                <Link href="#contact" className="btn btn-outline btn-lg">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'projects', label: 'Projects', icon: Briefcase },
              { id: 'skills', label: 'Skills', icon: Code },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'certifications', label: 'Certifications', icon: Award }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`btn btn-sm md:btn-md ${
                  activeTab === id ? 'btn-primary' : 'btn-ghost'
                } transition-all duration-300`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Projects */}
          {activeTab === 'projects' && (
            <AnimateOnScroll animation="fade-in-up">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
                  Featured Projects
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <AnimateOnScroll key={project.id} animation="fade-in-up" delay={index * 0.1}>
                      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <figure className="h-48">
                          <div 
                            className="w-full h-full"
                            dangerouslySetInnerHTML={{ __html: project.image }}
                          />
                        </figure>
                        <div className="card-body">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="card-title text-xl">{project.title}</h3>
                            {project.featured && (
                              <div className="badge badge-primary badge-sm">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </div>
                            )}
                          </div>
                          
                          <p className="text-base-content/80 mb-4">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, idx) => (
                              <span key={idx} className="badge badge-outline badge-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="card-actions justify-end">
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="btn btn-primary btn-sm"
                            >
                              <Eye className="w-4 h-4" />
                              Live Demo
                            </a>
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="btn btn-outline btn-sm"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          )}

          {/* Skills */}
          {activeTab === 'skills' && (
            <AnimateOnScroll animation="fade-in-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
                  Technical Skills
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {['Frontend', 'Backend', 'Database', 'DevOps'].map((category) => (
                    <div key={category} className="card bg-base-200 shadow-lg">
                      <div className="card-body">
                        <h3 className="card-title text-xl mb-4">{category}</h3>
                        <div className="space-y-4">
                          {skills
                            .filter(skill => skill.category === category)
                            .map((skill, index) => (
                              <div key={skill.name}>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">{skill.name}</span>
                                  <span className="text-sm text-base-content/60">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-base-300 rounded-full h-2">
                                  <div 
                                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          )}

          {/* Experience */}
          {activeTab === 'experience' && (
            <AnimateOnScroll animation="fade-in-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
                  Work Experience
                </h2>
                
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
                      <div className="card bg-base-200 shadow-lg">
                        <div className="card-body">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="card-title text-xl">{exp.title}</h3>
                              <p className="text-primary font-semibold">{exp.company}</p>
                            </div>
                            <div className="flex items-center gap-2 text-base-content/60">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          
                          <p className="text-base-content/80 mb-4">
                            {exp.description}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Key Achievements:</h4>
                            <ul className="list-disc list-inside space-y-1 text-base-content/80">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <AnimateOnScroll animation="fade-in-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
                  Education
                </h2>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
                      <div className="card bg-base-200 shadow-lg">
                        <div className="card-body">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="card-title text-xl">{edu.degree}</h3>
                              <p className="text-primary font-semibold">{edu.institution}</p>
                              <p className="text-base-content/60">{edu.grade}</p>
                            </div>
                            <div className="flex items-center gap-2 text-base-content/60">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          )}

          {/* Certifications */}
          {activeTab === 'certifications' && (
            <AnimateOnScroll animation="fade-in-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
                  Certifications
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 0.1}>
                      <div className="card bg-base-200 shadow-lg">
                        <div className="card-body">
                          <div className="flex items-start justify-between mb-2">
                            <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div className="flex items-center gap-2 text-base-content/60">
                              <Calendar className="w-4 h-4" />
                              <span>{cert.date}</span>
                            </div>
                          </div>
                          
                          <h3 className="card-title text-lg">{cert.name}</h3>
                          <p className="text-primary font-semibold">{cert.issuer}</p>
                          <p className="text-sm text-base-content/60">ID: {cert.credentialId}</p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-base-content">
                Let's Work Together
              </h2>
              
              <p className="text-lg text-base-content/80 mb-8">
                I&apos;m always interested in new opportunities and exciting projects. 
                Let&apos;s discuss how we can bring your ideas to life.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:masud@example.com" 
                  className="btn btn-primary btn-lg"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <a 
                  href="https://github.com/masudrana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/masudrana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;