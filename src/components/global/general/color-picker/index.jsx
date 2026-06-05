import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ColorPicker({ colors, selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="listbox" aria-label="Select color">
      {colors.map((color) => {
        const isActive = selected?.id === color.id;
        return (
          <button
            key={color.id}
            role="option"
            aria-selected={isActive}
            aria-label={color.label}
            title={color.label}
            onClick={() => onChange(color)}
            className={cn(
              "relative w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
              isActive && "ring-2 ring-offset-2 ring-zinc-800 scale-110"
            )}
            style={{ backgroundColor: color.hex }}
          >
            {isActive && (
              <span className="absolute inset-0 flex items-center justify-center">
                <Check size={12} className="text-white drop-shadow" strokeWidth={3} />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}