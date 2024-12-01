"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface Service {
  _id?: string;
  title: string;
  description: string;
  shortDescription: string;
  category: Array<"Web Development" | "Mobile Development" | "Cloud Services" | "DevOps" | "Consulting" | "Support" | "Other" | "UI/UX Design" | "API Development" | "Database Design" | "System Architecture" | "Security Services" | "Testing & QA" | "AI/ML Development" | "Blockchain Development" | "IoT Solutions" | "E-commerce Development" | "CMS Development" | "Technical Writing" | "Code Review" | "Performance Optimization" | "Legacy System Migration" | "Email Server Setup" | "Domain Management" | "Web Hosting" | "SSL Certificates" | "DNS Management" | "Server Administration" | "Backup Solutions" | "Load Balancing" | "CDN Setup" | "Database Administration">;
  features: Array<{
    name: string;
    description: string;
    included: boolean;
  }>;
  pricing: {
    basePrice: number;
    currency: Array<'INR' | 'USD' | 'EUR' | 'GBP'>;
    billingCycle: Array<'one-time' | 'hourly' | 'monthly' | 'quarterly' | 'yearly'>;
    customQuote: boolean;
  };
  deliverables: string[];
  timeline: {
    estimatedDuration: number;
    durationUnit: 'days' | 'weeks' | 'months';
  };
  technologies: string[];
  images?: Array<{
    url: string;
    alt?: string;
    isPrimary: boolean;
  }>;
  status: 'active' | 'inactive' | 'archived';
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  customization: {
    isCustomizable: boolean;
    options: Array<{
      name?: string;
      values?: string[];
      priceModifier?: number;
    }>;
  };
  support: {
    includedHours?: number;
    responseTime?: string;
    channels?: Array<'email' | 'phone' | 'chat' | 'ticket'>;
  };
}

