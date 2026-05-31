"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GradientText } from "../GradientTextButton/GradientText";
import PricingSection from "./Pricing";
import Faqs from "./Faqs";
import Testimonials from "./Reviews";
import WhyChooseUs from "./whyChooseUs";
import AboutPlatform from "./AboutThisPlatform";

import OutletCompare from "./OutletCompare";
import MasonryGallery from "../galllery";
import ZomatoApproved from "./ZomatoApproved";
import InstagramReels from "./InstagramReels";
import AppDownload from "./AppDownload";
import Hero from "./Hero";
import HowItWorks from "@/components/pages/qr-menu/HowItWorks";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full text-neutral-900 dark:text-white transition-colors duration-300">
      <Hero />
      <HowItWorks />
      <Testimonials />

      {/* <MasonryGallery /> */}

      {/* <InstagramReels />
      <ZomatoApproved />
      <OutletCompare />
      <WhyChooseUs />
      <PricingSection />
      <AboutPlatform />
      <Testimonials /> */}
      {/* <AppDownload /> */}
    </div>
  );
}
