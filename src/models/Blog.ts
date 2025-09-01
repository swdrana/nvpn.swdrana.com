import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    bn: { type: String, required: true }
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  excerpt: {
    en: { type: String, required: true },
    bn: { type: String, required: true }
  },
  content: {
    en: { type: String, required: true },
    bn: { type: String, required: true }
  },
  featuredImage: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true,
    enum: ['tech', 'web', 'vpn', 'digital']
  },
  tags: [{
    en: String,
    bn: String
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  published: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date,
    default: null
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  readTime: {
    type: Number, // in minutes
    required: true
  }
}, {
  timestamps: true
});

// Create slug from title before saving
BlogSchema.pre('save', function(next) {
  if (this.isModified('title.en') && !this.slug && this.title?.en) {
    this.slug = this.title.en
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Update publishedAt when published status changes
BlogSchema.pre('save', function(next) {
  if (this.isModified('published') && this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);