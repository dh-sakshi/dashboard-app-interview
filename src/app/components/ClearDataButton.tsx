interface ClearDataButtonProps {
  onClear: () => void;
}

export function ClearDataButton({ onClear }: ClearDataButtonProps) {
  return (
    <section className="mb-6">
      <button 
        onClick={onClear}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 hover:bg-gray-50"
      >
        <span>Clear data</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </section>
  );
}
