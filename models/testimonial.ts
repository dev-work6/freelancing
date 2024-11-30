import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
  },
  { timestamps: true }
);

const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