interface ServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: Service | null;
  onClose: () => void;
}
export default function ServiceDialog({
  open,
  onOpenChange,
  service,
  onClose,
}: ServiceDialogProps) {
  const [formData, setFormData] = useState<Service>({
    title: "",
    description: "",
    shortDescription: "",
    category: ["Web Development"],
    features: [],
    pricing: {
      basePrice: 0,
      currency: ["INR"],
      billingCycle: ["one-time"],
      customQuote: false
    },
    deliverables: [],
    timeline: {
      estimatedDuration: 1,
      durationUnit: "weeks"
    },
    technologies: [],
    images: [],
    status: "active",
    customization: {
      isCustomizable: false,
      options: []
    },
    support: {
      includedHours: 0,
      responseTime: "",
      channels: []
    }
  });

  useEffect(() => {
    if (service) {
      setFormData(service);
    } else {
      setFormData({
        title: "",
        description: "",
        shortDescription: "",
        category: ["Web Development"],
        features: [],
        pricing: {
          basePrice: 0,
          currency: ["INR"],
          billingCycle: ["one-time"],
          customQuote: false
        },
        deliverables: [],
        timeline: {
          estimatedDuration: 1,
          durationUnit: "weeks"
        },
        technologies: [],
        images: [],
        status: "active",
        customization: {
          isCustomizable: false,
          options: []
        },
        support: {
          includedHours: 0,
          responseTime: "",
          channels: []
        }
      });
    }
  }, [service]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, data: Service) => {
    e.preventDefault();

    // Validate description lengths
    if (data.description.length < 10) {
      alert("Description must be at least 10 characters long");
      return;
    }
    if (data.shortDescription.length < 10) {
      alert("Short description must be at least 10 characters long");
      return;
    }

    const serviceData = {
      ...data,
      pricing: {
        basePrice: data.pricing.basePrice.toString(),
        currency: data.pricing.currency,
        billingCycle: data.pricing.billingCycle,
        customQuote: data.pricing.customQuote || false
      },
      category: Array.isArray(data.category) ? data.category : [data.category],
      features: data.features || [],
      deliverables: Array.isArray(data.deliverables) ? data.deliverables : [],
      technologies: Array.isArray(data.technologies) ? data.technologies : [],
    };

    try {
      const response = await fetch(service?._id ? `/api/services/${service._id}` : "/api/services", {
        method: service?._id ? "PATCH" : "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.details || error.error || "Failed to create service");
        return;
      }

      onClose();
    } catch (error) {
      console.error("Error creating service:", error);
      alert("Failed to create service");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[90vw] h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {service ? "Edit Service" : "Add New Service"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => handleSubmit(e, formData)} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="shortDescription">Short Description</Label>
            <Textarea
              id="shortDescription"
              value={formData.shortDescription}
              onChange={(e) =>
                setFormData({ ...formData, shortDescription: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="category">Categories</Label>
            <div className="flex flex-wrap gap-2">
              {([
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
              ] as const).map((cat) => (
                <div key={cat} className="flex items-center space-x-2">
                  <Checkbox
                    id={cat}
                    checked={formData.category?.includes(cat)}
                    onCheckedChange={(checked) => {
                      const newCategories = checked
                        ? [...(formData.category || []), cat] 
                        : formData.category?.filter((c) => c !== cat) || [];
                      setFormData({ ...formData, category: newCategories });
                    }}
                  />
                  <Label htmlFor={cat}>{cat}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Features</Label>
            {formData.features.map((feature, index) => (
              <div key={index} className="space-y-2 mb-4 p-4 border rounded">
                <Input
                  placeholder="Feature name"
                  value={feature.name}
                  onChange={(e) => {
                    const newFeatures = [...formData.features];
                    newFeatures[index].name = e.target.value;
                    setFormData({ ...formData, features: newFeatures });
                  }}
                />
                <Textarea
                  placeholder="Feature description"
                  value={feature.description}
                  onChange={(e) => {
                    const newFeatures = [...formData.features];
                    newFeatures[index].description = e.target.value;
                    setFormData({ ...formData, features: newFeatures });
                  }}
                />
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={feature.included}
                    onCheckedChange={(checked) => {
                      const newFeatures = [...formData.features];
                      newFeatures[index].included = checked as boolean;
                      setFormData({ ...formData, features: newFeatures });
                    }}
                  />
                  <Label>Included</Label>
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    const newFeatures = formData.features.filter((_, i) => i !== index);
                    setFormData({ ...formData, features: newFeatures });
                  }}
                >
                  Remove Feature
                </Button>
              </div>
            ))}
            <Button
              type="button"
              onClick={() => {
                setFormData({
                  ...formData,
                  features: [...formData.features, { name: '', description: '', included: true }]
                });
              }}
            >
              Add Feature
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Pricing</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="basePrice">Base Price</Label>
                <Input
                  id="basePrice"
                  type="number"
                  value={formData.pricing.basePrice}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pricing: {
                        ...formData.pricing,
                        basePrice: Number(e.target.value)
                      }
                    })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="currency">Currency</Label>
                <div className="space-y-2">
                  {['INR', 'USD', 'EUR', 'GBP'].map((curr) => (
                    <div key={curr} className="flex items-center gap-2">
                      <Checkbox
                        checked={formData.pricing.currency.includes(curr as 'INR' | 'USD' | 'EUR' | 'GBP')}
                        onCheckedChange={(checked) => {
                          const currencies = checked
                            ? [...formData.pricing.currency, curr as 'INR' | 'USD' | 'EUR' | 'GBP']
                            : formData.pricing.currency.filter(c => c !== curr);
                          setFormData({
                            ...formData,
                            pricing: { ...formData.pricing, currency: currencies }
                          });
                        }}
                      />
                      <Label>{curr}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="billingCycle">Billing Cycle</Label>
              <div className="space-y-2">
                {['one-time', 'hourly', 'monthly', 'quarterly', 'yearly'].map((cycle) => (
                  <div key={cycle} className="flex items-center gap-2">
                    <Checkbox
                      checked={formData.pricing.billingCycle.includes(cycle as 'one-time' | 'hourly' | 'monthly' | 'quarterly' | 'yearly')}
                      onCheckedChange={(checked) => {
                        const cycles = checked
                          ? [...formData.pricing.billingCycle, cycle as 'one-time' | 'hourly' | 'monthly' | 'quarterly' | 'yearly']
                          : formData.pricing.billingCycle.filter(c => c !== cycle);
                        setFormData({
                          ...formData,
                          pricing: { ...formData.pricing, billingCycle: cycles }
                        });
                      }}
                    />
                    <Label>{cycle.charAt(0).toUpperCase() + cycle.slice(1).replace('-', ' ')}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={formData.pricing.customQuote}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    pricing: { ...formData.pricing, customQuote: checked as boolean }
                  })
                }
              />
              <Label>Custom Quote</Label>
            </div>
          </div>

          <div>
            <Label>Deliverables</Label>
            {formData.deliverables.map((deliverable, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  value={deliverable}
                  onChange={(e) => {
                    const newDeliverables = [...formData.deliverables];
                    newDeliverables[index] = e.target.value;
                    setFormData({ ...formData, deliverables: newDeliverables });
                  }}
                />
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    const newDeliverables = formData.deliverables.filter((_, i) => i !== index);
                    setFormData({ ...formData, deliverables: newDeliverables });
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              onClick={() => {
                setFormData({
                  ...formData,
                  deliverables: [...formData.deliverables, '']
                });
              }}
            >
              Add Deliverable
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="estimatedDuration">Estimated Duration</Label>
              <Input
                id="estimatedDuration"
                type="number"
                value={formData.timeline.estimatedDuration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    timeline: {
                      ...formData.timeline,
                      estimatedDuration: Number(e.target.value)
                    }
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="durationUnit">Duration Unit</Label>
              <Select
                value={formData.timeline.durationUnit}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    timeline: { ...formData.timeline, durationUnit: value as "days" | "weeks" | "months" }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="days">Days</SelectItem>
                  <SelectItem value="weeks">Weeks</SelectItem>
                  <SelectItem value="months">Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Technologies</Label>
            {formData.technologies.map((tech, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  value={tech}
                  onChange={(e) => {
                    const newTechnologies = [...formData.technologies];
                    newTechnologies[index] = e.target.value;
                    setFormData({ ...formData, technologies: newTechnologies });
                  }}
                />
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    const newTechnologies = formData.technologies.filter((_, i) => i !== index);
                    setFormData({ ...formData, technologies: newTechnologies });
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              onClick={() => {
                setFormData({
                  ...formData,
                  technologies: [...formData.technologies, '']
                });
              }}
            >
              Add Technology
            </Button>
          </div>

          <div>
            <Label>Images</Label>
            {formData?.images?.map((image, index) => (
              <div key={index} className="space-y-2 mb-4 p-4 border rounded">
                <Input
                  placeholder="Image URL"
                  value={image.url}
                  onChange={(e) => {
                    const newImages = formData?.images ? [...formData.images] : [];
                    newImages[index].url = e.target.value;
                    setFormData({ ...formData, images: newImages });
                  }}
                />
                <Input
                  placeholder="Alt text"
                  value={image.alt || ''}
                  onChange={(e) => {
                    const newImages = formData?.images ? [...formData.images] : [];
                    newImages[index].alt = e.target.value;
                    setFormData({ ...formData, images: newImages });
                  }}
                />
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={image.isPrimary}
                    onCheckedChange={(checked) => {
                      const newImages = formData.images?.map((img, i) => ({
                        ...img,
                        isPrimary: i === index ? checked as boolean : false
                      }));
                      setFormData({ ...formData, images: newImages });
                    }}
                  />
                  <Label>Primary Image</Label>
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    const newImages = formData?.images?.filter((_, i) => i !== index) ?? [];
                    setFormData({ ...formData, images: newImages });
                  }}
                >
                  Remove Image
                </Button>
              </div>
            ))}
            <Button
              type="button"
              onClick={() => {
                setFormData({
                  ...formData,
                  images: [...(formData?.images || []), { url: '', alt: '', isPrimary: false }]
                });
              }}
            >
              Add Image
            </Button>
          </div>

          <div>
            <Label>SEO</Label>
            <div className="space-y-2">
              <Input
                placeholder="Meta Title"
                value={formData.seo?.metaTitle || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    seo: { ...formData.seo, metaTitle: e.target.value }
                  })
                }
              />
              <Textarea
                placeholder="Meta Description"
                value={formData.seo?.metaDescription || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    seo: { ...formData.seo, metaDescription: e.target.value }
                  })
                }
              />
              <div>
                <Label>Keywords</Label>
                {formData.seo?.keywords?.map((keyword, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Input
                      value={keyword}
                      onChange={(e) => {
                        const newKeywords = [...(formData.seo?.keywords || [])];
                        newKeywords[index] = e.target.value;
                        setFormData({
                          ...formData,
                          seo: { ...formData.seo, keywords: newKeywords }
                        });
                      }}
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => {
                        const newKeywords = formData.seo?.keywords?.filter((_, i) => i !== index) || [];
                        setFormData({
                          ...formData,
                          seo: { ...formData.seo, keywords: newKeywords }
                        });
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      seo: {
                        ...formData.seo,
                        keywords: [...(formData.seo?.keywords || []), '']
                      }
                    });
                  }}
                >
                  Add Keyword
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Label>Customization</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={formData?.customization?.isCustomizable}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      customization: {
                        ...formData.customization,
                        isCustomizable: checked as boolean
                      }
                    })
                  }
                />
                <Label>Is Customizable</Label>
              </div>
              {formData?.customization?.isCustomizable && (
                <div>
                  <Label>Customization Options</Label>
                  {formData?.customization?.options?.map((option, index) => (
                    <div key={index} className="space-y-2 mb-4 p-4 border rounded">
                      <Input
                        placeholder="Option name"
                        value={option.name || ''}
                        onChange={(e) => {
                          const newOptions = [...(formData?.customization?.options || [])];
                          newOptions[index] = { ...newOptions[index], name: e.target.value };
                          setFormData({
                            ...formData,
                            customization: { ...formData.customization, options: newOptions }
                          });
                        }}
                      />
                      <Input
                        type="number"
                        placeholder="Price modifier"
                        value={option.priceModifier || 0}
                        onChange={(e) => {
                          const newOptions = [...(formData?.customization?.options || [])];
                          newOptions[index] = { ...newOptions[index], priceModifier: Number(e.target.value) };
                          setFormData({
                            ...formData,
                            customization: { ...formData.customization, options: newOptions }
                          });
                        }}
                      />
                      <div>
                        <Label>Values</Label>
                        {option.values?.map((value, valueIndex) => (
                          <div key={valueIndex} className="flex gap-2 mb-2">
                            <Input
                              value={value}
                              onChange={(e) => {
                                const newOptions = [...(formData?.customization?.options || [])];
                                const newValues = [...(newOptions[index].values || [])];
                                newValues[valueIndex] = e.target.value;
                                newOptions[index] = { ...newOptions[index], values: newValues };
                                setFormData({
                                  ...formData,
                                  customization: { ...formData.customization, options: newOptions }
                                });
                              }}
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              onClick={() => {
                                const newOptions = [...(formData?.customization?.options || [])];
                                const newValues = newOptions[index].values?.filter((_, i) => i !== valueIndex) || [];
                                newOptions[index] = { ...newOptions[index], values: newValues };
                                setFormData({
                                  ...formData,
                                  customization: { ...formData.customization, options: newOptions }
                                });
                              }}
                            >
                              Remove Value
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          onClick={() => {
                            const newOptions = [...(formData?.customization?.options || [])];
                            newOptions[index] = {
                              ...newOptions[index],
                              values: [...(newOptions[index].values || []), '']
                            };
                            setFormData({
                              ...formData,
                              customization: { ...formData.customization, options: newOptions }
                            });
                          }}
                        >
                          Add Value
                        </Button>
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => {
                          const newOptions = formData?.customization?.options?.filter((_, i) => i !== index) || [];
                          setFormData({
                            ...formData,
                            customization: { ...formData.customization, options: newOptions }
                          });
                        }}
                      >
                        Remove Option
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        customization: {
                          ...formData.customization,
                          options: [...formData.customization.options, { name: '', values: [], priceModifier: 0 }]
                        }
                      });
                    }}
                  >
                    Add Option
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div>
            <Label>Support</Label>
            <div className="space-y-4">
              <div>
                <Label htmlFor="includedHours">Included Support Hours</Label>
                <Input
                  id="includedHours"
                  type="number"
                  value={formData?.support?.includedHours || 0}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      support: {
                        ...formData.support,
                        includedHours: Number(e.target.value)
                      }
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="responseTime">Response Time</Label>
                <Input
                  id="responseTime"
                  value={formData?.support?.responseTime || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      support: {
                        ...formData.support,
                        responseTime: e.target.value
                      }
                    })
                  }
                />
              </div>
              <div>
                <Label>Support Channels</Label>
                {['email', 'phone', 'chat', 'ticket'].map((channel) => (
                  <div key={channel} className="flex items-center gap-2">
                    <Checkbox
                      checked={formData?.support?.channels?.includes(channel as 'email' | 'phone' | 'chat' | 'ticket')}
                      onCheckedChange={(checked) => {
                        const channels = checked
                          ? [...(formData.support.channels || []), channel as 'email' | 'phone' | 'chat' | 'ticket']
                          : formData.support.channels?.filter(c => c !== channel) || [];
                        setFormData({
                          ...formData,
                          support: { ...formData.support, channels }
                        });
                      }}
                    />
                    <Label>{channel.charAt(0).toUpperCase() + channel.slice(1)}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData?.status}
              onValueChange={(value: "active" | "inactive" | "archived") =>
                setFormData({ ...formData, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
