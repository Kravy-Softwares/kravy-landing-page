import { ShieldCheck, Truck, RefreshCcw, Award } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, label: "UV400 Protection" },
  { icon: Truck, label: "Free shipping $50+" },
  { icon: RefreshCcw, label: "30-day returns" },
  { icon: Award, label: "1-Year warranty" },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {BADGES.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-100 bg-white text-xs text-zinc-500 font-medium"
        >
          <Icon size={14} className="text-emerald-500 flex-shrink-0" />
          {label}
        </div>
      ))}
    </div>
  );
}