import mongoose, { Schema, Document } from "mongoose";

interface IReply {
  message: string;
  offerAmount?: number;
  isFromAdmin: boolean;
  createdAt: Date;
}

interface INegotiation extends Document {
  service: Schema.Types.ObjectId;
  name: string;
  email: string;
  phone?: string;
  budget: number;
  message: string;
  status: "pending" | "negotiating" | "accepted" | "rejected" | "completed";
  replies: IReply[];
  createdAt: Date;
  updatedAt: Date;
  finalAmount?: number;
  currency: "INR" | "USD" | "EUR";
}

const replySchema = new Schema<IReply>({
  message: {
    type: String,
    required: [true, "Reply message is required"],
    trim: true
  },
  offerAmount: {
    type: Number,
    min: [0, "Offer amount cannot be negative"]
  },
  isFromAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const negotiationSchema = new Schema<INegotiation>({
  service: {
    type: Schema.Types.ObjectId,
    ref: "Service",
    required: [true, "Service ID is required"]
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  budget: {
    type: Number,
    required: [true, "Budget is required"],
    min: [0, "Budget cannot be negative"]
  },
  currency: {
    type: String,
    required: [true, "Currency is required"],
    enum: ["INR", "USD", "EUR"]
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    minlength: [10, "Message must be at least 10 characters long"]
  },
  status: {
    type: String,
    enum: ["pending", "negotiating", "accepted", "rejected", "completed"],
    default: "pending"
  },
  replies: [replySchema],
  finalAmount: {
    type: Number,
    min: [0, "Final amount cannot be negative"]
  }
}, {
  timestamps: true
});

const Negotiation = mongoose.models.Negotiation || mongoose.model<INegotiation>("Negotiation", negotiationSchema);

export default Negotiation;
