"use client";

import { Spinner } from "@heroui/react";

/**
 * Loading UI displayed during page transitions
 * Next.js will automatically show this while loading routes
 * Features animated skeleton placeholders and ocean gradient
 */
export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-background ocean-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl wave-animation"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl wave-animation-slow"></div>
      </div>

      {/* Navbar skeleton */}
      <div className="w-full border-b border-divider/50 bg-background/70 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-content2 shimmer"></div>
              <div className="w-48 h-6 rounded bg-content2 shimmer"></div>
            </div>
            <div className="w-10 h-10 rounded-full bg-content2 shimmer"></div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-32 h-6 mx-auto mb-4 rounded-full bg-content2 shimmer"></div>
          <div className="w-3/4 max-w-2xl h-12 mx-auto mb-4 rounded bg-content2 shimmer"></div>
          <div className="w-2/3 max-w-xl h-6 mx-auto rounded bg-content2 shimmer"></div>
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-effect p-6 rounded-lg border border-divider/50">
              <div className="flex gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-content2 shimmer"></div>
                <div className="flex-1">
                  <div className="w-32 h-5 mb-2 rounded bg-content2 shimmer"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-4 rounded bg-content2 shimmer"></div>
                <div className="w-5/6 h-4 rounded bg-content2 shimmer"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons skeleton */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="w-full sm:w-40 h-12 rounded-lg bg-content2 shimmer"></div>
          <div className="w-full sm:w-40 h-12 rounded-lg bg-content2 shimmer"></div>
        </div>

        {/* Spinner overlay */}
        <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-50">
          <div className="text-center">
            <Spinner
              size="lg"
              color="primary"
              label="Carregando..."
              classNames={{
                label: "text-foreground-600",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
