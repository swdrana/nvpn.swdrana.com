import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Rahman",
      role: "Business Owner",
      content: "swdRana provided excellent VPN services that helped secure our business operations. Highly recommended!",
      rating: 5,
      gradient: "from-purple-600 to-purple-800"
    },
    {
      name: "Sarah Johnson",
      role: "Freelancer",
      content: "Their web development team created an amazing website for my business. Professional and reliable service.",
      rating: 5,
      gradient: "from-pink-600 to-pink-800"
    },
    {
      name: "Mohammad Ali",
      role: "Startup Founder",
      content: "Outstanding digital solutions and 24/7 support. They truly understand client needs and deliver quality work.",
      rating: 5,
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">What Our Clients Say</h2>
          <p className="text-xl text-white/90 drop-shadow-md">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-white/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" size={20} />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic leading-relaxed text-lg">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-cyan-400 text-lg">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}