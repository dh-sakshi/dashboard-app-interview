export default function DashboardHeader() {
  return (
    <div>
      <div className="w-full pl-5 pr-4 py-3 pb-2">
        <div className="bg-white rounded-none">
          <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Tabs */}
          <div className="flex items-center space-x-6">
            {/* Active Tab */}
            <button className="flex items-center text-[#0094FF] font-medium text-sm border-b-2 border-[#0094FF] pb-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                />
              </svg>
              Spend
            </button>

            {/* Inactive Tabs */}
            <button className="flex items-center text-gray-500 font-medium text-sm hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              Market
            </button>

            <button className="flex items-center text-gray-500 font-medium text-sm hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5V4H2v16h5m10-6a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Suppliers
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            {/* Currency Dropdown */}
            <select className="border border-gray-300 text-sm rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#0094FF]">
              <option>EURO</option>
              <option>USD</option>
              <option>INR</option>
            </select>

            {/* Period Dropdown */}
            <select className="border border-gray-300 text-sm rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#0094FF]">
              <option>2024 - 2025</option>
              <option>2023 - 2024</option>
              <option>2022 - 2023</option>
            </select>

            {/* Filters Button */}
            <button className="border border-gray-300 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-gray-100">
              Filters
            </button>

            {/* Create Dashboard Button */}
            <button className="flex items-center bg-[#0094FF] text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536M9 13h3m-6 0h3m-6 0h3m6 0h3m-6 0h3m0 0l9-9"
                />
              </svg>
              Create your dashboard
            </button>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
