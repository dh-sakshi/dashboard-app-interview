"use client";

import { useEffect, useState } from "react";
import type { MonthlyPoint } from "@/types";

export function useLiveSeries(initial: MonthlyPoint[]) {
  const [series, setSeries] = useState<MonthlyPoint[]>(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setSeries((prev) =>
        prev.map((p) => ({
          ...p,
          value: Math.max(10, Math.round(p.value + (Math.random() - 0.5) * 8)),
          estimate:
            p.estimate !== undefined
              ? Math.max(10, Math.round(p.estimate + (Math.random() - 0.5) * 6))
              : undefined,
        }))
      );
    }, 1500);
    return () => clearInterval(id);
  }, []);
  return series;
}


