import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuantitySelector({ value, onChange, min = 1, max = 99 }) {
  return (
    <div className="inline-flex items-center border border-zinc-200 rounded-xl overflow-hidden bg-white">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-none text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </Button>
      <span
        className="w-10 text-center text-sm font-medium text-zinc-900 select-none"
        aria-live="polite"
        aria-label={`Quantity: ${value}`}
      >
        {value}
      </span>
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-none text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </Button>
    </div>
  );
}
