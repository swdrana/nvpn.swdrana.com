import mongoose from 'mongoose';

const WebsiteContentSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true // e.g., 'nav.home', 'nav.about', 'home.hero.title'
  },
  content: {
    en: { type: String, required: true },
    bn: { type: String, required: true }
  },
  category: {
    type: String,
    required: true,
    enum: ['navigation', 'home', 'about', 'contact', 'services', 'portfolio', 'blog', 'footer', 'avatar', 'common']
  },
  description: {
    type: String,
    required: false // Optional description for admin reference
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for faster queries
WebsiteContentSchema.index({ key: 1 });
WebsiteContentSchema.index({ category: 1 });
WebsiteContentSchema.index({ isActive: 1 });

export default mongoose.models.WebsiteContent || mongoose.model('WebsiteContent', WebsiteContentSchema);