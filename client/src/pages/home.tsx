import { lazy, Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load non-critical components
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Component fallback skeleton
const SectionSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`pt-2 pb-2 lg:pt-3 lg:pb-3 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Skeleton className="h-8 w-48 mb-6" />
      <Skeleton className="h-4 w-full mb-4" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <Skeleton className="h-32 w-full" />
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="font-inter bg-white">
      {/* Critical components - load immediately */}
      <Header />
      <Hero />
      
      {/* Non-critical components - lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}
