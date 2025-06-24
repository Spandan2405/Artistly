"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import MultiSelect from "@/components/MultiSelect";

// Validation schema with Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup
    .string()
    .required("Bio is required")
    .min(25, "Bio must be at least 25 characters"),
  categories: yup
    .array()
    .min(1, "Select at least one category")
    .required("Category is required"),
  languages: yup
    .array()
    .min(1, "Select at least one language")
    .required("Languages are required"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  profileImage: yup.mixed().nullable(),
});

// Artist Onboarding Form Page
export default function Onboarding() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  });

  const categories = watch("categories");
  const languages = watch("languages");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        <i>Onboard as an Artist</i>
      </h1>
      {submitted ? (
        <div className="text-center text-blue-900 bg-blue-100 p-4 rounded-lg">
          Thank you for submitting your details! We'll review your profile soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 p-6 rounded-lg"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input
              {...register("name")}
              placeholder="Enter your name"
              className={
                "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:font-semibold"
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <Textarea
              {...register("bio")}
              placeholder="Tell us about yourself (min 25 characters)"
              className={
                "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:font-semibold"
              }
            />
            {errors.bio && (
              <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
            )}
          </div>
          <MultiSelect
            label="Categories"
            options={["Singer", "DJ", "Dancer", "Speaker"]}
            selectedValues={categories}
            onChange={(values) => setValue("categories", values)}
          />
          {errors.categories && (
            <p className="text-red-500 text-sm">{errors.categories.message}</p>
          )}
          <MultiSelect
            label="Languages Spoken"
            options={["English", "Hindi", "Kannada", "Tamil"]}
            selectedValues={languages}
            onChange={(values) => setValue("languages", values)}
          />
          {errors.languages && (
            <p className="text-red-500 text-sm">{errors.languages.message}</p>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fee Range
            </label>
            <Select onValueChange={(value) => setValue("feeRange", value)}>
              <SelectTrigger
                className={
                  "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:font-semibold"
                }
              >
                <SelectValue placeholder="Select fee range" />
              </SelectTrigger>
              <SelectContent
                className={
                  "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:font-semibold"
                }
              >
                <SelectItem value="3000-8000">₹3000-8000</SelectItem>
                <SelectItem value="5000-10000">₹5000-10000</SelectItem>
                <SelectItem value="10000-20000">₹10000-20000</SelectItem>
              </SelectContent>
            </Select>
            {errors.feeRange && (
              <p className="text-red-500 text-sm mt-1">
                {errors.feeRange.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image (Optional)
            </label>
            <Input
              type="file"
              accept="image/*"
              {...register("profileImage")}
              className={
                "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:font-semibold"
              }
            />
            {errors.profileImage && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profileImage.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <Input
              {...register("location")}
              placeholder="Enter your city"
              className={
                "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:font-semibold"
              }
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white"
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
}
