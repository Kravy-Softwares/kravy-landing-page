import PricingSection from "@/components/global/Home/Pricing";
import React from "react";
import { COMPANY } from "@/constants";

export const metadata = {
  title: `Pricing - ${COMPANY.NAME}`,
  description: `Explore ${COMPANY.NAME} pricing plans for our smart billing software designed to help businesses manage invoices, orders, and payments easily.`,
  keywords: [
    `${COMPANY.NAME} pricing`,
    "billing software pricing",
    "invoice management software",
    "POS billing system",
    "business billing solution",
  ],
  authors: [{ name: `${COMPANY.NAME} Team`, email: COMPANY.EMAIL }],
  robots: "index, follow",

  openGraph: {
    title: `Pricing - ${COMPANY.NAME}`,
    description: `Discover affordable billing software plans at ${COMPANY.NAME} to manage invoices, orders, and payments efficiently.`,
    url: `${COMPANY.DOMAIN}/pricing`,
    type: "website",
    images: [
      {
        url: `${COMPANY.DOMAIN}/logo.png`,
        width: 1200,
        height: 630,
        alt: `${COMPANY.NAME} Logo`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Pricing - ${COMPANY.NAME}`,
    description: `Check pricing plans for ${COMPANY.NAME} billing software and simplify your business billing process.`,
  },
};

const PricingPage = () => {
  return (
    <div className="w-full bg-grid h-full flex items-center justify-center py-16">
      <PricingSection />
    </div>
  );
};

export default PricingPage;
