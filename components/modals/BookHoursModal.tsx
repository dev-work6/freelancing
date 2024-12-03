import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getToken } from "@/lib/auth/token";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface BookHoursModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    _id: string;
    name: string;
    hourlyRate: number;
    currency: string;
    minimumHours: number;
    maximumHours?: number;
  };
}

interface BookingFormData {
  hours: number;
  email?: string;
  message: string;
  startDate: string;
  endDate: string;
  preferredDays: string[];
  skills: string;
  timezone: string;
  proposedRate: number;
  currency: "INR" | "USD" | "EUR"; // Restrict to valid enum values
}

export function BookHoursModal({
  isOpen,
  onClose,
  service,
}: BookHoursModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue
  } = useForm<BookingFormData>({
    defaultValues: {
      currency: service.currency as "INR" | "USD" | "EUR", // Fixed: Type assertion to valid enum
      proposedRate: service.hourlyRate
    }
  });

  const startDate = watch("startDate");

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.endsWith(',')) {
      const newSkill = value.slice(0, -1).trim();
      if (newSkill && !skills.includes(newSkill)) {
        const updatedSkills = [...skills, newSkill];
        setSkills(updatedSkills);
        setValue('skills', updatedSkills.join(','));
        e.target.value = '';
      }
    }
  };

  const removeSkill = (skillToRemove: string) => {
    const updatedSkills = skills.filter(skill => skill !== skillToRemove);
    setSkills(updatedSkills);
    setValue('skills', updatedSkills.join(','));
  };

  const onSubmit = async (data: BookingFormData) => {
    if (skills.length === 0) {
      toast.error("Please add at least one skill");
      return;
    }

    if (!selectedTimezone) {
      toast.error("Please select a timezone");
      return;
    }

    try {
      setIsLoading(true);
      const token = getToken();

      if (!token && !data.email) {
        toast.error("Either email or login is required to book hours");
        return;
      }

      const startTime = new Date(data.startDate);
      const endTime = new Date(data.endDate);

      if (endTime <= startTime) {
        throw new Error("End date must be after start date");
      }

      if (!data.preferredDays || data.preferredDays.length === 0) {
        throw new Error("Please select at least one preferred day");
      }

      if (!["INR", "USD", "EUR"].includes(data.currency)) {
        throw new Error("Invalid currency selected");
      }

      const response = await fetch("/api/services/hourly/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          serviceId: service._id,
          description: data.message,
          email: data.email,
          hours: Number(data.hours),
          name: service.name,
          hourlyRate: Number(data.proposedRate) || service.hourlyRate,
          currency: data.currency,
          minimumHours: service.minimumHours,
          skills: skills,
          availability: {
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            timezone: selectedTimezone,
            daysAvailable: data.preferredDays,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit booking request");
      }

      toast.success("Booking request sent successfully!");
      reset();
      setSkills([]);
      setSelectedTimezone("");
      onClose();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send booking request"
      );
      console.error("Booking error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Book Hours - {service.name}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Hours Per Day
              </label>
              <Input
                type="number"
                {...register("hours", {
                  required: "Number of hours is required",
                  min: {
                    value: service.minimumHours,
                    message: `Minimum ${service.minimumHours} hours required`,
                  },
                  max: {
                    value: service.maximumHours || 999,
                    message: `Maximum ${service.maximumHours} hours allowed`,
                  },
                })}
                className="mt-1 w-full"
              />
              {errors.hours && (
                <p className="text-sm text-red-500">
                  {errors.hours.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="mt-1 w-full"
                placeholder="Enter your email"
              />
            </div>
      

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
              <label className="block text-sm font-medium text-gray-700">
                Proposed Hourly Rate
              </label>
              <Input
                type="number"
                {...register("proposedRate", {
                  required: "Proposed rate is required",
                  min: {
                    value: 0,
                    message: "Rate must be positive",
                  },
                })}
                className="mt-1 w-full"
                placeholder={`Default: ${service.hourlyRate}`}
              />
            </div>
          </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Currency
              </label>
              <Select 
                defaultValue={service.currency}
                onValueChange={(value) => setValue("currency", value as "INR" | "USD" | "EUR")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INR">Indian Rupee (INR)</SelectItem>
                  <SelectItem value="USD">US Dollar (USD)</SelectItem>
                  <SelectItem value="EUR">Euro (EUR)</SelectItem>
                </SelectContent>
              </Select>
              {errors.currency && (
                <p className="text-sm text-red-500">
                  {errors.currency.message}
                </p>
              )}
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <Input
                type="date"
                {...register("startDate", {
                  required: "Start date is required",
                })}
                className="mt-1 w-full"
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.startDate && (
                <p className="text-sm text-red-500">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <Input
                type="date"
                {...register("endDate", {
                  required: "End date is required",
                  validate: (value) =>
                    new Date(value) > new Date(startDate) ||
                    "End date must be after start date",
                })}
                className="mt-1 w-full"
                min={startDate}
              />
              {errors.endDate && (
                <p className="text-sm text-red-500">
                  {errors.endDate.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Timezone
            </label>
            <Select
              value={selectedTimezone}
              onValueChange={(value) => setSelectedTimezone(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                {Intl.supportedValuesOf("timeZone").map((tz) => {
                  const date = new Date();
                  const timeString = date.toLocaleTimeString("en-US", {
                    timeZone: tz,
                    timeZoneName: "short"
                  });
                  const offset = timeString.split(" ")[2];
                  return (
                    <SelectItem key={tz} value={tz}>
                      {`${tz} (${offset || '+00:00'})`}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            {!selectedTimezone && (
              <p className="text-sm text-red-500">
                Timezone is required
              </p>
            )}
          </div>
          <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills Required
              </label>
              <div className="mt-1">
                <Input
                  type="text"
                  onChange={handleSkillsChange}
                  className="w-full"
                  placeholder="Type skill and press comma to add"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm bg-gray-100 rounded-full flex items-center"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                {skills.length === 0 && (
                  <p className="text-sm text-red-500">
                    At least one skill is required
                  </p>
                )}
              </div>
            </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred Days
            </label>
            <div className="mt-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ].map((day) => (
                <label key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    value={day}
                    {...register("preferredDays", {
                      required: "Please select at least one day",
                    })}
                    className="mr-2"
                  />
                  {day}
                </label>
              ))}
            </div>
            {errors.preferredDays && (
              <p className="text-sm text-red-500">
                {errors.preferredDays.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              {...register("message", {
                required: "Message is required",
                maxLength: {
                  value: 1000,
                  message: "Message cannot exceed 1000 characters",
                },
              })}
              className="mt-1 w-full"
              placeholder="Describe your requirements..."
              rows={4}
            />
            {errors.message && (
              <p className="text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              {isLoading ? "Sending..." : "Book Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
