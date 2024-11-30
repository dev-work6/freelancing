import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,  
    },
  },
  { timestamps: true }
);

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
