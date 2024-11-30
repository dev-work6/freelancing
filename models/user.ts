import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const availabilitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  availableHours: {
    type: Number,
    required: true,
    default: 10,
  },
  occupiedHours: {
    type: Number,
    default: 0,
  },
  bookings: [
    {
      clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      hours: Number,
      projectDescription: String,
    },
  ],
});

const userSchema = new mongoose.Schema({
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
  // Only for developers
  availability: [availabilitySchema],
  hourlyRate: {
    type: Number,
    default: 0,
  },
  expertise: {
    type: String,
    enum: ["Frontend", "Backend", "Full Stack"],
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to check password
userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to check availability for a date
userSchema.methods.checkAvailability = async function (date: Date) {
  const availability = this.availability.find(
    (a: any) => a.date.toDateString() === date.toDateString()
  );
  if (!availability) return 8; // Default available hours if no record
  return availability.availableHours - availability.occupiedHours;
};

// Method to book hours
userSchema.methods.bookHours = async function (
  date: Date,
  hours: number,
  clientId: string,
  description: string
) {
  const availability = this.availability.find(
    (a: any) => a.date.toDateString() === date.toDateString()
  );

  if (!availability) {
    this.availability.push({
      date,
      availableHours: 8,
      occupiedHours: hours,
      bookings: [
        {
          clientId,
          hours,
          projectDescription: description,
        },
      ],
    });
  } else {
    if (availability.availableHours - availability.occupiedHours < hours) {
      throw new Error("Not enough available hours for this date");
    }
    availability.occupiedHours += hours;
    availability.bookings.push({
      clientId,
      hours,
      projectDescription: description,
    });
  }

  await this.save();
};

export default mongoose.models.User || mongoose.model("User", userSchema);
