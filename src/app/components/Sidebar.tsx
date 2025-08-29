import { 
  Home, 
  Square, 
  Triangle, 
  Circle, 
  Plus, 
  TrendingUp, 
  Castle, 
  FileText, 
  Network, 
  Lightbulb, 
  FolderOpen, 
  Search, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  User
} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-between h-screen w-16 bg-white">
      {/* Top Section */}
      <div className="flex flex-col items-center space-y-6">
        {/* Separator above Home */}
        <div className="w-16 border-b border-gray-200"></div>
        
        {/* Home */}
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Home size={16} />
        </button>
      </div>

      {/* First Group - Gaming Controls & Chart */}
      <div className="flex flex-col items-center space-y-6">
        <div className="grid grid-cols-2 gap-0">
          <button className="p-1 text-blue-500 hover:bg-gray-100 rounded">
            <Square size={10} />
          </button>
          <button className="p-1 text-blue-500 hover:bg-gray-100 rounded">
            <Triangle size={10} />
          </button>
          <button className="p-1 text-blue-500 hover:bg-gray-100 rounded">
            <Circle size={10} />
          </button>
          <button className="p-1 text-blue-500 hover:bg-gray-100 rounded">
            <Plus size={10} />
          </button>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <TrendingUp size={16} />
        </button>
      </div>

      <div className="w-8 border-b border-gray-200" />

      {/* Second Group - Castle, Document, Network, Lightbulb, Folder */}
      <div className="flex flex-col items-center space-y-6">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Castle size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FileText size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Network size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Lightbulb size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FolderOpen size={16} />
        </button>
      </div>

      <div className="w-8 border-b border-gray-200" />

      {/* Third Group - Search, Chart, Network */}
      <div className="flex flex-col items-center space-y-6">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Search size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <BarChart3 size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Network size={16} />
        </button>
      </div>

      {/* Empty Space */}
      <div className="flex-1"></div>

      {/* Separator */}
      <div className="w-8 border-b border-gray-200"></div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center space-y-4 mb-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Cloud size={16} />
        </button>
        <div className="flex items-center space-x-1">
          <Sparkles size={12} className="text-blue-500" />
          <Sparkles size={14} className="text-blue-500" />
          <Sparkles size={16} className="text-blue-500" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm font-semibold">
          JD
        </div>
      </div>
    </div>
  );
}
