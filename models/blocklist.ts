import mongoose from "mongoose";

const blocklistSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    reason: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
    blockedAt: {
      type: Date,
      default: Date.now
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Blocklist = mongoose.models.Blocklist || mongoose.model("Blocklist", blocklistSchema);

export default Blocklist;
