export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export type KpiType = "total-spend" | "transactions" | "po" | "misc";

export interface Kpi {
  label: string;
  value: string;
  sub: string;
  type: KpiType;
  extraText?: string;
}

export const jsonData: { kpis: Kpi[]; categories: string[] } = {
  kpis: [
    { 
      label: "Total spend", 
      value: "191.7 M", 
      sub: "176.7 M (+15 M)", 
      type: "total-spend"
    },
    { 
      label: "No. of transaction", 
      value: "168.7 M", 
      sub: "183.7 M (-15 M)", 
      type: "transactions",
      extraText: "Non-contracted"
    },
    { 
      label: "No. of PO", 
      value: "36 K", 
      sub: "26 K (+15 K)", 
      type: "po",
      extraText: "Single source material spend"
    },
    { 
      label: "Miscellaneous KPIs", 
      value: "121.4 M", 
      sub: "136.4 M (+15 M)", 
      type: "misc"
    },
  ],
  categories: ["Regions", "Plants", "Suppliers", "Materials"],
};

// Category-specific KPI data for when categories are expanded
export const categorySpecificKpis: Record<string, Kpi[]> = {
  Regions: [
    { 
      label: "Regional spend", 
      value: "191.7 M", 
      sub: "Prior year: 176.7 M (+15 M) ▲ 2.67% YOY", 
      type: "total-spend"
    },
    { 
      label: "On time delivery rate", 
      value: "72 %", 
      sub: "Prior year: 86 % (-12 %) ▼ 2.67% YOY", 
      type: "transactions"
    },
    { 
      label: "Contract compliance", 
      value: "86 %", 
      sub: "Prior year: 71 % (+15 %) ▲ 2.67% YOY", 
      type: "po"
    },
    { 
      label: "Miscellaneous KPIs", 
      value: "121.4 M", 
      sub: "Prior year: 136.4 M (+15 M) ▲ 2.67% YOY", 
      type: "misc"
    },
  ],
  Plants: [
    { 
      label: "Plant spend", 
      value: "156.3 M", 
      sub: "Prior year: 142.1 M (+14.2 M) ▲ 3.12% YOY", 
      type: "total-spend"
    },
    { 
      label: "PR to PO", 
      value: "26 days", 
      sub: "Prior year: 31 days (-5 days) ▼ 1.89% YOY", 
      type: "transactions"
    },
    { 
      label: "No. of single source material", 
      value: "57", 
      sub: "Prior year: 49 (+8) ▲ 2.45% YOY", 
      type: "po"
    },
    { 
      label: "Miscellaneous KPIs", 
      value: "98.7 M", 
      sub: "Prior year: 89.2 M (+9.5 M) ▲ 2.78% YOY", 
      type: "misc"
    },
  ],
  Suppliers: [
    { 
      label: "Supplier spend", 
      value: "134.8 M", 
      sub: "Prior year: 118.9 M (+15.9 M) ▲ 3.45% YOY", 
      type: "total-spend"
    },
    { 
      label: "Key suppliers", 
      value: "98", 
      sub: "Prior year: 87 (+11) ▲ 2.89% YOY", 
      type: "transactions"
    },
    { 
      label: "Tail suppliers", 
      value: "102", 
      sub: "Prior year: 95 (+7) ▲ 1.67% YOY", 
      type: "po"
    },
    { 
      label: "Miscellaneous KPIs", 
      value: "87.3 M", 
      sub: "Prior year: 76.1 M (+11.2 M) ▲ 3.12% YOY", 
      type: "misc"
    },
  ],
  Materials: [
    { 
      label: "Material spend", 
      value: "178.2 M", 
      sub: "Prior year: 162.4 M (+15.8 M) ▲ 2.98% YOY", 
      type: "total-spend"
    },
    { 
      label: "Single source material %", 
      value: "26 %", 
      sub: "Prior year: 23 % (+3 %) ▲ 2.34% YOY", 
      type: "transactions"
    },
    { 
      label: "Inventory turn", 
      value: "9.8", 
      sub: "Prior year: 8.9 (+0.9) ▲ 2.67% YOY", 
      type: "po"
    },
    { 
      label: "Miscellaneous KPIs", 
      value: "145.6 M", 
      sub: "Prior year: 133.2 M (+12.4 M) ▲ 2.89% YOY", 
      type: "misc"
    },
  ],
};


// Per-category mock series for CategoryCard charts
export type CategoryBarPoint = {
  label: string;
  a: number;
  b: number;
};

export const categoryBarSeriesByCategory: Record<string, CategoryBarPoint[]> = {
  Regions: [
    { label: "01", a: 120, b: 130 },
    { label: "02", a: 80, b: 40 },
    { label: "03", a: 90, b: 55 },
    { label: "04", a: 60, b: 35 },
    { label: "05", a: 75, b: 50 },
    { label: "06", a: 55, b: 45 },
    { label: "07", a: 65, b: 40 },
    { label: "08", a: 85, b: 60 },
  ],
  Plants: [
    { label: "01", a: 110, b: 140 },
    { label: "02", a: 70, b: 50 },
    { label: "03", a: 95, b: 70 },
    { label: "04", a: 55, b: 55 },
    { label: "05", a: 85, b: 45 },
    { label: "06", a: 65, b: 35 },
    { label: "07", a: 60, b: 60 },
    { label: "08", a: 90, b: 55 },
  ],
  Suppliers: [
    { label: "01", a: 100, b: 150 },
    { label: "02", a: 60, b: 55 },
    { label: "03", a: 80, b: 85 },
    { label: "04", a: 50, b: 50 },
    { label: "05", a: 70, b: 65 },
    { label: "06", a: 60, b: 45 },
    { label: "07", a: 55, b: 70 },
    { label: "08", a: 95, b: 65 },
  ],
  Materials: [
    { label: "01", a: 130, b: 120 },
    { label: "02", a: 75, b: 55 },
    { label: "03", a: 85, b: 80 },
    { label: "04", a: 60, b: 40 },
    { label: "05", a: 90, b: 35 },
    { label: "06", a: 50, b: 50 },
    { label: "07", a: 70, b: 55 },
    { label: "08", a: 100, b: 60 },
  ],
};

// Per-category KPI header metrics for CategoryCard
export type HeaderItem = { label: string; value: string };

export const categoryHeaderKpis: Record<string, HeaderItem[]> = {
  Regions: [
    { label: "Regional spend", value: "12.3M" },
    { label: "On time delivery rate", value: "46.8%" },
    { label: "Contract compliance", value: "21 days" },
  ],
  Plants: [
    { label: "Plant spend", value: "12.3M" },
    { label: "PR to PO", value: "26 days" },
    { label: "No. of single source material", value: "57" },
  ],
  Suppliers: [
    { label: "Supplier spend", value: "12.3 M" },
    { label: "Key suppliers", value: "98" },
    { label: "Tail suppliers", value: "102" },
  ],
  Materials: [
    { label: "Material spend", value: "12.3M" },
    { label: "Single source material %", value: "26%" },
    { label: "Inventory turn", value: "9.8" },
  ],
};


