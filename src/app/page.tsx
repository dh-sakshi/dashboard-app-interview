"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DetailView } from "./components/DetailView";
import { CategoryCard } from "./components/CategoryCard";
import { KpiCard } from "./components/KpiCard";
import DashboardHeader from "./components/DashboardHeader";
import MainHeader from "./components/MainHeader";
import Sidebar from "./components/Sidebar";
import { jsonData, Kpi, categoryBarSeriesByCategory, categoryHeaderKpis, categorySpecificKpis } from "@/data/mock";
import type { CategoryBarPoint } from "@/types";

export default function Dashboard() {
  const [expanded, setExpanded] = useState({ isOpen: false, title: "" });
  
  // Dynamic KPI values based on selected category
  const [dynamicKpis, setDynamicKpis] = useState(jsonData.kpis);
  
  // Function to update KPI values when category is expanded
  const updateKpiValues = (categoryTitle: string) => {
    // Use category-specific KPI data if available, otherwise fall back to default
    if (categorySpecificKpis[categoryTitle]) {
      setDynamicKpis(categorySpecificKpis[categoryTitle]);
    } else {
      // Fallback to default KPI data
      setDynamicKpis(jsonData.kpis);
    }
  };
  
  // Function to reset KPI values when going back
  const resetKpiValues = () => {
    setDynamicKpis(jsonData.kpis);
  };

  const categoryData: CategoryBarPoint[] = useMemo(() => categoryBarSeriesByCategory.Plants, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Column - Logo + Sidebar */}
      <div className="flex flex-col">
        {/* Application Logo */}
        <div className="w-16 h-16 bg-white flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
        
        {/* Sidebar */}
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <MainHeader />
        {/* Bordered Container for Header + Content */}
        <div className="flex-1 border border-gray-200 rounded-none overflow-hidden m-4">
          {/* Navigation and Filter Bar */}
          <div className="bg-white">
            <DashboardHeader />
          </div>

          {/* Main Content */}
          <main className="flex-1 w-full pl-5 pr-4 py-2 sm:py-4">
            {/* Category Heading - Only show when expanded */}
            {expanded.isOpen && (
              <div className="text-base font-semibold mb-4">{expanded.title} data</div>
            )}
            
            {/* KPI Section */}
          <section className="mb-6">
            <div className="relative flex bg-white border border-gray-200 shadow-sm">
              {/* Left Navigation Arrow */}
              <div className="flex items-center">
                <button className="h-[104px] w-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50">
                </button>
              </div>
              <div className="w-5 h-5 border border-gray-200 bg-white rounded flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2.5 z-10">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 15 18 L 9 12 L 15 6" />
                </svg>
              </div>
              
              {/* KPI Cards */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {dynamicKpis.map((k: Kpi, index) => (
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
                        variant={expanded.isOpen ? "detail" : "default"}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Right Navigation Arrow */}
              <div className="flex items-center">
                <button className="h-[104px] w-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50">
                </button>
              </div>
              <div className="w-5 h-5 border border-gray-200 bg-white rounded flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2.5 z-10">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 9 18 L 15 12 L 9 6" />
                </svg>
              </div>
            </div>
          </section>

          {/* Clear Data Button - Only show when not in DetailView */}
          {!expanded.isOpen && (
            <section className="mb-6">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 hover:bg-gray-50">
                <span>Clear data</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </section>
          )}

          {/* Category Cards Section or Detail View */}
          <section>
            {expanded.isOpen ? (
              <DetailView 
                onBack={() => {
                  setExpanded({ isOpen: false, title: "" });
                  resetKpiValues();
                }} 
                sectionTitle={expanded.title} 
              />
            ) : (
              <>
                {/* Mobile Layout - Vertical Stack */}
                <div className="block sm:hidden flex flex-col space-y-4">
                  {jsonData.categories.map((c: string, idx: number) => (
                    <motion.div key={c} layout className="w-full" transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                      <CategoryCard 
                        title={c} 
                        data={categoryBarSeriesByCategory[c] || categoryData} 
                        header={categoryHeaderKpis[c]}
                        onExpand={() => {
                          setExpanded({ isOpen: true, title: c });
                          updateKpiValues(c);
                        }} 
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Desktop Layout - Grid */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {jsonData.categories.map((c: string, idx: number) => (
                    <motion.div key={c} layout className="w-full" transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                      <CategoryCard 
                        title={c} 
                        data={categoryBarSeriesByCategory[c] || categoryData} 
                        header={categoryHeaderKpis[c]}
                        onExpand={() => {
                          setExpanded({ isOpen: true, title: c });
                          updateKpiValues(c);
                        }} 
                      />
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </section>
        </main>
        </div>
      </div>
    </div>
  );
}
