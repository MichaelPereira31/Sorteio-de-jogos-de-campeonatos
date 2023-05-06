import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  trainer: {
    type: String,
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
  nameLogo: {
    type: String,
    required: true,
  },
  srcLogo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Team = mongoose.model('Team', TeamSchema);
