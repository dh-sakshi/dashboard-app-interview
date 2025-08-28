"use client";

import { Expand, MoreHorizontal } from "lucide-react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ReferenceLine } from "recharts";
import type { CategoryBarPoint } from "@/types";

export function CategoryCard({
  title,
  onExpand,
  data,
}: {
  title: string;
  onExpand: () => void;
  data: CategoryBarPoint[];
}) {
  return (
    <div className="relative group cursor-pointer">
      {/* Scale container */}
      <div className="absolute inset-0 origin-center transition-transform duration-200 ease-out group-hover:scale-[1.02]">
        {/* Hover highlight effect */}
        <div className="absolute inset-0 bg-gray-50/80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
        
        {/* Content */}
        <div className="relative z-10 bg-white p-3 h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex h-5 w-5 items-center justify-center text-[13px]">📄</span>
              <span className="text-[13px] font-medium text-gray-900">{title}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <button onClick={onExpand} className="p-0.5 hover:text-gray-600" aria-label="Expand">
                <Expand size={14} />
              </button>
              <button className="p-0.5 hover:text-gray-600" aria-label="More actions">
                <MoreHorizontal size={14} />
              </button>
            </div>
          </div>
          
          {/* Subtitle */}
          <div className="text-[11px] text-gray-500 mb-2">Plants by key levers and impact</div>
          
          {/* KPI Metrics */}
          <div className="grid grid-cols-3 gap-x-1 mb-4">
            <div>
              <div className="text-[10px] text-gray-500 mb-0.5 whitespace-nowrap">Regional spend</div>
              <div className="text-[12px] font-medium text-gray-900">12.3M</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 mb-0.5 whitespace-nowrap">On time delivery rate</div>
              <div className="text-[12px] font-medium text-gray-900">46.8%</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 mb-0.5 whitespace-nowrap">Contract compliance</div>
              <div className="text-[12px] font-medium text-gray-900">21 days</div>
            </div>
          </div>
          
          {/* Chart Container */}
          <div className="flex-1 flex flex-col min-h-0 mt-2">
            {/* Chart */}
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barSize={12} barGap={0} margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="label" 
                    stroke="#9ca3af" 
                    fontSize={9}
                    tickLine={false}
                    axisLine={{ stroke: '#e5e7eb' }}
                  />
                  <YAxis 
                    stroke="#9ca3af"
                    fontSize={9}
                    tickLine={false}
                    axisLine={{ stroke: '#e5e7eb' }}
                    domain={[0, 250]} 
                    ticks={[0, 50, 100, 150, 200, 250]}
                    tickFormatter={(value) => `${value}K`}
                    interval={0}
                  />
                  <ReferenceLine y={220} stroke="#e5e7eb" strokeDasharray="3 3" />
                  <Bar dataKey="a" fill="#60a5fa" name="Consumables" radius={0} stackId="stack" />
                  <Bar dataKey="b" fill="#1e293b" name="Non-consumables" radius={0} stackId="stack" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div>
              <div className="flex items-center gap-3 text-[9px] mb-0.5">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400"></div>
                  <span className="text-gray-600">Consumables</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-900"></div>
                  <span className="text-gray-600">Non-consumables</span>
                </div>
              </div>
              <div className="text-[9px] text-gray-500">Spend, (USD)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}