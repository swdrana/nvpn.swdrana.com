const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/swdrana';

async function createDemoBlogs() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db();
    const blogsCollection = db.collection('blogs');
    const usersCollection = db.collection('users');
    
    // Find or create a demo user
    let user = await usersCollection.findOne({ email: 'demo@example.com' });
    if (!user) {
      const userResult = await usersCollection.insertOne({
        name: 'Demo User',
        email: 'demo@example.com',
        password: 'hashedpassword',
        createdAt: new Date(),
        updatedAt: new Date()
      });
      user = { _id: userResult.insertedId };
    }
    
    // Demo blogs with markdown content
    const demoBlogs = [
      {
        title: {
          en: "Getting Started with Next.js 14: A Complete Guide",
          bn: "Next.js 14 দিয়ে শুরু করা: একটি সম্পূর্ণ গাইড"
        },
        slug: "getting-started-nextjs-14-complete-guide",
        excerpt: {
          en: "Learn how to build modern web applications with Next.js 14, including new features and best practices.",
          bn: "Next.js 14 দিয়ে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করতে শিখুন, নতুন ফিচার এবং সেরা অনুশীলন সহ।"
        },
        content: {
          en: `# Getting Started with Next.js 14

## Introduction

Next.js 14 brings exciting new features and improvements that make building React applications even more powerful and efficient. In this comprehensive guide, we will explore the key features and learn how to build modern web applications.

## What's New in Next.js 14?

### App Router Enhancements

The App Router has been significantly improved with better performance and new capabilities:

- **Improved Performance**: Faster page loads and better optimization
- **Enhanced Routing**: More flexible routing options
- **Better SEO**: Improved search engine optimization features

### Server Components

Server Components allow you to render components on the server, reducing the JavaScript bundle size and improving performance:

\`\`\`jsx
// Example of a Server Component
export default async function BlogPost({ params }) {
  const post = await fetchPost(params.id);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

## Getting Started

### Installation

To create a new Next.js 14 project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

### Project Structure

A typical Next.js 14 project structure looks like this:

\`\`\`
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
└── next.config.js
\`\`\`

## Best Practices

1. **Use TypeScript**: Always use TypeScript for better type safety
2. **Optimize Images**: Use Next.js Image component for better performance
3. **Implement SEO**: Use metadata API for better search engine optimization
4. **Code Splitting**: Leverage automatic code splitting features

## Conclusion

Next.js 14 is a powerful framework that makes building React applications easier and more efficient. With its new features and improvements, you can create fast, scalable, and SEO-friendly web applications.

Start building your next project with Next.js 14 today!`,
          bn: `# Next.js 14 দিয়ে শুরু করা

## ভূমিকা

Next.js 14 নতুন এবং উত্তেজনাপূর্ণ ফিচার নিয়ে এসেছে যা React অ্যাপ্লিকেশন তৈরি করাকে আরও শক্তিশালী এবং দক্ষ করে তুলেছে। এই বিস্তৃত গাইডে, আমরা মূল ফিচারগুলি অন্বেষণ করব এবং আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করতে শিখব।

## Next.js 14 এ নতুন কী আছে?

### App Router উন্নতি

App Router উল্লেখযোগ্যভাবে উন্নত হয়েছে আরও ভাল পারফরম্যান্স এবং নতুন ক্ষমতা সহ:

- **উন্নত পারফরম্যান্স**: দ্রুত পেজ লোড এবং ভাল অপ্টিমাইজেশন
- **উন্নত রাউটিং**: আরও নমনীয় রাউটিং অপশন
- **ভাল SEO**: উন্নত সার্চ ইঞ্জিন অপ্টিমাইজেশন ফিচার

### সার্ভার কম্পোনেন্ট

সার্ভার কম্পোনেন্ট আপনাকে সার্ভারে কম্পোনেন্ট রেন্ডার করতে দেয়, JavaScript বান্ডল সাইজ কমায় এবং পারফরম্যান্স উন্নত করে।

## শুরু করা

### ইনস্টলেশন

একটি নতুন Next.js 14 প্রজেক্ট তৈরি করতে, চালান:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## সেরা অনুশীলন

1. **TypeScript ব্যবহার করুন**: ভাল টাইপ সেফটির জন্য সবসময় TypeScript ব্যবহার করুন
2. **ইমেজ অপ্টিমাইজ করুন**: ভাল পারফরম্যান্সের জন্য Next.js Image কম্পোনেন্ট ব্যবহার করুন
3. **SEO বাস্তবায়ন করুন**: ভাল সার্চ ইঞ্জিন অপ্টিমাইজেশনের জন্য metadata API ব্যবহার করুন

## উপসংহার

Next.js 14 একটি শক্তিশালী ফ্রেমওয়ার্ক যা React অ্যাপ্লিকেশন তৈরি করাকে সহজ এবং আরও দক্ষ করে তোলে। আজই Next.js 14 দিয়ে আপনার পরবর্তী প্রজেক্ট তৈরি করা শুরু করুন!`
        },
        category: "technology",
        tags: ["nextjs", "react", "web development", "javascript", "typescript"],
        featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
        author: user._id,
        published: true,
        publishedAt: new Date(),
        views: 150,
        likes: 25,
        readTime: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: {
          en: "Mastering React Hooks: Advanced Patterns and Best Practices",
          bn: "React Hooks এ দক্ষতা অর্জন: উন্নত প্যাটার্ন এবং সেরা অনুশীলন"
        },
        slug: "mastering-react-hooks-advanced-patterns",
        excerpt: {
          en: "Dive deep into React Hooks with advanced patterns, custom hooks, and performance optimization techniques.",
          bn: "উন্নত প্যাটার্ন, কাস্টম হুক এবং পারফরম্যান্স অপ্টিমাইজেশন কৌশল সহ React Hooks এ গভীরভাবে ডুব দিন।"
        },
        content: {
          en: `# Mastering React Hooks: Advanced Patterns and Best Practices

## Introduction

React Hooks have revolutionized how we write React components. In this comprehensive guide, we'll explore advanced patterns and best practices that will take your React skills to the next level.

## Advanced Hook Patterns

### Custom Hooks for Data Fetching

Create reusable data fetching logic with custom hooks:

\`\`\`jsx
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
\`\`\`

### useReducer for Complex State

When state logic becomes complex, useReducer is your friend:

\`\`\`jsx
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
    </div>
  );
}
\`\`\`

## Performance Optimization

### useMemo and useCallback

Optimize expensive calculations and prevent unnecessary re-renders:

\`\`\`jsx
function ExpensiveComponent({ items, filter }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  const handleClick = useCallback((id) => {
    // Handle click logic
  }, []);

  return (
    <div>
      {filteredItems.map(item => (
        <Item key={item.id} item={item} onClick={handleClick} />
      ))}
    </div>
  );
}
\`\`\`

## Best Practices

1. **Keep Hooks at the Top Level**: Never call hooks inside loops, conditions, or nested functions
2. **Use Custom Hooks for Reusable Logic**: Extract common stateful logic into custom hooks
3. **Optimize with useMemo and useCallback**: But don't overuse them
4. **Use useReducer for Complex State**: When useState becomes unwieldy

## Conclusion

Mastering React Hooks requires understanding both the fundamentals and advanced patterns. With these techniques, you can write more maintainable and performant React applications.`,
          bn: `# React Hooks এ দক্ষতা অর্জন: উন্নত প্যাটার্ন এবং সেরা অনুশীলন

## ভূমিকা

React Hooks আমাদের React কম্পোনেন্ট লেখার পদ্ধতিতে বিপ্লব এনেছে। এই বিস্তৃত গাইডে, আমরা উন্নত প্যাটার্ন এবং সেরা অনুশীলনগুলি অন্বেষণ করব যা আপনার React দক্ষতাকে পরবর্তী স্তরে নিয়ে যাবে।

## উন্নত হুক প্যাটার্ন

### ডেটা ফেচিংয়ের জন্য কাস্টম হুক

কাস্টম হুক দিয়ে পুনর্ব্যবহারযোগ্য ডেটা ফেচিং লজিক তৈরি করুন।

### জটিল স্টেটের জন্য useReducer

যখন স্টেট লজিক জটিল হয়ে যায়, useReducer আপনার বন্ধু।

## পারফরম্যান্স অপ্টিমাইজেশন

### useMemo এবং useCallback

ব্যয়বহুল গণনা অপ্টিমাইজ করুন এবং অপ্রয়োজনীয় রি-রেন্ডার প্রতিরোধ করুন।

## সেরা অনুশীলন

1. **হুকগুলি টপ লেভেলে রাখুন**: লুপ, শর্ত বা নেস্টেড ফাংশনের ভিতরে কখনও হুক কল করবেন না
2. **পুনর্ব্যবহারযোগ্য লজিকের জন্য কাস্টম হুক ব্যবহার করুন**
3. **useMemo এবং useCallback দিয়ে অপ্টিমাইজ করুন**: তবে অতিরিক্ত ব্যবহার করবেন না

## উপসংহার

React Hooks এ দক্ষতা অর্জনের জন্য মৌলিক বিষয় এবং উন্নত প্যাটার্ন উভয়ই বোঝা প্রয়োজন। এই কৌশলগুলির সাথে, আপনি আরও রক্ষণাবেক্ষণযোগ্য এবং কার্যকর React অ্যাপ্লিকেশন লিখতে পারেন।`
        },
        category: "technology",
        tags: ["react", "hooks", "javascript", "frontend", "performance"],
        featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        author: user._id,
        published: true,
        publishedAt: new Date(Date.now() - 86400000), // 1 day ago
        views: 89,
        likes: 12,
        readTime: 6,
        createdAt: new Date(Date.now() - 86400000),
        updatedAt: new Date(Date.now() - 86400000)
      },
      {
        title: {
          en: "Building Scalable Web Applications with MongoDB and Node.js",
          bn: "MongoDB এবং Node.js দিয়ে স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরি করা"
        },
        slug: "building-scalable-web-applications-mongodb-nodejs",
        excerpt: {
          en: "Learn how to build robust and scalable web applications using MongoDB and Node.js with best practices and real-world examples.",
          bn: "সেরা অনুশীলন এবং বাস্তব-বিশ্বের উদাহরণ সহ MongoDB এবং Node.js ব্যবহার করে শক্তিশালী এবং স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরি করতে শিখুন।"
        },
        content: {
          en: `# Building Scalable Web Applications with MongoDB and Node.js

## Introduction

Building scalable web applications requires careful consideration of your technology stack. MongoDB and Node.js form a powerful combination that can handle high-traffic applications with ease.

## Why MongoDB and Node.js?

### MongoDB Benefits

- **Flexible Schema**: Adapt to changing requirements easily
- **Horizontal Scaling**: Scale across multiple servers
- **Rich Query Language**: Powerful querying capabilities
- **JSON-like Documents**: Natural fit for JavaScript applications

### Node.js Advantages

- **Non-blocking I/O**: Handle thousands of concurrent connections
- **JavaScript Everywhere**: Same language for frontend and backend
- **NPM Ecosystem**: Vast library of packages
- **Fast Development**: Rapid prototyping and development

## Setting Up Your Environment

### Installing Dependencies

\`\`\`bash
npm init -y
npm install express mongoose dotenv cors helmet
npm install -D nodemon
\`\`\`

### Basic Server Setup

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Database Design Patterns

### Schema Design

\`\`\`javascript
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, {
  timestamps: true
});
\`\`\`

## Performance Optimization

### Indexing Strategies

\`\`\`javascript
// Create indexes for better query performance
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.index({ 'profile.firstName': 1, 'profile.lastName': 1 });
\`\`\`

### Connection Pooling

\`\`\`javascript
mongoose.connect(process.env.MONGODB_URI, {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
});
\`\`\`

## Best Practices

1. **Use Environment Variables**: Keep sensitive data secure
2. **Implement Proper Error Handling**: Graceful error management
3. **Add Input Validation**: Validate all user inputs
4. **Use Middleware**: Modular and reusable code
5. **Monitor Performance**: Track application metrics

## Conclusion

MongoDB and Node.js provide a solid foundation for building scalable web applications. By following best practices and understanding the strengths of each technology, you can create robust applications that grow with your needs.`,
          bn: `# MongoDB এবং Node.js দিয়ে স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরি করা

## ভূমিকা

স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরি করার জন্য আপনার প্রযুক্তি স্ট্যাকের সতর্ক বিবেচনা প্রয়োজন। MongoDB এবং Node.js একটি শক্তিশালী সমন্বয় তৈরি করে যা সহজেই উচ্চ-ট্রাফিক অ্যাপ্লিকেশনগুলি পরিচালনা করতে পারে।

## কেন MongoDB এবং Node.js?

### MongoDB এর সুবিধা

- **নমনীয় স্কিমা**: পরিবর্তনশীল প্রয়োজনীয়তার সাথে সহজে মানিয়ে নিন
- **হরিজন্টাল স্কেলিং**: একাধিক সার্ভার জুড়ে স্কেল করুন
- **সমৃদ্ধ কোয়েরি ভাষা**: শক্তিশালী কোয়েরি ক্ষমতা
- **JSON-এর মতো ডকুমেন্ট**: JavaScript অ্যাপ্লিকেশনের জন্য প্রাকৃতিক ফিট

### Node.js এর সুবিধা

- **নন-ব্লকিং I/O**: হাজার হাজার সমসাময়িক সংযোগ পরিচালনা করুন
- **সর্বত্র JavaScript**: ফ্রন্টএন্ড এবং ব্যাকএন্ডের জন্য একই ভাষা
- **NPM ইকোসিস্টেম**: প্যাকেজের বিশাল লাইব্রেরি
- **দ্রুত ডেভেলপমেন্ট**: দ্রুত প্রোটোটাইপিং এবং ডেভেলপমেন্ট

## আপনার পরিবেশ সেট আপ করা

### নির্ভরতা ইনস্টল করা

\`\`\`bash
npm init -y
npm install express mongoose dotenv cors helmet
npm install -D nodemon
\`\`\`

## ডেটাবেস ডিজাইন প্যাটার্ন

### স্কিমা ডিজাইন

সঠিক স্কিমা ডিজাইন আপনার অ্যাপ্লিকেশনের পারফরম্যান্স এবং স্কেলেবিলিটির জন্য গুরুত্বপূর্ণ।

## পারফরম্যান্স অপ্টিমাইজেশন

### ইনডেক্সিং কৌশল

ভাল কোয়েরি পারফরম্যান্সের জন্য ইনডেক্স তৈরি করুন।

## সেরা অনুশীলন

1. **এনভায়রনমেন্ট ভেরিয়েবল ব্যবহার করুন**: সংবেদনশীল ডেটা নিরাপদ রাখুন
2. **সঠিক এরর হ্যান্ডলিং বাস্তবায়ন করুন**: করুণাময় এরর ম্যানেজমেন্ট
3. **ইনপুট ভ্যালিডেশন যোগ করুন**: সমস্ত ব্যবহারকারীর ইনপুট যাচাই করুন

## উপসংহার

MongoDB এবং Node.js স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরির জন্য একটি শক্ত ভিত্তি প্রদান করে। সেরা অনুশীলন অনুসরণ করে এবং প্রতিটি প্রযুক্তির শক্তি বুঝে, আপনি শক্তিশালী অ্যাপ্লিকেশন তৈরি করতে পারেন যা আপনার প্রয়োজনের সাথে বৃদ্ধি পায়।`
        },
        category: "technology",
        tags: ["mongodb", "nodejs", "backend", "database", "scalability"],
        featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        author: user._id,
        published: true,
        publishedAt: new Date(Date.now() - 172800000), // 2 days ago
        views: 234,
        likes: 45,
        readTime: 10,
        createdAt: new Date(Date.now() - 172800000),
        updatedAt: new Date(Date.now() - 172800000)
      }
    ];
    
    // Insert demo blogs
    const result = await blogsCollection.insertMany(demoBlogs);
    console.log(`${result.insertedCount} demo blogs created successfully!`);
    
    // Display created blogs
    const createdBlogs = await blogsCollection.find({}).toArray();
    console.log('\nCreated blogs:');
    createdBlogs.forEach(blog => {
      console.log(`- ${blog.title.en} (${blog.slug})`);
    });
    
  } catch (error) {
    console.error('Error creating demo blogs:', error);
  } finally {
    await client.close();
  }
}

createDemoBlogs();