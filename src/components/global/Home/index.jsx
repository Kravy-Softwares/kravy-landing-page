"use client";
import Hero from "./Hero";
import React from "react";
import Testimonials from "./Reviews";
import AppDownload from "./AppDownload";
import FeaturesGrid from "@/components/global/Home/Feature";

export default function Home() {
  return (
    <div className="w-full text-neutral-900 dark:text-white transition-colors duration-300">
      <Hero />
      <FeaturesGrid />
      <Testimonials />
      <AppDownload />
    </div>
  );
}
