import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// ArtistCard component to display artist details
export default function ArtistCard({ artist }) {
  return (
    <Card className="shadow-lg hover:shadow-xl bg-gray-200 group hover:bg-gray-300 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center group-hover:font-bold">
          {artist.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={artist.img}
          alt={`${artist.name} profile`}
          className="profile object-cover rounded-md mb-4"
          width={400}
          height={300}
        />
        <p className="text-gray-600 mb-2">
          <strong>Category:</strong> {artist.category}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Price Range:</strong> ₹{artist.priceRange}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Location:</strong> {artist.location}
        </p>
        <Button className="w-full bg-blue-900 group-hover:bg-blue-700 hover:border-3 group-hover:border-black text-white hover:cursor-pointer">
          Ask for Quote
        </Button>
      </CardContent>
    </Card>
  );
}
