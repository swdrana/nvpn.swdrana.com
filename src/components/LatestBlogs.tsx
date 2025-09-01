import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function LatestBlogs() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 VPN Security Features You Need to Know",
      excerpt: "Discover the essential security features that make a VPN truly secure and protect your online privacy.",
      date: "2024-01-15",
      category: "VPN Security"
    },
    {
      id: 2,
      title: "Modern Web Development Trends in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development this year.",
      date: "2024-01-10",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Building Scalable Digital Products: A Complete Guide",
      excerpt: "Learn how to create digital products that can grow with your business and handle increasing user demands.",
      date: "2024-01-05",
      category: "Digital Products"
    }
  ];

  return (
    <section className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-white/80">
            Stay updated with the latest insights and tips from our experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} className="block">
              <article className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group cursor-pointer">
                <div className="mb-6">
                  <span className="inline-block bg-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm border border-cyan-400/30">
                    {blog.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-white/80 mb-6 line-clamp-3 text-lg leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center text-white/70 text-sm">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mr-3">
                      <Calendar size={16} className="text-cyan-300" />
                    </div>
                    <span className="font-medium">{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center bg-cyan-400/20 group-hover:bg-cyan-400/30 text-cyan-300 group-hover:text-white font-bold px-4 py-2 rounded-full text-sm transition-all duration-300 backdrop-blur-sm border border-cyan-400/30 group-hover:border-cyan-400/50">
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/blogs"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold py-4 px-10 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            View All Posts
            <ArrowRight size={20} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}