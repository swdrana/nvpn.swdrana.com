import { Users, Target, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/10 dark:to-pink-900/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a dedicated team of professionals committed to providing exceptional digital services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 border border-purple-200/50 dark:border-purple-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="mx-auto mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our skilled professionals bring years of experience in web development and digital solutions
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 border border-pink-200/50 dark:border-pink-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Target className="mx-auto mb-4 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To empower businesses and individuals with cutting-edge digital solutions and secure services
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 border border-purple-200/50 dark:border-purple-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Award className="mx-auto mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize quality and customer satisfaction in every project we undertake
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}