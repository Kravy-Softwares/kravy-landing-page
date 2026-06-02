import { Instagram, Linkedin, Twitter } from "lucide-react";

export const FOOTER_LINKS = {
  solutions: [
    { name: "3-Click Billing", href: "/#features" },
    { name: "QR Table Ordering", href: "/#features" },
    { name: "Thermal Printing", href: "/#compare" },
    { name: "Sales Analytics", href: "/#pricing" },
  ],

  company: [
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blog" },
    { name: "Updates", href: "/updates" },
    { name: "Contact", href: "/contact" },
  ],

  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-and-conditions" },
    { name: "Refund Policy", href: "/cancellation-and-refund-policy" },
    { name: "Sitemap", href: "/sitemap" },
  ],
};

export const SOCIAL_LINKS = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/kravy_billing",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: Twitter,
    href: "#",
  },
];

export const FOOTER_DESCRIPTION =
  "Your all-in-one platform for billing, inventory, sales analytics, and business growth.";
