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


