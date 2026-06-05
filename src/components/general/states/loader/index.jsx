import { Loader2 } from "lucide-react";

export default function Loading({ title = "" }) {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white/40">
            <div className="flex flex-col items-center gap-3">
                <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
                <span className="text-xs font-bold text-zinc-400 tracking-widest uppercase">
                    {title || "Loading ..."}
                </span>
            </div>
        </div>
    );
}