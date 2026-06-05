import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

export function ProductGallery({ images, discount }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 group aspect-square">
        {discount && (
          <Badge className="absolute top-3 left-3 z-10 bg-red-500 hover:bg-red-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {discount}% OFF
          </Badge>
        )}

        <button
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-white/90 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-indigo-600 hover:bg-white transition-all duration-150"
          aria-label="Zoom image"
        >
          <ZoomIn size={15} />
        </button>

        <img
          key={activeIndex}
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="w-full h-full object-contain p-6 transition-all duration-300 group-hover:scale-[1.03]"
        />

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-white/90 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-white/90 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-200"
          aria-label="Next image"
        >
          <ChevronRight size={16} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-200",
                i === activeIndex ? "bg-indigo-500 w-4" : "bg-zinc-300"
              )}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none" role="list">
        {images.map((img, i) => (
          <button
            key={img.id}
            role="listitem"
            onClick={() => setActiveIndex(i)}
            className={cn(
              "flex-shrink-0 w-16 h-16 rounded-xl border-2 overflow-hidden bg-zinc-50 p-1.5 transition-all duration-200 hover:border-indigo-400",
              i === activeIndex
                ? "border-indigo-500 shadow-[0_0_0_3px_rgba(99,102,241,0.2)]"
                : "border-zinc-200"
            )}
            aria-label={img.alt}
            aria-pressed={i === activeIndex}
          >
            <img src={img.thumb} alt={img.alt} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}