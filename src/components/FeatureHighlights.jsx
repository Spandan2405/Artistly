import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Music, Calendar, Star } from "lucide-react";

// Feature data
const features = [
  {
    title: "Diverse Talent",
    description: "Choose from singers, DJs, dancers, and more for any event.",
    icon: <Music className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Easy Booking",
    description: "Browse, shortlist, and book artists in just a few clicks.",
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Trusted Platform",
    description: "Connect with verified artists and reliable managers.",
    icon: <Star className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of event planners and artists.",
    icon: <Users className="h-8 w-8 text-blue-600" />,
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function FeatureHighlights() {
  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <i>Why Choose Artistly?</i>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.2 }}
            >
              <Card className="shadow-lg hover:shadow-xl hover:bg-gray-300 ">
                <CardHeader>
                  <div className="flex justify-center mb-2">{feature.icon}</div>
                  <CardTitle className="text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
