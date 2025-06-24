"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

// MultiSelect component for multi-select dropdown with checkboxes
export default function MultiSelect({
  label,
  options,
  selectedValues,
  onChange,
}) {
  const [open, setOpen] = useState(false);

  const handleToggle = (value) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className="flex flex-col ">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <DropdownMenu open={open} onOpenChange={setOpen} className={"w-full"}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:font-semibold"
          >
            {selectedValues.length > 0
              ? `${selectedValues.join(", ")}`
              : `Select ${label}`}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-gray-200">
          {/* <DropdownMenuLabel>Select {label}</DropdownMenuLabel> */}
          {options.map((option) => (
            <DropdownMenuItem
              key={option}
              onSelect={(e) => e.preventDefault()}
              onClick={() => handleToggle(option)}
              className="flex items-center "
            >
              <Checkbox
                checked={selectedValues.includes(option)}
                className="mr-2"
              />
              <span>{option}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
