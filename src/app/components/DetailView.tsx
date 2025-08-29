"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, Area, ComposedChart } from "recharts";
import { MONTHS, jsonData } from "@/data/mock";
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
    // Wider, more animated ranges: roughly 60% – 190%
    value: Math.round(120 + Math.sin(i / 1.6) * 60 + Math.random() * 20),
    estimate: Math.round(130 + Math.cos(i / 1.8) * 50),
  }));
  const series = useLiveSeries(initial);

  // Custom legend to match reference design
  const CustomLegend = () => {
    return (
      <div className="flex items-center justify-between w-full px-2 mt-2 text-[13px] text-gray-600">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{background:'#1e3a8a'}}></span>
            <span>Purchase price</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 border-t-2 border-dashed" style={{borderColor:'#06b6d4'}}></span>
            <span>Estimated price</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm" style={{background:'#e0f2fe'}}></span>
            <span>Price below estimate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm" style={{background:'#dbeafe'}}></span>
            <span>Price above estimate</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <button onClick={onBack} className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0094FF] text-white text-sm font-medium hover:bg-[#0080E6]">
          <ArrowLeft size={16} /> Back
        </button>
        <button className="px-3 py-1.5 rounded-md bg-white text-gray-600 text-sm font-medium border border-gray-200">
          {sectionTitle} data
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section - Horizontal Bar Chart */}
        <div className="space-y-6">
                      {/* Horizontal Bar Chart */}
            <div className="bg-white p-4 flex flex-col min-h-60">
              <div className="flex pb-4 mb-6" style={{gap: '0px'}}>
                {/* Total Spend */}
                <div className="text-left" style={{width: '33.33%'}}>
                  <p className="text-[10px] text-gray-500 mb-0.5">Total spend</p>
                  <p className="text-base font-semibold text-gray-900">10.9M</p>
                </div>

                {/* Category Volatility */}
                <div className="text-left border-l border-gray-200 pl-2" style={{width: '33.33%'}}>
                  <p className="text-[10px] text-gray-500 mb-0.5">Category volatility</p>
                  <p className="text-base font-semibold text-gray-900">32%</p>
                </div>

                {/* Spend Link to Indexes */}
                <div className="text-left border-l border-gray-200 pl-2" style={{width: '33.33%'}}>
                  <p className="text-[10px] text-gray-500 mb-0.5">Spend link to indexes</p>
                  <p className="text-base font-semibold text-gray-900">7.07M</p>
                </div>
              </div>
              <div className="text-sm font-medium mb-8 mt-8">Spend by top 10 suppliers influencing your portfolio:</div>
              
              {/* Segmented Horizontal Bar */}
              <div className="mb-4">
                <div className="flex h-8 bg-gray-200 overflow-hidden">
                  <div 
                    className="h-full flex items-center justify-end pr-1 text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0s_forwards] opacity-0" 
                    style={{ width: '22%', background: '#0f2a7a' }}
                    title="SKF - 22% of total spend"
                  >
                    22%
                  </div>
                  <div 
                    className="h-full flex items-center justify-end pr-1 text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.1s_forwards] opacity-0" 
                    style={{ width: '18%', background: '#2d5bff' }}
                    title="SKF - 18% of total spend"
                  >
                    18%
                  </div>
                  <div 
                    className="h-full flex items-center justify-end pr-1 text-gray-800 text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.2s_forwards] opacity-0" 
                    style={{ width: '16%', background: '#a7e9f0' }}
                    title="SKF - 16% of total spend"
                  >
                    16%
                  </div>
                  <div 
                    className="h-full flex items-center justify-end pr-1 text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.3s_forwards] opacity-0" 
                    style={{ width: '14%', background: '#2958ff' }}
                    title="SKF - 14% of total spend"
                  >
                    14%
                  </div>
                  <div 
                    className="h-full flex items-center justify-end pr-1 text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.4s_forwards] opacity-0" 
                    style={{ width: '12%', background: '#d6e6ff' }}
                    title="SKF - 12% of total spend"
                  >
                    12%
                  </div>
                  <div 
                    className="h-full flex items-center justify-end pr-1 text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.5s_forwards] opacity-0" 
                    style={{ width: '8%', background: '#1a3aa9' }}
                    title="SKF - 8% of total spend"
                  >
                    8%
                  </div>
                  <div 
                    className="h-full flex items-center justify-end pr-1 text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.6s_forwards] opacity-0" 
                    style={{ width: '6%', background: '#14b8a6' }}
                    title="SKF - 6% of total spend"
                  >
                    6%
                  </div>
                  <div 
                    className="h-full flex items-center justify-end pr-1 text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0.7s_forwards] opacity-0" 
                    style={{ width: '4%', background: '#243c8a' }}
                    title="SKF - 4% of total spend"
                  >
                    4%
                  </div>
                </div>
              </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 justify-start">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{background:'#0f2a7a'}}></div>
                <span className="text-sm text-gray-600">SKF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{background:'#2d5bff'}}></div>
                <span className="text-sm text-gray-600">SKF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{background:'#a7e9f0'}}></div>
                <span className="text-sm text-gray-600">SKF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{background:'#2958ff'}}></div>
                <span className="text-sm text-gray-600">SKF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{background:'#14b8a6'}}></div>
                <span className="text-sm text-gray-600">SKF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{background:'#1a3aa9'}}></div>
                <span className="text-sm text-gray-600">SKF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{background:'#d6e6ff'}}></div>
                <span className="text-sm text-gray-600">SKF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{background:'#243c8a'}}></div>
                <span className="text-sm text-gray-600">SKF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Market Mix Index Line Chart */}
        <div className="bg-white p-4 min-h-56">
          <div className="text-sm font-medium mb-4">Market mix index</div>
          <div className="h-50">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={series} margin={{ top: 10, right: 8, left: 0, bottom: 28 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" tick={{ fontSize: 12 }} axisLine={{ stroke:'#e5e7eb' }} tickLine={false} />
                <YAxis
                  stroke="#9ca3af"
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke:'#e5e7eb' }}
                  tickLine={false}
                  domain={[40, 250]}
                  ticks={[40, 80, 120, 160, 200, 250]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip formatter={(v: any) => [`${v}%`, '']} />
                <Legend verticalAlign="bottom" align="center" content={<CustomLegend />} />
                <Area
                  dataKey="estimate"
                  fill="#e0f2fe"
                  stroke="none"
                  fillOpacity={1}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1e3a8a"
                  strokeWidth={2}
                  dot={{ r: 3, fill: '#1e3a8a' }}
                  name="Purchase price"
                />
                <Line
                  type="monotone"
                  dataKey="estimate"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 3, fill: '#06b6d4' }}
                  name="Estimated price"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}


