import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// FilterBlock component for filtering artists
export default function FilterBlock({
  filters,
  setFilters,
  applyFilters,
  resetFilters,
}) {
  return (
    <div className="flex flex-wrap columns-2 md:flex-row gap-4 mb-8 p-4 bg-gray-200 rounded-lg shadow-xl">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <Select
          value={filters.category}
          onValueChange={(value) => setFilters({ ...filters, category: value })}
        >
          <SelectTrigger className={"bg-gray-300 border"}>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className={"bg-gray-300 border-2 border-black"}>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Singer">Singer</SelectItem>
            <SelectItem value="DJ">DJ</SelectItem>
            <SelectItem value="Dancer">Dancer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <Select
          value={filters.location}
          onValueChange={(value) => setFilters({ ...filters, location: value })}
        >
          <SelectTrigger className={"bg-gray-300 border-2 border-black"}>
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent className={"bg-gray-300 border-2 border-black"}>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Mumbai">Mumbai</SelectItem>
            <SelectItem value="Delhi">Delhi</SelectItem>
            <SelectItem value="Bangalore">Bangalore</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price Range
        </label>
        <Select
          value={filters.priceRange}
          onValueChange={(value) =>
            setFilters({ ...filters, priceRange: value })
          }
        >
          <SelectTrigger className={"bg-gray-300 border-2 border-black"}>
            <SelectValue placeholder="Select Price Range" />
          </SelectTrigger>
          <SelectContent className={"bg-gray-300 border-2 border-black"}>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="3000-8000">₹3000-8000</SelectItem>
            <SelectItem value="5000-10000">₹5000-10000</SelectItem>
            <SelectItem value="10000-20000">₹10000-20000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-end justify-center">
        {/* <Button
          onClick={applyFilters}
          className="bg-blue-900 hover:bg-blue-800 text-white"
        >
          Apply Filters
        </Button> */}
        <Button
          onClick={resetFilters}
          variant="outline"
          className="bg-blue-900 hover:bg-blue-800 text-white"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
