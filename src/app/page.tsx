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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold text-gray-900">Welcome back, Sakshi</h1>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7L10 17L5 12"/>
                </svg>
                Bearings
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation and Filter Bar */}
      <div className="bg-gray-100 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Left Side - Navigation Tabs */}
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2 text-blue-600 border-b-2 border-blue-600 pb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16"/>
                </svg>
                <span className="text-sm font-medium">Spend</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
                <span className="text-sm font-medium">Market</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span className="text-sm font-medium">Suppliers</span>
              </div>
            </div>

            {/* Right Side - Filter Controls and Action Button */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Currency Dropdown */}
              <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1">Currency</label>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>EURO</option>
                    <option>USD</option>
                    <option>GBP</option>
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>

              {/* Period Dropdown */}
              <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1">Period</label>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>2024-2025</option>
                    <option>2023-2024</option>
                    <option>2022-2023</option>
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>

              {/* Filters Button */}
              <button className="px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"/>
                  <line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/>
                  <line x1="3" y1="12" x2="3.01" y2="12"/>
                  <line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
                Filters
              </button>

              {/* Create Your Dashboard Button */}
              <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Create your dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* KPI Section */}
        <section className="mb-6">
          <div className="relative flex bg-white border-2 border-gray-300">
            {/* Left Navigation Arrow */}
            <div className="flex items-center">
              <button className="h-[104px] w-8 flex items-center justify-center text-gray-400 hover:text-gray-600 border-r border-gray-200 hover:bg-gray-50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 15 6 L 9 12 L 15 18" />
                </svg>
              </button>
            </div>
            
            {/* KPI Cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-gray-50 p-4">
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
