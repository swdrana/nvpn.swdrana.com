import mongoose from 'mongoose';

const LanguageSettingsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // For guest users, we'll use sessionId
  },
  sessionId: {
    type: String,
    required: false // For guest users
  },
  language: {
    type: String,
    required: true,
    enum: ['en', 'bn'],
    default: 'en'
  },
  ipAddress: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

// Index for faster queries
LanguageSettingsSchema.index({ userId: 1 });
LanguageSettingsSchema.index({ sessionId: 1 });
LanguageSettingsSchema.index({ ipAddress: 1 });

export default mongoose.models.LanguageSettings || mongoose.model('LanguageSettings', LanguageSettingsSchema);