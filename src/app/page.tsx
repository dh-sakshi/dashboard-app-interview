"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DetailView } from "./components/DetailView";
import { CategoryCard } from "./components/CategoryCard";
import { KpiCard } from "./components/KpiCard";
import { jsonData, Kpi } from "@/data/mock";
import type { CategoryBarPoint } from "@/types";

export default function Dashboard() {
  const [expanded, setExpanded] = useState({ isOpen: false, title: "" });

  const categoryData: CategoryBarPoint[] = useMemo(
    () => [
      { label: "01", a: 130, b: 120 }, // Total: 250K
      { label: "02", a: 60, b: 55 },   // Total: 115K
      { label: "03", a: 70, b: 65 },   // Total: 135K
      { label: "04", a: 50, b: 45 },   // Total: 95K
      { label: "05", a: 65, b: 60 },   // Total: 125K
      { label: "06", a: 45, b: 40 },   // Total: 85K
      { label: "07", a: 55, b: 50 },   // Total: 105K
      { label: "08", a: 70, b: 65 },   // Total: 135K
    ],
    []
  );

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold text-gray-900">Welcome back, Sakshi</h1>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Edit KPIs
              </button>
              <button className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
                Create your dashboard
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-4">
        {/* KPI Section */}
        <section className="mb-6">
          <div className="relative flex bg-white rounded-lg border border-gray-200">
            {/* Left Navigation Arrow */}
            <div className="flex items-center">
              <button className="h-[104px] w-8 flex items-center justify-center text-gray-400 hover:text-gray-600 border-r border-gray-200 hover:bg-gray-50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 15 6 L 9 12 L 15 18" />
                </svg>
              </button>
            </div>
            
            {/* KPI Cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {jsonData.kpis.map((k: Kpi, index) => (
                <div key={k.label} className="group">
                  <div className="relative">
                    {index !== 0 && (
                      <div className="absolute left-0 top-[20px] bottom-[20px] border-l border-gray-200 group-hover:opacity-0 transition-opacity duration-200" />
                    )}
                    <KpiCard 
                      label={k.label} 
                      value={k.value} 
                      sub={k.sub} 
                      type={k.type}
                      extraText={k.extraText}
                      isActive={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Navigation Arrow */}
            <div className="flex items-center">
              <button className="h-[104px] w-8 flex items-center justify-center text-gray-400 hover:text-gray-600 border-l border-gray-200 hover:bg-gray-50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 9 6 L 15 12 L 9 18" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Clear Data Button */}
        <section className="mb-6">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white rounded-md border border-gray-200 hover:bg-gray-50">
            <span>Clear data</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </section>

        {/* Category Cards Section */}
        <section className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 h-full">
            {jsonData.categories.map((c: string, idx: number) => (
              <motion.div key={c} layout className="h-full" transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                <CategoryCard 
                  title={c} 
                  data={categoryData} 
                  onExpand={() => setExpanded({ isOpen: true, title: c })} 
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Detail View Modal */}
      <AnimatePresence>
        {expanded.isOpen && (
          <DetailView 
            onBack={() => setExpanded({ isOpen: false, title: "" })} 
            sectionTitle={expanded.title} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
