import mongoose, { Schema, Document } from "mongoose";

export interface IReply {
  message: string;
  offerAmount?: number;
  isFromAdmin: boolean;
  createdAt: Date;
  userId?: mongoose.Types.ObjectId;
  email?: string;
}

export interface IHourlyService extends Document {
  userId?: mongoose.Types.ObjectId;
  name: string;
  email?: string;
  description: string;
  hourlyRate: number;
  currency: "INR" | "USD" | "EUR";
  minimumHours: number;
  maximumHours?: number;
  availability: {
    startTime: Date;
    endTime: Date;
    timezone: string;
    daysAvailable: string[];
  };
  skills: string[];
  status: "available" | "busy" | "unavailable";
  replies: IReply[];
  rating: number;
  totalBookings: number;
  createdAt: Date;
  updatedAt: Date;
}

const replySchema = new Schema<IReply>({
  message: {
    type: String,
    required: [true, "Reply message is required"],
    trim: true,
    maxLength: [1000, "Reply cannot exceed 1000 characters"]
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
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  email: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const hourlyServiceSchema = new Schema<IHourlyService>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  email: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Service name is required"],
    trim: true,
    maxLength: [100, "Name cannot exceed 100 characters"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    maxLength: [500, "Description cannot exceed 500 characters"]
  },
  hourlyRate: {
    type: Number,
    required: [true, "Hourly rate is required"],
    min: [0, "Hourly rate cannot be negative"]
  },
  currency: {
    type: String,
    required: [true, "Currency is required"],
    enum: ["INR", "USD", "EUR"]
  },
  minimumHours: {
    type: Number,
    required: [true, "Minimum hours is required"],
    min: [1, "Minimum hours must be at least 1"]
  },
  maximumHours: {
    type: Number,
    min: [1, "Maximum hours must be at least 1"]
  },
  availability: {
    startTime: {
      type: Date,
      required: [true, "Start time is required"]
    },
    endTime: {
      type: Date,
      required: [true, "End time is required"]
    },
    timezone: {
      type: String,
      required: [true, "Timezone is required"]
    },
    daysAvailable: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }]
  },
  skills: [{
    type: String,
    required: true
  }],
  status: {
    type: String,
    enum: ["available", "busy", "unavailable"],
    default: "available"
  },
  replies: [replySchema],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalBookings: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

hourlyServiceSchema.pre('save', function(this: IHourlyService, next) {
  if (this.availability.endTime <= this.availability.startTime) {
    next(new Error('End time must be after start time'));
  }
  if (this.maximumHours && this.maximumHours < this.minimumHours) {
    next(new Error('Maximum hours must be greater than minimum hours'));
  }
  next();
});

hourlyServiceSchema.index({ userId: 1 });
hourlyServiceSchema.index({ status: 1 });
hourlyServiceSchema.index({ skills: 1 });

const HourlyService = mongoose.models.HourlyService || mongoose.model<IHourlyService>("HourlyService", hourlyServiceSchema);

export default HourlyService;
