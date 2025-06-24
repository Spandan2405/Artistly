import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Animation variants
const bannerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

export default function CTABanner() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-[#6fe3e1] to-[#5257e5] text-white text-center rounded-xl"
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make Your Event Unforgettable?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Join Artistly today to book top talent or showcase your skills as an
          artist.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link href="/artists">
              <Button className="bg-white text-blue-600 hover:bg-gray-900 hover:text-white text-lg px-6 py-3">
                Book an Artist
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link href="/onboarding">
              <Button className=" bg-gray-900 text-white hover:bg-white hover:text-blue-600 text-lg px-6 py-3">
                Become an Artist
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
