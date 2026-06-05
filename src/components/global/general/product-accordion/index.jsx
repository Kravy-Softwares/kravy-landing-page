"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ProductAccordion({ details, shipping, sustainability, tags }) {
  const [openSections, setOpenSections] = useState({
    details: true,
    shipping: false,
    sustainability: false,
    tags: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white overflow-hidden divide-y divide-zinc-100">
      {/* Product Details Section */}
      <div className="px-4">
        <button
          onClick={() => toggleSection("details")}
          className="flex w-full items-center justify-between text-sm font-medium text-zinc-800 py-3.5 hover:text-indigo-600 transition-colors"
          aria-expanded={openSections.details}
        >
          <span>Product Details</span>
          <ChevronDown
            size={16}
            className={cn(
              "text-zinc-400 transition-transform duration-200",
              openSections.details && "rotate-180 text-indigo-600"
            )}
          />
        </button>
        <div
          className={cn(
            "grid transition-all duration-200 ease-in-out",
            openSections.details ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <ul className="space-y-1.5 pl-4 list-disc">
              {details.map((d, i) => (
                <li key={i} className="text-[13px] text-zinc-500 leading-relaxed">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Return & Shipping Section */}
      <div className="px-4">
        <button
          onClick={() => toggleSection("shipping")}
          className="flex w-full items-center justify-between text-sm font-medium text-zinc-800 py-3.5 hover:text-indigo-600 transition-colors"
          aria-expanded={openSections.shipping}
        >
          <span>Return & Shipping Info</span>
          <ChevronDown
            size={16}
            className={cn(
              "text-zinc-400 transition-transform duration-200",
              openSections.shipping && "rotate-180 text-indigo-600"
            )}
          />
        </button>
        <div
          className={cn(
            "grid transition-all duration-200 ease-in-out",
            openSections.shipping ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <ul className="space-y-1.5 pl-4 list-disc">
              {shipping.map((s, i) => (
                <li key={i} className="text-[13px] text-zinc-500 leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="px-4">
        <button
          onClick={() => toggleSection("sustainability")}
          className="flex w-full items-center justify-between text-sm font-medium text-zinc-800 py-3.5 hover:text-indigo-600 transition-colors"
          aria-expanded={openSections.sustainability}
        >
          <span>Sustainability</span>
          <ChevronDown
            size={16}
            className={cn(
              "text-zinc-400 transition-transform duration-200",
              openSections.sustainability && "rotate-180 text-indigo-600"
            )}
          />
        </button>
        <div
          className={cn(
            "grid transition-all duration-200 ease-in-out",
            openSections.sustainability ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <p className="text-[13px] text-zinc-500 leading-relaxed">{sustainability}</p>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="px-4">
        <button
          onClick={() => toggleSection("tags")}
          className="flex w-full items-center justify-between text-sm font-medium text-zinc-800 py-3.5 hover:text-indigo-600 transition-colors"
          aria-expanded={openSections.tags}
        >
          <span>Tags / Categories</span>
          <ChevronDown
            size={16}
            className={cn(
              "text-zinc-400 transition-transform duration-200",
              openSections.tags && "rotate-180 text-indigo-600"
            )}
          />
        </button>
        <div
          className={cn(
            "grid transition-all duration-200 ease-in-out",
            openSections.tags ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-normal text-[12px] rounded-lg cursor-pointer transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
