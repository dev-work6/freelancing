import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB(): Promise<typeof mongoose> {
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectDB;
