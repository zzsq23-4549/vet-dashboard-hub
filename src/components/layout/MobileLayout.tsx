
import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header className="border-b animate-fade-in" />
      <main className="flex-1 pt-2 pb-16 overflow-auto animate-slide-up-fade">
        <div className="container px-4 mx-auto max-w-lg">
          {children}
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

export default MobileLayout;
