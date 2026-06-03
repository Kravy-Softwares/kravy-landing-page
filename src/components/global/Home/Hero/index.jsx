"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingTag from "../../floating-tag";
import { GradientText } from "../../GradientTextButton/GradientText";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[85vh] items-center gap-12 py-10 md:py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 flex justify-center lg:justify-start"
            >
              <GradientText />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center text-4xl font-black leading-[1.05] tracking-[-0.04em] text-gray-900 sm:text-5xl md:text-6xl lg:mx-0 lg:text-left xl:text-7xl dark:text-white"
            >
              Take Orders.
              <br />
              Create Bills.
              <br />
              <span className="text-primary-600">Grow Faster.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 lg:text-left dark:text-gray-300"
            >
              Manage billing, inventory, QR ordering, kitchen operations, customer engagement and
              sales reporting from one platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}`}
                target="_blank"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary-600 px-7 font-semibold text-white shadow-lg shadow-primary-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-700"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#features"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-gray-200 bg-white px-7 font-medium text-gray-900 transition-all duration-300 hover:border-primary-300 hover:bg-primary-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:border-primary-700 dark:hover:bg-primary-950/30"
              >
                Explore Features
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 mx-auto flex w-full max-w-[650px] justify-center lg:order-2 lg:max-w-[750px]"
          >
            <FloatingTag
              icon="🧾"
              label="Print Bills"
              delay={0}
              className="left-0 top-[15%] hidden sm:flex"
            />

            <FloatingTag
              icon="📱"
              label="QR Ordering"
              delay={0.2}
              className="right-0 top-[18%] hidden sm:flex"
            />

            <FloatingTag
              icon="🍽️"
              label="Floor Management"
              delay={0.4}
              className="left-0 bottom-[30%] hidden md:flex"
            />

            <FloatingTag
              icon="💬"
              label="WhatsApp Marketing"
              delay={0.6}
              className="right-0 bottom-[30%] hidden md:flex"
            />

            <FloatingTag
              icon="🖨️"
              label="Bluetooth Printer"
              delay={0.8}
              className="left-[8%] bottom-[8%] hidden xl:flex"
            />

            <FloatingTag
              icon="📊"
              label="Analytics"
              delay={1}
              className="right-[8%] bottom-[8%] hidden xl:flex"
            />

            <Image
              src="/assets/home/hero-phone.png"
              alt="Kravy Restaurant Billing Software"
              width={1200}
              height={1200}
              priority
              className="relative z-10 h-auto w-full max-w-[280px] sm:max-w-[360px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[620px] drop-shadow-[0_30px_80px_rgba(99,102,241,0.25)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
