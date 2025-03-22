
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div
        className={`transition-all duration-300 ${
          isMobile ? "ml-0" : "ml-64"
        }`}
      >
        <Header />
        <main className="p-6">{children}</main>
      </div>
      {isMobile && <MobileNav />}
    </div>
  );
};

export default DashboardLayout;
