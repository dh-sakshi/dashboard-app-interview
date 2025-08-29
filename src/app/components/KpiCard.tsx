"use client";

import { type ComponentType } from "react";
import { LineChart, FileText, ShoppingCart, BarChart2, Info } from "lucide-react";

const icons: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "total-spend": LineChart,
  "transactions": FileText,
  "po": ShoppingCart,
  "misc": BarChart2
};

export function KpiCard({ 
  label, 
  value, 
  sub, 
  type, 
  extraText,
  isActive = false,
  variant = "default"
}: { 
  label: string;
  value: string;
  sub: string;
  type: "total-spend" | "transactions" | "po" | "misc";
  extraText?: string;
  isActive?: boolean;
  variant?: "default" | "detail";
}) {
  const Icon = icons[type];
  
  // Extract the change value and direction
  const match = sub.match(/\(([-+]\d+\.?\d*\s*[KMB])\)/);
  const change = match ? match[1] : "";
  const isPositive = change.startsWith('+');
  const isNegative = change.startsWith('-');
  
  // Detail view variant styling
  if (variant === "detail") {
    return (
      <div className="h-[124px] relative overflow-visible group cursor-pointer">
        <div className="absolute inset-0 origin-center transition-transform duration-200 ease-out group-hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gray-50/80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
          
          <div className="relative z-10 py-5 px-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon className="w-[18px] h-[18px] text-gray-500 group-hover:text-gray-600 transition-colors duration-200" strokeWidth={1.5} />
                <span className="text-[14px] text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-200">{label}</span>
              </div>
              <Info className="w-[14px] h-[14px] text-gray-400 group-hover:text-gray-500 transition-colors duration-200" />
            </div>
            
            <div className="flex items-baseline gap-1.5 mb-2.5">
              <div className="text-[28px] font-bold text-gray-900 leading-none tracking-tight">{value}</div>
              {extraText && (
                <div className="text-[12px] text-gray-500 font-normal leading-tight ml-1.5">{extraText}</div>
              )}
            </div>
            
            <div className="text-[12px] leading-tight">
              <span className="text-gray-600">{sub.split('(')[0]}</span>
              {change && (
                <span className="whitespace-nowrap ml-1">
                  <span className={isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-gray-600'}>
                    {change}
                  </span>
                  <span className={`ml-1 ${isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-gray-600'}`}>
                    <span className="inline-block transform translate-y-[-1px] text-[9px]">{isPositive ? '▲' : '▼'}</span>
                    <span className="ml-0.5">{Math.abs(2.67)}% YOY</span>
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant styling
  return (
    <div className="h-[124px] relative overflow-visible group cursor-pointer">
      {/* Container for scale animation */}
      <div className="absolute inset-0 origin-center transition-transform duration-200 ease-out group-hover:scale-[1.02]">
        {/* Hover highlight effect */}
        <div className="absolute inset-0 bg-gray-50/80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
        
        {/* Content */}
        <div className="relative z-10 py-5 px-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Icon className="w-[18px] h-[18px] text-gray-500 group-hover:text-gray-600 transition-colors duration-200" strokeWidth={1.5} />
              <span className="text-[14px] text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-200">{label}</span>
            </div>
            <Info className="w-[14px] h-[14px] text-gray-400 group-hover:text-gray-500 transition-colors duration-200" />
          </div>
          
          <div className="flex items-baseline gap-1.5 mb-2.5">
            <div className={`text-[28px] ${isActive ? 'font-bold' : 'group-hover:font-semibold font-normal'} text-gray-900 leading-none tracking-tight transition-all duration-200`}>{value}</div>
            {extraText && (
              <div className="text-[12px] text-gray-500 font-normal leading-tight ml-1.5">{extraText}</div>
            )}
          </div>
          
          <div className="text-[12px] leading-tight">
            <span className="text-gray-600">{sub.split('(')[0]}</span>
            {change && (
              <span className="whitespace-nowrap ml-1">
                <span className={isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-gray-600'}>
                  {change}
                </span>
                <span className={`ml-1 ${isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-gray-600'}`}>
                  <span className="inline-block transform translate-y-[-1px] text-[9px]">{isPositive ? '▲' : '▼'}</span>
                  <span className="ml-0.5">{Math.abs(2.67)}% YOY</span>
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


