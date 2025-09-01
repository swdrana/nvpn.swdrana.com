"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What VPN services do you offer?",
      answer: "We provide premium VPN services with high-speed servers, military-grade encryption, and 24/7 support to ensure your online privacy and security."
    },
    {
      question: "How long does web development take?",
      answer: "Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex applications may take 4-8 weeks. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 technical support and maintenance services for all our clients to ensure optimal performance of your digital solutions."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern technologies including React, Next.js, Node.js, MongoDB, and other cutting-edge tools to build scalable and efficient solutions."
    },
    {
      question: "How secure are your services?",
      answer: "Security is our top priority. We implement industry-standard security measures, encryption protocols, and regular security audits to protect your data."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/80">
            Find answers to common questions about our services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15">
                <button
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-300 group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-white font-bold text-xl group-hover:text-cyan-300 transition-colors">{faq.question}</span>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-cyan-400/20 transition-all duration-300">
                    {openIndex === index ? (
                      <ChevronUp className="text-white group-hover:text-cyan-300" size={24} />
                    ) : (
                      <ChevronDown className="text-white group-hover:text-cyan-300" size={24} />
                    )}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8 border-t border-white/10">
                    <div className="pt-6">
                      <p className="text-white/90 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}