import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service", 
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    stripeSessionId: {
      type: String,
      required: true,
      unique: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerAddress: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      default: "inr",
    },
    paymentMethod: {
      type: String,
      default: "card",
    },
    metadata: {
      type: Map,
      of: String,
      default: {},
    },
    errorCode: {
      type: String,
    },
    errorMessage: {
      type: String,  
    },
    shipping: {
      name: String,
      address: {
        line1: String,
        country: {
          type: String,
          default: "IN"
        }
      }
    }
  },
  { timestamps: true }
);

// Static method to update payment status
paymentSchema.statics.updatePaymentStatus = async function(sessionId: string, status: string) {
  return this.findOneAndUpdate(
    { stripeSessionId: sessionId },
    { paymentStatus: status },
    { new: true }
  );
};

const Payment = 
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;

export const updatePaymentStatus = async (sessionId: string, status: string) => {
  return await (Payment as any).updatePaymentStatus(sessionId, status);
};
