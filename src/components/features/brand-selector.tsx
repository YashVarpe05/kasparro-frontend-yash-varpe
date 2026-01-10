"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useKasparroStore } from "@/store";
import type { Brand } from "@/types";

interface BrandSelectorProps {
  brands: Brand[];
}

export function BrandSelector({ brands }: BrandSelectorProps) {
  const { selectedBrandId, setSelectedBrandId } = useKasparroStore();

  return (
    <Select
      value={selectedBrandId || undefined}
      onValueChange={(value) => setSelectedBrandId(value)}
    >
      <SelectTrigger className="w-50">
        <SelectValue placeholder="Select a brand" />
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-muted text-xs font-medium">
                {brand.name.charAt(0)}
              </div>
              <span>{brand.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
