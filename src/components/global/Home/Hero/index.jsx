"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HERO_VIDEO_URL } from "@/constants/pages/home";
import { GradientText } from "../../GradientTextButton/GradientText";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const Hero = () => {
  return (
    <section className="relative bg-grid overflow-hidden">
      <div className="relative flex max-w-7xl flex-col items-center justify-center pt-16 px-6 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <GradientText />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white text-4xl md:text-7xl"
        >
          Take Orders. Create Bills.
          <br />
          <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">
            Grow Faster.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 max-w-6xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-sm md:text-xl"
        >
          Manage billing, orders, sales reports, inventory, and customer relationships from one
          powerful Tool
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#features"
            className="rounded-2xl border border-gray-300 bg-white px-8 py-4 font-medium text-gray-900 transition-all duration-300 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            Explore Features
          </a>
          <Link
            href={`${process.env.NEXT_KRAVY_BILLING_APP_BASE_URL}`}
            target="_blank"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Start Free Trial →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </motion.div>

        <div className="mt-12 md:mt-20">
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc={HERO_VIDEO_URL}
            thumbnailSrc="https://i.pinimg.com/1200x/94/a0/1c/94a01cef887d3067022d4f93d7e6e3a7.jpg"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
