import { IMAGES } from "@/constants/images";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.kravy.in";

export const siteMetadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Kravy – Smart Billing Software for Restaurants & Shops",
    template: "%s | Kravy Billing Software",
  },

  description: "Kravy provides a smart billing software solution built for restaurants and small businesses to manage sales, POS billing, and invoices.",

  keywords: ["restaurant billing software", "POS software India", "billing software for shops", "restaurant POS system", "invoice billing software", "Kravy POS"],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: "Kravy – Smart Billing Software for Restaurants & Shops",
    description: "A modern POS solution with cloud-based billing software. Simplify your sales, inventory, and invoices with Kravy.",
    url: BASE_URL,
    siteName: "Kravy",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: `${BASE_URL}${IMAGES.OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Kravy Billing Software",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kravy – Billing Made Easy",
    description: "Cloud POS software for restaurants and small businesses.",

    images: [`${BASE_URL}${IMAGES.OG_IMAGE}`],
  },
};
