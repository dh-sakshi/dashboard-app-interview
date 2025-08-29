import { ArrowLeft } from "lucide-react";

interface DetailViewHeaderProps {
  onBack: () => void;
  sectionTitle: string;
}

export function DetailViewHeader({ onBack, sectionTitle }: DetailViewHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <button 
        onClick={onBack} 
        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0094FF] text-white text-sm font-medium hover:bg-[#0080E6]"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <button className="px-3 py-1.5 rounded-md bg-white text-gray-600 text-sm font-medium border border-gray-200">
        {sectionTitle} data
      </button>
    </div>
  );
}
