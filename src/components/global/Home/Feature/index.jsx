"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import FeatureCard from "./Card";
import SectionWrapper from "@/components/global/SectionWrapper";
import { featureService } from "@/services/feature";
import { LoaderCircle } from "lucide-react";

export default function FeaturesGrid() {
  const {
    data: features = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["features"],
    queryFn: featureService.getFeatures,
    staleTime: 1000 * 60 * 5,
  });

  console.log("Features data:", features);

  return (
    <SectionWrapper
      title="Everything your Restaurant needs"
      description="Manage orders, payments, customer engagement and analytics from one powerful platform."
    >
      {isPending ? (
        <div className="flex items-center justify-center p-8">
          <LoaderCircle className="h-12 w-12 animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex min-h-[250px] items-center justify-center rounded-3xl border border-destructive/20 bg-destructive/5 p-8 text-center">
          <div>
            <h3 className="text-lg font-semibold">Failed to load features</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {error?.message || "Something went wrong."}
            </p>
          </div>
        </div>
      ) : features.length === 0 ? (
        <div className="flex min-h-[250px] items-center justify-center rounded-3xl border border-dashed">
          <p className="text-muted-foreground">No features available.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature._id}
              className={feature.size === "large" ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
