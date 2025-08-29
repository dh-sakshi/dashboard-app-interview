import { KpiCard } from "./KpiCard";
import { Kpi } from "@/data/mock";

interface KpiSectionProps {
  kpis: Kpi[];
  isDetailView: boolean;
}

export function KpiSection({ kpis, isDetailView }: KpiSectionProps) {
  return (
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
          {kpis.map((k: Kpi, index) => (
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
                  variant={isDetailView ? "detail" : "default"}
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
  );
}
