"use client";
import { QrCode, Smartphone, Star, BellRing, ShieldCheck, Users, SearchX } from "lucide-react";
import React from "react";
import FeatureCard from "./Card";
import SectionWrapper from "@/components/global/SectionWrapper";

export const FEATURES = [
  {
    id: 1,
    title: "1. QR Ordering",
    description: "Customers scan a QR code and place orders directly from their phone.",
    icon: QrCode,
    badge: "Popular",
    size: "large",
  },
  {
    id: 2,
    title: "2. Live Order Tracking",
    description: "Track every order from placement to kitchen preparation in real time.",
    icon: Smartphone,
    size: "medium",
  },
  {
    id: 3,
    title: "3. Customer Reviews",
    description: "Collect ratings and feedback directly after dining.",
    icon: Star,
    size: "medium",
  },
  {
    id: 4,
    title: "4. Staff Notifications",
    description: "Instant alerts for new orders, waiter calls and billing requests.",
    icon: BellRing,
    size: "medium",
  },
  {
    id: 5,
    title: "5. Secure Payments",
    description: "Accept payments safely with integrated payment gateways.",
    icon: ShieldCheck,
    size: "large",
  },
  {
    id: 6,
    title: "6. Customer CRM",
    description: "Capture customer data and build repeat business.",
    icon: Users,
    size: "medium",
  },
];

export default function FeaturesGrid() {
  return (
    <div>
      <SectionWrapper
        title="Everything your Restaurant needs."
        description="Manage orders, payments, customer engagement and analytics from one powerful platform."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.id} className={feature.size === "large" ? "md:col-span-2" : ""}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
    // <section
    //   className="w-full bg-gradient-to-b
    //         from-zinc-50
    //         to-white py-24"
    // >
    //   <div className="mx-auto max-w-7xl px-4">
    //     <div className="mb-16 text-center">
    //       <h2 className="mt-6 text-5xl font-bold tracking-tight">
    //         Everything your restaurant needs
    //       </h2>

    //       <p className="mt-4 text-lg text-zinc-500 max-w-2xl mx-auto">
    //         Manage orders, payments, customer engagement and analytics from one powerful platform.
    //       </p>
    //     </div>

    // <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    //   {FEATURES.map((feature) => (
    //     <div key={feature.id} className={feature.size === "large" ? "md:col-span-2" : ""}>
    //       <FeatureCard {...feature} />
    //     </div>
    //   ))}
    // </div>
    //   </div>
    // </section>
  );
}
