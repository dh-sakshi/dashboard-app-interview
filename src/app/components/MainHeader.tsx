export default function MainHeader() {
  return (
    <div className="bg-white border-b border-gray-200 h-15">
      <div className="w-full pl-5 pr-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left */}
          <h1 className="text-lg font-semibold text-gray-900">
            Welcome back, Sakshi
          </h1>

          {/* Right */}
          <button className="flex items-center gap-2 bg-[#0094FF] hover:bg-[#0080E6] text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Bearings
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
