"use client";

import React from "react";
import { DetailViewHeader } from "./DetailViewHeader";
import { KpiMetricsSection } from "./KpiMetricsSection";
import { HorizontalBarChart } from "./HorizontalBarChart";
import { MarketMixChart } from "./MarketMixChart";

export function DetailView({ onBack, sectionTitle }: { onBack: () => void; sectionTitle: string }) {
  // CSS keyframes for chart animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full">
      <DetailViewHeader onBack={onBack} sectionTitle={sectionTitle} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section - Horizontal Bar Chart */}
        <div className="space-y-6">
          <div className="bg-white p-4 flex flex-col min-h-60">
            <KpiMetricsSection 
              totalSpend="10.9M"
              categoryVolatility="32%"
              spendLinkToIndexes="7.07M"
            />
            <HorizontalBarChart title="Spend by top 10 suppliers influencing your portfolio:" />
          </div>
        </div>

        {/* Right Section - Market Mix Index Line Chart */}
        <MarketMixChart title="Market mix index" />
      </div>
    </div>
  );
}


