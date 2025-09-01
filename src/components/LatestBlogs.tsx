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
            <article key={blog.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="mb-4">
                <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {blog.title}
              </h3>
              
              <p className="text-white/70 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-white/60 text-sm">
                  <Calendar size={16} className="mr-2" />
                  {new Date(blog.date).toLocaleDateString()}
                </div>
                
                <Link 
                  href={`/blogs/${blog.id}`}
                  className="flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blogs"
            className="inline-flex items-center bg-accent hover:bg-accent/90 text-accent-content font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View All Posts
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}