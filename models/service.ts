import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 1000,
    },
    shortDescription: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 200,
    },
    category: [{
      type: String,
      required: true,
      enum: [
        "Web Development",
        "Mobile Development",
        "Cloud Services", 
        "DevOps",
        "Consulting",
        "Support",
        "Other",
        "UI/UX Design",
        "API Development",
        "Database Design", 
        "System Architecture",
        "Security Services",
        "Testing & QA",
        "AI/ML Development",
        "Blockchain Development",
        "IoT Solutions",
        "E-commerce Development",
        "CMS Development",
        "Technical Writing",
        "Code Review",
        "Performance Optimization",
        "Legacy System Migration",
        "Email Server Setup",
        "Domain Management",
        "Web Hosting",
        "SSL Certificates",
        "DNS Management",
        "Server Administration",
        "Backup Solutions",
        "Load Balancing",
        "CDN Setup",
        "Database Administration"
      ],
    }],
    features: [{
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      included: {
        type: Boolean,
        default: true,
      }
    }],
    pricing: {
      basePrice: {
        type: Number,
        min: 0,
        default: 0
      },
      currency: {
        type: [String],
        enum: ['INR', 'USD', 'EUR', 'GBP'],
        default: ['INR'],
        validate: {
          validator: function(v: string[]) {
            return v && v.length > 0;
          },
          message: 'At least one currency must be selected'
        }
      },
      billingCycle: {
        type: [String],
        enum: ['one-time', 'hourly', 'monthly', 'quarterly', 'yearly'],
        default: ['one-time'],
        validate: {
          validator: function(v: string[]) {
            return v && v.length > 0;
          },
          message: 'At least one billing cycle must be selected'
        }
      },
      customQuote: {
        type: Boolean,
        default: false,
      }
    },
    deliverables: [{
      type: String,
      required: true,
    }],
    timeline: {
      estimatedDuration: {
        type: Number,
        required: true,
      },
      durationUnit: {
        type: String,
        enum: ['days', 'weeks', 'months'],
        required: true,
      }
    },
    technologies: [{
      type: String,
      required: true,
    }],
    images: [{
      url: {
        type: String,
        required: true,
      },
      alt: String,
      isPrimary: {
        type: Boolean,
        default: false,
      }
    }],
    status: {
      type: String,
      enum: ['active', 'inactive', 'archived'],
      default: 'active',
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },
    customization: {
      isCustomizable: {
        type: Boolean,
        default: true,
      },
      options: [{
        name: String,
        values: [String],
        priceModifier: Number,
      }]
    },
    support: {
      includedHours: Number,
      responseTime: String,
      channels: [{
        type: String,
        enum: ['email', 'phone', 'chat', 'ticket'],
      }]
    }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Indexes for better query performance
serviceSchema.index({ title: 1, category: 1 });
serviceSchema.index({ 'pricing.basePrice': 1 });
serviceSchema.index({ status: 1 });

// Virtual for full URL
serviceSchema.virtual('fullUrl').get(function() {
  return `/services/${this._id}`;
});

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
