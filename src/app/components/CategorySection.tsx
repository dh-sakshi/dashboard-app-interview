import { motion } from "framer-motion";
import { CategoryCard } from "./CategoryCard";
import { jsonData, categoryBarSeriesByCategory } from "@/data/mock";
import type { CategoryBarPoint } from "@/types";

interface CategorySectionProps {
  categoryData: CategoryBarPoint[];
  categoryHeaderKpis: Record<string, any>;
  onExpand: (category: string) => void;
}

export function CategorySection({ categoryData, categoryHeaderKpis, onExpand }: CategorySectionProps) {
  return (
    <section>
      {/* Mobile Layout - Vertical Stack */}
      <div className="block sm:hidden flex flex-col space-y-4">
        {jsonData.categories.map((c: string, idx: number) => (
          <motion.div key={c} layout className="w-full" transition={{ type: "spring", stiffness: 300, damping: 30 }}>
            <CategoryCard 
              title={c} 
              data={categoryBarSeriesByCategory[c] || categoryData} 
              header={categoryHeaderKpis[c]}
              onExpand={() => onExpand(c)} 
            />
          </motion.div>
        ))}
      </div>
      
      {/* Desktop Layout - Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {jsonData.categories.map((c: string, idx: number) => (
          <motion.div key={c} layout className="w-full" transition={{ type: "spring", stiffness: 300, damping: 30 }}>
            <CategoryCard 
              title={c} 
              data={categoryBarSeriesByCategory[c] || categoryData} 
              header={categoryHeaderKpis[c]}
              onExpand={() => onExpand(c)} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
