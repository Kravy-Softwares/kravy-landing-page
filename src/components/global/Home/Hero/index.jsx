"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GradientText } from "../../GradientTextButton/GradientText";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1 text-left">
            <motion.div className="mb-4 flex items-left justify-center lg:justify-start">
              <GradientText />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-center lg:text-left text-4xl font-black leading-[1.05] tracking-[-0.04em] text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl dark:text-white"
            >
              Take Orders.
              <br />
              Create Bills. <span className="text-primary-600">Grow Faster.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-5 max-w-xl text-center text-base leading-relaxed text-gray-600 md:text-lg lg:text-left dark:text-gray-300"
            >
              Everything your restaurant needs to manage billing, inventory, QR ordering and sales
              reporting from a single platform.
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
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-700"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-medium text-gray-900 transition-all duration-300 hover:border-primary-300 hover:bg-primary-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:border-primary-700 dark:hover:bg-primary-950/30"
              >
                Explore Features
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <Image
              src="/assets/home/hero-phone.png"
              alt="Kravy POS Dashboard"
              width={1000}
              height={1000}
              priority
              className="relative z-10 h-auto w-full drop-shadow-[0_20px_60px_rgba(79,70,229,0.25)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
