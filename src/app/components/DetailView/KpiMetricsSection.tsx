interface KpiMetricsSectionProps {
  totalSpend: string;
  categoryVolatility: string;
  spendLinkToIndexes: string;
}

export function KpiMetricsSection({ 
  totalSpend, 
  categoryVolatility, 
  spendLinkToIndexes 
}: KpiMetricsSectionProps) {
  return (
    <div className="flex pb-4 mb-6" style={{gap: '0px'}}>
      {/* Total Spend */}
      <div className="text-left" style={{width: '33.33%'}}>
        <p className="text-[10px] text-gray-500 mb-0.5">Total spend</p>
        <p className="text-base font-semibold text-gray-900">{totalSpend}</p>
      </div>

      {/* Category Volatility */}
      <div className="text-left border-l border-gray-200 pl-2" style={{width: '33.33%'}}>
        <p className="text-[10px] text-gray-500 mb-0.5">Category volatility</p>
        <p className="text-base font-semibold text-gray-900">{categoryVolatility}</p>
      </div>

      {/* Spend Link to Indexes */}
      <div className="text-left border-l border-gray-200 pl-2" style={{width: '33.33%'}}>
        <p className="text-[10px] text-gray-500 mb-0.5">Spend link to indexes</p>
        <p className="text-base font-semibold text-gray-900">{spendLinkToIndexes}</p>
      </div>
    </div>
  );
}
