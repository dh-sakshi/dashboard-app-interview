import { ApplicationLogo } from "./ApplicationLogo";
import Sidebar from "./Sidebar";
import MainHeader from "./MainHeader";
import DashboardHeader from "./DashboardHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Column - Logo + Sidebar */}
      <div className="flex flex-col">
        <ApplicationLogo />
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <MainHeader />
        {/* Bordered Container for Header + Content */}
        <div className="flex-1 border border-gray-200 rounded-none overflow-hidden m-4">
          {/* Navigation and Filter Bar */}
          <div className="bg-white">
            <DashboardHeader />
          </div>

          {/* Main Content */}
          <main className="flex-1 w-full pl-5 pr-4 py-2 sm:py-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
