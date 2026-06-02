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
import FeaturesGrid from "@/components/global/Home/Feature";
import BillFeatureShowcase from "@/components/global/Home/Feature/BillFeatureShowCase";

export default function Home() {
  return (
    <div className="w-full text-neutral-900 dark:text-white transition-colors duration-300">
      <Hero />
      <FeaturesGrid />
      <Testimonials />

      <BillFeatureShowcase
        billImage="/assets/home/bill.jpeg"
        hotspots={[
          {
            id: "logo",
            title: "Restaurant Branding",
            description: "Your logo appears on every receipt.",
            x: 50,
            y: 12,
            side: "left",
          },
          {
            id: "customer",
            title: "Customer Details",
            description: "Capture customer name and phone.",
            x: 50,
            y: 25,
            side: "right",
          },
          {
            id: "token",
            title: "Token Number",
            description: "Faster pickup and table management.",
            x: 50,
            y: 38,
            side: "left",
          },
          {
            id: "items",
            title: "Purchased Items",
            description: "Detailed order summary.",
            x: 50,
            y: 55,
            side: "right",
          },
          {
            id: "upi",
            title: "UPI QR Payment",
            description: "Instant digital payments.",
            x: 50,
            y: 78,
            side: "left",
          },
          {
            id: "feedback",
            title: "Feedback QR",
            description: "Collect customer reviews.",
            x: 50,
            y: 90,
            side: "right",
          },
        ]}
      />

      {/* <MasonryGallery /> */}

      {/* <InstagramReels />
      <ZomatoApproved />
      <OutletCompare />
      <WhyChooseUs />
      <PricingSection />
      <AboutPlatform />
      <Testimonials /> */}
      <AppDownload />
    </div>
  );
}
