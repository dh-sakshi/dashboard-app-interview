import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Line } from "recharts";
import { useLiveSeries } from "@/hooks/useLiveSeries";
import { MONTHS } from "@/data/mock";
import type { MonthlyPoint } from "@/types";

interface MarketMixChartProps {
  title: string;
}

export function MarketMixChart({ title }: MarketMixChartProps) {
  const initial: MonthlyPoint[] = MONTHS.map((m, i) => ({
    month: m,
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
    <div className="bg-white p-4 min-h-56">
      <div className="text-sm font-medium mb-4">{title}</div>
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
            <Tooltip formatter={(v: number) => [`${v}%`, '']} />
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
  );
}
