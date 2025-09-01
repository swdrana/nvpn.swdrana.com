import { Users, Target, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We are a dedicated team of professionals committed to providing exceptional digital services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Users className="mx-auto mb-4 text-accent" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-white/70">
                Our skilled professionals bring years of experience in web development and digital solutions
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Target className="mx-auto mb-4 text-accent" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-white/70">
                To empower businesses and individuals with cutting-edge digital solutions and secure services
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Award className="mx-auto mb-4 text-accent" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">Quality First</h3>
              <p className="text-white/70">
                We prioritize quality and customer satisfaction in every project we undertake
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}