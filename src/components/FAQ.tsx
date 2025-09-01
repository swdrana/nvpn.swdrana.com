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
            <div key={index} className="mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-white" size={24} />
                  ) : (
                    <ChevronDown className="text-white" size={24} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}