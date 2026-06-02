"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GradientText } from "../../GradientTextButton/GradientText";

const features = ["Smart Billing", "QR Ordering", "Inventory", "Analytics"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 flex items-left justify-center lg:justify-start"
            >
              <GradientText />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-center lg:text-start text-4xl font-black leading-[1.05] tracking-[-0.04em] text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl dark:text-white"
            >
              Take Orders. Create Bills.{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Grow Faster.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-5 text-sm max-w-xl text-base leading-relaxed text-gray-600 md:text-lg text-center lg:text-start dark:text-gray-300"
            >
              Everything your business needs to manage billing, inventory, QR ordering and sales
              reporting from one modern platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href={`${process.env.NEXT_KRAVY_BILLING_APP_BASE_URL}`}
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-medium text-gray-900 transition-all hover:border-green-300 hover:bg-green-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
              >
                Explore Features
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex justify-center lg:justify-start flex-wrap gap-3"
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-2 text-sm font-medium text-green-700 dark:border-green-900/40 dark:bg-green-950/20 dark:text-green-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {feature}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[650px]">
              <div className="absolute inset-0 rounded-full bg-green-500/10 blur-3xl" />

              <Image
                src="/assets/home/hero-phone.png"
                alt="Kravy POS Dashboard"
                width={1000}
                height={1000}
                priority
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_60px_rgba(34,197,94,0.15)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
