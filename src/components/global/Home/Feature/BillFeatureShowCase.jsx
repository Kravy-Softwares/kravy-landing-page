"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, ShieldCheck } from "lucide-react";

export default function BillFeatureShowcase({ billImage, hotspots }) {
  const [active, setActive] = useState(null);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white" />

      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm">
            <Sparkles className="h-4 w-4" />
            Smart Receipt System
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-neutral-900 md:text-6xl">
            Every Receipt Works
            <br />
            For Your Business
          </h2>

          <p className="mt-6 text-lg text-neutral-600">
            Customer details, loyalty points, UPI payments, feedback collection, branding and
            analytics — all packed inside a single receipt.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden min-h-[850px] lg:block">
          {/* Bill */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute left-1/2 top-0 z-20 w-[420px] -translate-x-1/2"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 blur-3xl" />

              {/* Receipt */}
              <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-3 shadow-[0_40px_100px_rgba(0,0,0,0.12)]">
                <img src={billImage} alt="Receipt" className="w-full rounded-2xl" />

                {hotspots.map((spot) => (
                  <motion.div
                    key={spot.id}
                    animate={{
                      opacity: active === spot.id || active === null ? 1 : 0.25,
                    }}
                    className="absolute"
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                    }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-indigo-500/20 blur-xl" />

                      <div className="relative h-4 w-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100">
                        <span className="absolute inset-0 animate-ping rounded-full bg-indigo-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          {hotspots.map((spot, index) => {
            const leftSide = spot.side === "left";

            return (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, x: leftSide ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                onMouseEnter={() => setActive(spot.id)}
                onMouseLeave={() => setActive(null)}
                className={`absolute w-[320px] ${leftSide ? "left-0" : "right-0"}`}
                style={{
                  top: `${spot.y - 6}%`,
                }}
              >
                <div className="group rounded-3xl border border-neutral-200 bg-white/90 p-5 backdrop-blur shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50">
                      <ShieldCheck className="h-5 w-5 text-indigo-600" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-neutral-900">{spot.title}</h3>

                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {spot.description}
                      </p>
                    </div>

                    <ChevronRight className="h-5 w-5 text-neutral-400" />
                  </div>
                </div>

                {/* Connector Line */}
                <div
                  className={`absolute top-1/2 h-[2px] bg-gradient-to-r from-indigo-500 to-indigo-300 ${
                    leftSide ? "right-[-120px] w-[120px]" : "left-[-120px] w-[120px]"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="overflow-hidden rounded-[28px] border bg-white p-3 shadow-xl">
            <img src={billImage} alt="Receipt" className="w-full rounded-2xl" />
          </div>

          <div className="mt-8 grid gap-4">
            {hotspots.map((spot) => (
              <div key={spot.id} className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-bold text-neutral-900">{spot.title}</h3>

                <p className="mt-2 text-sm text-neutral-600">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
