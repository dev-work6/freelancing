import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface IBooking {
  clientId: mongoose.Types.ObjectId;
  hours: number;
  email: string;
  startDate: Date;
  endDate: Date;
  projectDescription: string;
}

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: "user" | "admin" | "developer";
  createdAt: Date;
  bookings: IBooking[];
  hourlyRate: number;
  expertise?: "Frontend" | "Backend" | "Full Stack";
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  role: {
    type: String,
    enum: ["user", "admin", "developer"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bookings: [
    {
      clientId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      email: {
        type: String,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      hours: {
        type: Number,
        required: true,
      },
      projectDescription: {
        type: String,
        required: true,
      },
    },
  ],
  hourlyRate: {
    type: Number,
    default: 0,
  },
  expertise: {
    type: String,
    enum: ["Frontend", "Backend", "Full Stack"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
