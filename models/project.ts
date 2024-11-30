import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientFeedback: {
    type: String,
  },
  image: {
    type: String,  
  },
}, { timestamps: true });

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
