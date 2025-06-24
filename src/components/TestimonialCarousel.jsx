"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Event Planner",
    quote:
      "Artistly made booking a singer for our wedding so easy! The platform is intuitive and the artists were amazing.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Corporate Organizer",
    quote:
      "Found the perfect DJ for our company event. Highly recommend Artistly for professional talent!",
  },
  {
    id: 3,
    name: "Sofia Patel",
    role: "Artist Manager",
    quote:
      "Managing my artists through Artistly’s dashboard is a breeze. It saves me so much time!",
  },
];

// Animation variants
const slideVariants = {
  enter: { x: 100, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

export default function TestimonialCarousel() {
  return (
    <section className="md:py-12 pb-10 md:px-10 flex justify-center">
      <div className="container mx-2 ">
        <h2 className="text-3xl font-bold text-center mb-8">
          <i>What Our Users Say</i>
        </h2>
        <Carousel className="max-w-3xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <motion.div
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Card className="shadow-lg">
                    <CardContent className="p-6 text-center">
                      <Quote className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-600 italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={"hidden md:flex"} />
          <CarouselNext className={"hidden md:flex"} />
        </Carousel>
      </div>
    </section>
  );
}
