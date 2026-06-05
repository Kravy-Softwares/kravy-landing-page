"use client";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isBridge = pathname === "/bridge";

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  if (isBridge) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="pt-12 min-h-screen">{children}</div>
      <Footer />
    </QueryClientProvider>
  );
}
