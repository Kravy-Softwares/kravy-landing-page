import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import AppShell from "@/components/global/AppShell";
import { CartProvider } from "@/context/CartContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppBubble from "@/components/global/WhatsAppBubble";
import { siteMetadata } from "@/config/metadata/site-metadata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = siteMetadata;
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <CartProvider>
          <AppShell>{children}</AppShell>
          <WhatsAppBubble />
        </CartProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
