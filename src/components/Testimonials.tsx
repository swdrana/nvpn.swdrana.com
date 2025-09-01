import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Rahman",
      role: "Business Owner",
      content: "swdRana provided excellent VPN services that helped secure our business operations. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Freelancer",
      content: "Their web development team created an amazing website for my business. Professional and reliable service.",
      rating: 5
    },
    {
      name: "Mohammad Ali",
      role: "Startup Founder",
      content: "Outstanding digital solutions and 24/7 support. They truly understand client needs and deliver quality work.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-white/80">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-white/80 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-white/60 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}