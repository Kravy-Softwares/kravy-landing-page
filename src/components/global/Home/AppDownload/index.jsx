"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";

const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.vikas9095.kravy";

const features = ["QR Ordering", "Billing", "Inventory"];

export default function AppDownload() {
  return (
    <section className="pt-14  bg-white overflow-hidden">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl lg:rounded-[32px] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="absolute left-1/2 top-0 h-[250px] w-[250px] md:h-[350px] md:w-[350px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-6 items-center p-5 sm:p-6 md:p-10 lg:p-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-green-700 dark:text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Android App Available
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-neutral-900 dark:text-white">
                Manage Your Restaurant
                <br />
                <span className="text-green-600">From Anywhere</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-md mx-auto lg:mx-0">
                Orders, billing and inventory in one simple app designed for modern restaurants.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
                  >
                    <CheckCircle2 size={14} className="text-green-600" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex justify-center lg:justify-start">
                <a
                  href={PLAY_STORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-2.5 sm:px-5 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
                    <Download size={18} />
                  </div>

                  <div className="text-left">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500">
                      Download On
                    </p>
                    <p className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500/15 blur-[90px]" />

                <div className="hidden md:block absolute -left-20 top-20 z-20">
                  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur px-4 py-3 shadow-xl">
                    <p className="text-xs text-neutral-500">Orders Today</p>
                    <p className="text-xl font-bold text-neutral-900 dark:text-white">128+</p>
                  </div>
                </div>

                <div className="hidden md:block absolute -right-20 bottom-20 z-20">
                  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur px-4 py-3 shadow-xl">
                    <p className="text-xs text-neutral-500">Revenue</p>
                    <p className="text-xl font-bold text-green-600">₹24.5K</p>
                  </div>
                </div>

                <div className="relative w-[240px] xs:w-[260px] sm:w-[300px] md:w-[340px]">
                  <div className="rounded-[34px] md:rounded-[40px] bg-neutral-900 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                    <div className="absolute left-1/2 top-4 z-20 h-5 md:h-6 w-24 md:w-28 -translate-x-1/2 rounded-full bg-black" />

                    <div className="overflow-hidden rounded-[28px] md:rounded-[32px] bg-white min-h-[360px] sm:min-h-[430px]">
                      <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10 text-center">
                        <div className="rounded-full bg-green-100 px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-green-700">
                          Scan & Download
                        </div>

                        <h3 className="mt-3 text-2xl sm:text-3xl font-black text-neutral-900">
                          Kravy App
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm text-neutral-500">
                          Restaurant Management Made Easy
                        </p>

                        <button
                          onClick={() => window.open(PLAY_STORE_LINK, "_blank")}
                          className="mt-5 transition-transform duration-300 hover:scale-105"
                        >
                          <div className="rounded-3xl border border-neutral-200 bg-white p-3 sm:p-4 shadow-xl">
                            <img
                              src="/assets/home/kravy-app-qr.png"
                              alt="Kravy QR Code"
                              className="w-36 sm:w-44 md:w-52"
                            />
                          </div>
                        </button>

                        <div className="mt-5 flex items-center gap-1 text-yellow-400 text-base sm:text-lg">
                          ★★★★★
                        </div>

                        <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] text-neutral-500">
                          Trusted By 10K+ Restaurants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block absolute -bottom-3 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-green-600 text-white px-3 py-1.5 text-[10px] sm:text-xs font-semibold shadow-lg whitespace-nowrap">
                    10,000+ Active Restaurants
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
