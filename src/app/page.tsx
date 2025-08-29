"use client";

import { useMemo, useState } from "react";
import { DetailView } from "./components/DetailView";
import { KpiSection } from "./components/KpiSection";
import { ClearDataButton } from "./components/ClearDataButton";
import { CategorySection } from "./components/CategorySection";
import { DashboardLayout } from "./components/DashboardLayout";
import { jsonData, categoryBarSeriesByCategory, categoryHeaderKpis, categorySpecificKpis } from "@/data/mock";
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

  const handleExpand = (category: string) => {
    setExpanded({ isOpen: true, title: category });
    updateKpiValues(category);
  };

  const handleBack = () => {
    setExpanded({ isOpen: false, title: "" });
    resetKpiValues();
  };

  const handleClearData = () => {
    // Add clear data logic here
    console.log("Clear data clicked");
  };

  return (
    <DashboardLayout>
      {/* Category Heading - Only show when expanded */}
      {expanded.isOpen && (
        <div className="text-base font-semibold mb-4">{expanded.title} data</div>
      )}
      
      {/* KPI Section */}
      <KpiSection 
        kpis={dynamicKpis} 
        isDetailView={expanded.isOpen} 
      />

      {/* Clear Data Button - Only show when not in DetailView */}
      {!expanded.isOpen && (
        <ClearDataButton onClear={handleClearData} />
      )}

      {/* Category Cards Section or Detail View */}
      {expanded.isOpen ? (
        <DetailView 
          onBack={handleBack}
          sectionTitle={expanded.title} 
        />
      ) : (
        <CategorySection 
          categoryData={categoryData}
          categoryHeaderKpis={categoryHeaderKpis}
          onExpand={handleExpand}
        />
      )}
    </DashboardLayout>
  );
}
