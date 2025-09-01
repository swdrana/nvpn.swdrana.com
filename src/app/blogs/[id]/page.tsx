'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

// Sample blog data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: '1',
    title: "The Ultimate Guide to VPN Security in 2024",
    excerpt: "Learn about the latest VPN technologies and how to choose the right VPN service for maximum security and privacy protection.",
    content: "In today's digital landscape, VPN security has become more crucial than ever. With increasing cyber threats and privacy concerns, understanding how VPNs work and choosing the right service can make the difference between secure browsing and potential data breaches.\n\n## What is a VPN?\n\nA Virtual Private Network (VPN) creates a secure, encrypted connection between your device and a remote server operated by a VPN service. This encrypted tunnel ensures that all data passing between your device and the internet is protected from prying eyes.\n\n## Key VPN Security Features\n\n### 1. Encryption Protocols\nModern VPNs use advanced encryption protocols like:\n- **AES-256**: Military-grade encryption standard\n- **ChaCha20**: Fast and secure for mobile devices\n- **OpenVPN**: Open-source and highly secure\n- **WireGuard**: Next-generation protocol with improved performance\n\n### 2. No-Logs Policy\nA strict no-logs policy ensures that your VPN provider doesn't store:\n- Browsing history\n- Connection timestamps\n- IP addresses\n- DNS queries\n\n### 3. Kill Switch\nThis critical feature automatically disconnects your internet if the VPN connection drops, preventing data leaks.\n\n## Choosing the Right VPN\n\nWhen selecting a VPN service, consider:\n\n1. **Security Features**: Look for strong encryption, secure protocols, and additional security features\n2. **Privacy Policy**: Ensure the provider has a verified no-logs policy\n3. **Server Network**: A large network of servers provides better performance and options\n4. **Speed**: Choose a VPN that doesn't significantly impact your internet speed\n5. **Device Support**: Ensure compatibility with all your devices\n\n## Best Practices for VPN Usage\n\n- Always keep your VPN software updated\n- Use strong, unique passwords for your VPN account\n- Enable two-factor authentication when available\n- Regularly review your VPN's privacy policy\n- Test for DNS leaks periodically\n\n## Conclusion\n\nVPN security is not just about hiding your IP address—it's about comprehensive protection of your digital privacy. By understanding the key features and following best practices, you can ensure that your VPN provides the security and privacy you need in 2024 and beyond.\n\nRemember, the best VPN is one that fits your specific needs while providing robust security features and maintaining your privacy.",
    author: "Masud Rana",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "VPN",
    tags: ["VPN", "Security", "Privacy", "Cybersecurity"],
    featured: true,
    image: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='vpnGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#667eea;stop-opacity:1' /><stop offset='100%' style='stop-color:#764ba2;stop-opacity:1' /></linearGradient></defs><rect width='400' height='200' fill='url(#vpnGrad)'/><circle cx='100' cy='100' r='30' fill='white' opacity='0.9'/><circle cx='300' cy='100' r='30' fill='white' opacity='0.9'/><path d='M130 100 L270 100' stroke='white' stroke-width='4' stroke-dasharray='10,5'/><text x='200' y='160' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>VPN Security</text></svg>"
  },
  {
    id: '2',
    title: "Modern Web Development Trends 2024",
    excerpt: "Explore the latest trends in web development including AI integration, serverless architecture, and progressive web apps.",
    content: "Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. In 2024, several key trends are shaping the future of web development.\n\n## AI-Powered Development\n\nArtificial Intelligence is revolutionizing how we build web applications:\n- **Code Generation**: AI tools can generate boilerplate code and suggest optimizations\n- **Automated Testing**: AI-driven testing tools can identify bugs and performance issues\n- **User Experience**: Personalized content delivery based on user behavior\n\n## Serverless Architecture\n\nServerless computing offers numerous benefits:\n- **Cost Efficiency**: Pay only for what you use\n- **Scalability**: Automatic scaling based on demand\n- **Reduced Maintenance**: No server management required\n\n## Progressive Web Apps (PWAs)\n\nPWAs bridge the gap between web and mobile apps:\n- **Offline Functionality**: Work without internet connection\n- **Push Notifications**: Engage users like native apps\n- **App-like Experience**: Fast loading and smooth interactions\n\n## WebAssembly (WASM)\n\nWebAssembly enables high-performance web applications:\n- **Near-native Performance**: Execute code at near-native speed\n- **Language Flexibility**: Write in C++, Rust, or other languages\n- **Browser Compatibility**: Supported by all major browsers\n\n## Conclusion\n\nStaying updated with these trends is crucial for modern web developers. Embracing these technologies can lead to more efficient, scalable, and user-friendly web applications.",
    author: "Masud Rana",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["Web Development", "AI", "Serverless", "PWA"],
    featured: true,
    image: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='webGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#4facfe;stop-opacity:1' /><stop offset='100%' style='stop-color:#00f2fe;stop-opacity:1' /></linearGradient></defs><rect width='400' height='200' fill='url(#webGrad)'/><rect x='50' y='50' width='300' height='100' fill='white' opacity='0.9' rx='10'/><rect x='70' y='70' width='80' height='20' fill='#4facfe' rx='5'/><rect x='70' y='100' width='120' height='15' fill='#00f2fe' rx='3'/><rect x='70' y='120' width='100' height='15' fill='#4facfe' rx='3'/><text x='200' y='170' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>Web Development</text></svg>"
  },
  {
    id: '3',
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Essential cybersecurity measures every small business should implement to protect against cyber threats and data breaches.",
    content: "Small businesses are increasingly becoming targets for cybercriminals. Implementing proper cybersecurity measures is no longer optional—it's essential for business survival.\n\n## Common Cyber Threats\n\nSmall businesses face various cyber threats:\n- **Phishing Attacks**: Fraudulent emails designed to steal credentials\n- **Ransomware**: Malicious software that encrypts business data\n- **Data Breaches**: Unauthorized access to sensitive information\n- **Social Engineering**: Manipulation tactics to gain unauthorized access\n\n## Essential Security Measures\n\n### 1. Employee Training\n- Regular cybersecurity awareness training\n- Phishing simulation exercises\n- Clear security policies and procedures\n\n### 2. Strong Password Policies\n- Require complex passwords\n- Implement multi-factor authentication\n- Use password managers\n\n### 3. Regular Software Updates\n- Keep operating systems updated\n- Install security patches promptly\n- Use reputable antivirus software\n\n### 4. Data Backup and Recovery\n- Regular automated backups\n- Test backup restoration procedures\n- Store backups in multiple locations\n\n### 5. Network Security\n- Use firewalls and intrusion detection systems\n- Secure Wi-Fi networks\n- Implement VPN for remote access\n\n## Incident Response Plan\n\nPrepare for potential security incidents:\n1. **Detection**: Identify security breaches quickly\n2. **Containment**: Limit the scope of the incident\n3. **Recovery**: Restore normal operations\n4. **Lessons Learned**: Improve security measures\n\n## Conclusion\n\nCybersecurity is an ongoing process, not a one-time setup. Small businesses must stay vigilant and continuously update their security measures to protect against evolving threats.",
    author: "Masud Rana",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Cybersecurity",
    tags: ["Cybersecurity", "Small Business", "Security", "Data Protection"],
    featured: false,
    image: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='secGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#ff6b6b;stop-opacity:1' /><stop offset='100%' style='stop-color:#feca57;stop-opacity:1' /></linearGradient></defs><rect width='400' height='200' fill='url(#secGrad)'/><rect x='150' y='60' width='100' height='80' fill='white' opacity='0.9' rx='10'/><circle cx='200' cy='85' r='8' fill='#ff6b6b'/><rect x='185' y='100' width='30' height='25' fill='#ff6b6b' rx='3'/><text x='200' y='170' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>Cybersecurity</text></svg>"
  }
];

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  // Parse content for better rendering
  const parseContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-base-content mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-base-content mt-6 mb-3">
            {line.replace('### ', '')}
          </h3>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-base-content/80 mb-2 ml-4">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (line.match(/^\d+\. /)) {
        return (
          <li key={index} className="text-base-content/80 mb-2 ml-4 list-decimal">
            {line.replace(/^\d+\. /, '')}
          </li>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p key={index} className="text-base-content/80 mb-4 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-focus mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="badge badge-primary badge-lg">{post.category}</span>
              <div className="flex items-center gap-4 text-base-content/60">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-base-content/80 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="container mx-auto px-4 -mt-10 relative z-10">
          <div className="max-w-4xl mx-auto">
            <figure className="rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="w-full h-64 md:h-96"
                dangerouslySetInnerHTML={{ __html: post.image }}
              />
            </figure>
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div className="text-base-content">
              {parseContent(post.content)}
            </div>
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-base-300">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-base-content/60" />
              <span className="font-semibold text-base-content">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="badge badge-outline badge-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-base-content mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blogs/${relatedPost.id}`}>
                    <div className="card bg-base-200 hover:bg-base-300 transition-all duration-300 cursor-pointer group">
                      {relatedPost.image && (
                        <figure className="h-48">
                          <div 
                            className="w-full h-full"
                            dangerouslySetInnerHTML={{ __html: relatedPost.image }}
                          />
                        </figure>
                      )}
                      <div className="card-body p-6">
                        <div className="badge badge-primary badge-sm mb-2">
                          {relatedPost.category}
                        </div>
                        <h3 className="card-title text-lg group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-base-content/70 text-sm line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-4 text-xs text-base-content/60">
                          <span>{relatedPost.author}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}