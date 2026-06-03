"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

export default function FeatureCard({ title, description, image, badge, children, className }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        "group relative overflow-hidden rounded-[32px]",
        "border border-zinc-200/80 bg-white",
        "shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
        "transition-all duration-300",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 p-7">
        {badge && (
          <div className="mb-4 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-semibold text-zinc-600">
            {badge}
          </div>
        )}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-900">{title}</h3>

            <p className="mt-2 text-sm leading-relaxed text-zinc-500">{description}</p>
          </div>

          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-zinc-200
              bg-white
              transition-all
              duration-300
              group-hover:rotate-45
            "
          >
            <ArrowUpRight className="h-4 w-4 text-zinc-600" />
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 pb-4">
        <div
          className="
            overflow-hidden
            rounded-[12px]
            border border-zinc-200
            bg-gradient-to-b
            from-zinc-50
            to-white
            min-h-[260px]
            flex
            items-center
            justify-center
            p-2
          "
        >
          {image ? (
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              src={image}
              alt={title}
              className="max-h-full rounded-[12px] max-w-full object-contain"
            />
          ) : (
            children
          )}
        </div>
      </div>
    </motion.div>
  );
}
