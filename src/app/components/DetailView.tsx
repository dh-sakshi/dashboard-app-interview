"use client";

import { Shrink } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, Area, ComposedChart } from "recharts";
import { MONTHS, jsonData } from "@/data/mock";
import { useLiveSeries } from "@/hooks/useLiveSeries";
import type { MonthlyPoint } from "@/types";
import { KpiCard } from "./KpiCard";

export function DetailView({ onBack, sectionTitle }: { onBack: () => void; sectionTitle: string }) {
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
    <div className="fixed inset-0 z-50 p-4 sm:p-6 md:p-8 bg-white dark:bg-neutral-900 overflow-y-auto">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="text-base font-semibold">Regional spend</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {jsonData.kpis.map((k) => (
            <KpiCard key={k.label} label={k.label} value={k.value} sub={k.sub} type={k.type} />
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">
            <Shrink size={16} /> Back
          </button>
          <button className="px-3 py-1.5 rounded-md border text-sm font-medium">{sectionTitle} data</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section - KPIs and Horizontal Bar Chart */}
          <div className="space-y-6">
            {/* KPI Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border p-4">
                <div className="text-sm font-medium text-gray-500 mb-2">Total spend</div>
                <div className="text-2xl font-bold">10.9M</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-sm font-medium text-gray-500 mb-2">Category volatility</div>
                <div className="text-2xl font-bold">32%</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-sm font-medium text-gray-500 mb-2">Spend link to indexes</div>
                <div className="text-2xl font-bold">7.07M</div>
              </div>
            </div>

            {/* Horizontal Bar Chart */}
            <div className="rounded-xl border p-4">
              <div className="text-sm font-medium mb-4">Spend by top 10 supplier influencing your portfolio:</div>
              
              {/* Segmented Horizontal Bar */}
              <div className="mb-4">
                <div className="flex h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1e3a8a] flex items-center justify-center text-white text-xs font-medium" style={{ width: '32%' }}>
                    32%
                  </div>
                  <div className="h-full bg-[#3b82f6] flex items-center justify-center text-white text-xs font-medium" style={{ width: '26%' }}>
                    26%
                  </div>
                  <div className="h-full bg-[#06b6d4] flex items-center justify-center text-white text-xs font-medium" style={{ width: '14%' }}>
                    14%
                  </div>
                  <div className="h-full bg-[#0891b2] flex items-center justify-center text-white text-xs font-medium" style={{ width: '11%' }}>
                    11%
                  </div>
                  <div className="h-full bg-[#0d9488] flex items-center justify-center text-white text-xs font-medium" style={{ width: '7%' }}>
                    7%
                  </div>
                  <div className="h-full bg-[#1e40af] flex items-center justify-center text-white text-xs font-medium" style={{ width: '4%' }}>
                    4%
                  </div>
                  <div className="h-full bg-[#7dd3fc] flex items-center justify-center text-white text-xs font-medium" style={{ width: '3%' }}>
                    3%
                  </div>
                  <div className="h-full bg-[#1e3a8a] flex items-center justify-center text-white text-xs font-medium" style={{ width: '2%' }}>
                    2%
                  </div>
                  <div className="h-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-medium" style={{ width: '1%' }}>
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
                  <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#06b6d4]"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0891b2]"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0d9488]"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1e40af]"></div>
                  <span className="text-sm text-gray-600">SKF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#7dd3fc]"></div>
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


