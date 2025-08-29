interface HorizontalBarChartProps {
  title: string;
}

export function HorizontalBarChart({ title }: HorizontalBarChartProps) {
  const segments = [
    { width: '22%', background: '#0f2a7a', percentage: '22%' },
    { width: '18%', background: '#2d5bff', percentage: '18%' },
    { width: '16%', background: '#a7e9f0', percentage: '16%' },
    { width: '14%', background: '#2958ff', percentage: '14%' },
    { width: '12%', background: '#d6e6ff', percentage: '12%' },
    { width: '8%', background: '#1a3aa9', percentage: '8%' },
    { width: '6%', background: '#14b8a6', percentage: '6%' },
    { width: '4%', background: '#243c8a', percentage: '4%' }
  ];

  return (
    <div>
      <div className="text-sm font-medium mb-8 mt-8">{title}</div>
      
      {/* Segmented Horizontal Bar */}
      <div className="mb-4">
        <div className="flex h-8 bg-gray-200 overflow-hidden">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="h-full flex items-center justify-end pr-1 text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-all duration-1000 ease-out animate-[slideIn_1s_ease-out_0s_forwards] opacity-0" 
              style={{ 
                width: segment.width, 
                background: segment.background,
                animationDelay: `${index * 0.1}s`
              }}
              title={`SKF - ${segment.percentage} of total spend`}
            >
              {segment.percentage}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-start">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{background: segment.background}}
            ></div>
            <span className="text-sm text-gray-600">SKF</span>
          </div>
        ))}
      </div>
    </div>
  );
}
