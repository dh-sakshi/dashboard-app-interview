"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, Area, ComposedChart } from "recharts";
import { MONTHS, jsonData } from "@/data/mock";
import { KpiCard } from "./KpiCard";
import { useLiveSeries } from "@/hooks/useLiveSeries";
import type { MonthlyPoint } from "@/types";

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
  const initial: MonthlyPoint[] = MONTHS.map((m, i) => ({
    month: m,
    value: 80 + Math.round(Math.sin(i / 2) * 30 + Math.random() * 10),
    estimate: 100 + Math.round(Math.cos(i / 2) * 20),
  }));
  const series = useLiveSeries(initial);

  // Horizontal bar chart data for suppliers
  const supplierData = [
    { name: "SKF 1", value: 32, color: "#1e3a8a" },
    { name: "SKF 2", value: 26, color: "#3b82f6" },
    { name: "SKF 3", value: 14, color: "#06b6d4" },
    { name: "SKF 4", value: 11, color: "#0891b2" },
    { name: "SKF 5", value: 7, color: "#0d9488" },
    { name: "SKF 6", value: 4, color: "#1e40af" },
    { name: "SKF 7", value: 3, color: "#7dd3fc" },
  ];

  return (
    <div className="fixed inset-0 z-50 p-4 sm:p-6 md:p-8 bg-white !bg-white overflow-y-auto" style={{ backgroundColor: 'white' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="text-base font-semibold">Regional spend</div>
        </div>

        {/* KPI Section */}
        <section className="mb-6">
          <div className="relative flex bg-white border border-gray-200 shadow-sm">
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
              <div className="group">
                <div className="relative">
                  <KpiCard 
                    label="Total spend" 
                    value="10.9M" 
                    sub="8.9M (+2M)" 
                    type="total-spend"
                  />
                </div>
              </div>
              <div className="group">
                <div className="relative">
                  <div className="absolute left-0 top-[20px] bottom-[20px] border-l border-gray-200 group-hover:opacity-0 transition-opacity duration-200" />
                  <KpiCard 
                    label="Category volatility" 
                    value="32%" 
                    sub="28% (+4%)" 
                    type="misc"
                  />
                </div>
              </div>
              <div className="group">
                <div className="relative">
                  <div className="absolute left-0 top-[20px] bottom-[20px] border-l border-gray-200 group-hover:opacity-0 transition-opacity duration-200" />
                  <KpiCard 
                    label="Spend link to indexes" 
                    value="7.07M" 
                    sub="6.5M (+0.57M)" 
                    type="transactions"
                  />
                </div>
              </div>
              <div className="group">
                <div className="relative">
                  <div className="absolute left-0 top-[20px] bottom-[20px] border-l border-gray-200 group-hover:opacity-0 transition-opacity duration-200" />
                  <KpiCard 
                    label="Regional efficiency" 
                    value="89%" 
                    sub="85% (+4%)" 
                    type="po"
                  />
                </div>
              </div>
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

        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
            <ArrowLeft size={16} /> Back
          </button>
          <button className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">{sectionTitle} data</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section - KPIs and Horizontal Bar Chart */}
          <div className="space-y-6">


            {/* Horizontal Bar Chart */}
            <div className="border p-4">
              <div className="text-sm font-medium mb-4">Spend by top 10 supplier influencing your portfolio:</div>
              
              {/* Segmented Horizontal Bar */}
              <div className="mb-4">
                <div className="flex h-8 bg-gray-200 overflow-hidden">
                  <div 
                    className="h-full bg-[#1e3a8a] flex items-center justify-center text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0s_forwards] opacity-0" 
                    style={{ width: '32%' }}
                    title="SKF - 32% of total spend"
                  >
                    32%
                  </div>
                  <div 
                    className="h-full bg-sky-400 flex items-center justify-center text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.1s_forwards] opacity-0" 
                    style={{ width: '26%' }}
                    title="SKF - 26% of total spend"
                  >
                    26%
                  </div>
                  <div 
                    className="h-full bg-sky-300 flex items-center justify-center text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.2s_forwards] opacity-0" 
                    style={{ width: '14%' }}
                    title="SKF - 14% of total spend"
                  >
                    14%
                  </div>
                  <div 
                    className="h-full bg-sky-500 flex items-center justify-center text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.3s_forwards] opacity-0" 
                    style={{ width: '11%' }}
                    title="SKF - 11% of total spend"
                  >
                    11%
                  </div>
                  <div 
                    className="h-full bg-sky-600 flex items-center justify-center text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.4s_forwards] opacity-0" 
                    style={{ width: '7%' }}
                    title="SKF - 7% of total spend"
                  >
                    7%
                  </div>
                  <div 
                    className="h-full bg-sky-700 flex items-center justify-center text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.5s_forwards] opacity-0" 
                    style={{ width: '4%' }}
                    title="SKF - 4% of total spend"
                  >
                    4%
                  </div>
                  <div 
                    className="h-full bg-sky-200 flex items-center justify-center text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.6s_forwards] opacity-0" 
                    style={{ width: '3%' }}
                    title="SKF - 3% of total spend"
                  >
                    3%
                  </div>
                  <div 
                    className="h-full bg-[#1e3a8a] flex items-center justify-center text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.7s_forwards] opacity-0" 
                    style={{ width: '2%' }}
                    title="SKF - 2% of total spend"
                  >
                    2%
                  </div>
                  <div 
                    className="h-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.8s_forwards] opacity-0" 
                    style={{ width: '1%' }}
                    title="SKF - 1% of total spend"
                  >
                    1%
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1e3a8a]"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-300"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-500"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-600"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-700"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-200"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1e3a8a]"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Market Mix Index Line Chart */}
          <div className="rounded-xl border p-4">
            <div className="text-sm font-medium mb-4">Market mix index</div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={series}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" domain={[50, 250]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    dataKey="estimate"
                    fill="#e0f2fe"
                    stroke="none"
                    fillOpacity={0.3}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#1e3a8a"
                    strokeWidth={2}
                    dot={{ fill: "#1e3a8a", r: 4 }}
                    name="Purchase price"
                  />
                  <Line
                    type="monotone"
                    dataKey="estimate"
                    stroke="#06b6d4"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "#06b6d4", r: 4 }}
                    name="Estimated price"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


