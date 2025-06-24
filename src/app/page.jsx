"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import FeatureHighlights from "@/components/FeatureHighlights";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTABanner from "@/components/CTABanner";

// Artist category data
const categories = [
  {
    title: "Singers",
    description: "Discover talented vocalists for your events.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/029/630/459/small_2x/handsome-young-male-singer-holds-a-microphone-stand-and-performs-on-a-concert-stage-free-photo.jpeg",
  },
  {
    title: "Dancers",
    description: "Find dynamic performers to light up your stage.",
    image:
      "https://wallpapers.com/images/hd/ballerina-paint-explosion-tnvpop0n3u3fc570.jpg",
  },
  {
    title: "Speakers",
    description: "Engage your audience with inspiring speakers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfxswIeiU15SZBTvQHWBnPzffqukN6GESFJatVoxPoJnw0Y8Qzv8NdmjufaRWnbjJH2Y&usqp=CAU",
  },
  {
    title: "DJ's",
    description: "Get the party started with top DJs from around the globe",
    image:
      "https://www.pixelstalk.net/wp-content/uploads/images6/Dj-HD-Wallpaper-Free-download.jpg",
  },
];

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.section
        className="text-center py-16 bg-gradient-to-r from-[#5257e5] to-[#6fe3e1] rounded-lg text-white"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          variants={heroVariants}
        >
          Discover Amazing Artists with Artistly
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
          variants={heroVariants}
        >
          Connect with top performers for your events, from singers to DJs, all
          in one place.
        </motion.p>
        <motion.div variants={heroVariants}>
          <Link href="/artists">
            <Button
              className="bg-white text-blue-600 hover:bg-zinc-800 hover:text-white text-lg px-6 py-3"
              asChild
            >
              <span>Explore Artists</span>
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Artist Categories */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          <i>Explore Our Artists</i>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.2 }}
            >
              <Card className="shadow-lg group hover:shadow-xl h-100 hover:bg-gray-400 justify-center">
                <CardHeader>
                  <CardTitle className={"text-center text-xl"}>
                    {category.title.toUpperCase()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={category.image}
                    alt={`${category.title} category`}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-600 group-hover:text-black font-mono">
                    {category.description}
                  </p>
                  <Link href="/artists">
                    <Button
                      variant="outline"
                      className="mt-4 w-full group-hover:bg-zinc-800 group-hover:text-white cursor-pointer"
                    >
                      View {category.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Feature Highlights */}
      <FeatureHighlights />

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
