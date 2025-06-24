"use client";
import { useState, useEffect } from "react";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import artistsData from "@/data/artists.json";

// Artist Listing Page
export default function Artists() {
  const [artists, setArtists] = useState(artistsData);
  const [filteredArtists, setFilteredArtists] = useState(artistsData);
  const [filters, setFilters] = useState({
    category: "All",
    location: "All",
    priceRange: "All",
  });

  // Apply filters
  const applyFilters = () => {
    let filtered = artistsData;

    if (filters.category !== "All") {
      filtered = filtered.filter(
        (artist) => artist.category === filters.category
      );
    }
    if (filters.location !== "All") {
      filtered = filtered.filter(
        (artist) => artist.location === filters.location
      );
    }
    if (filters.priceRange !== "All") {
      filtered = filtered.filter(
        (artist) => artist.priceRange === filters.priceRange
      );
    }

    setFilteredArtists(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({ category: "All", location: "All", priceRange: "All" });
    setFilteredArtists(artistsData);
  };

  // Re-apply filters when filter state changes
  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        <i>Find Your Perfect Artist</i>
      </h1>
      <FilterBlock
        filters={filters}
        setFilters={setFilters}
        applyFilters={applyFilters}
        resetFilters={resetFilters}
      />
      {filteredArtists.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No artists found matching your criteria.
        </p>
      )}
    </div>
  );
}
