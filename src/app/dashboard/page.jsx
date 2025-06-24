"use client";
import ArtistTable from "@/components/ArtistTable";
import artistsData from "@/data/artists.json";

// Manager Dashboard Page
export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 ">
        <i>Manager Dashboard</i>
      </h1>
      <div className=" p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          Artist Submissions
        </h2>
        <ArtistTable artists={artistsData} />
      </div>
    </div>
  );
}
