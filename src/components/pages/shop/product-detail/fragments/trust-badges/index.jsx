import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

export function TrustBadges({
  badges = [],
  className
}) {
  if (!badges.length) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-2",
        className
      )}
    >
      {badges.map((badge) => {
        const Icon = Icons[badge.icon];
        return (
          <div
            key={badge.label}
            className={cn(
              "flex items-center gap-2 rounded-xl border border-zinc-100 bg-white px-3 py-2 text-xs font-medium text-zinc-600",
            )}
          >
            {Icon && <Icon size={14} />}

            <span>{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
}