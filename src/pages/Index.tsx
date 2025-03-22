
import MobileLayout from "@/components/layout/MobileLayout";
import Dashboard from "@/components/dashboard/Dashboard";
import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <MobileLayout>
      <div className="mb-6 animate-fade-in">
        <Link to="/gestions">
          <Button variant="outline" className="flex items-center gap-2 btn-animated animate-float-subtle">
            <ClipboardList className="h-4 w-4" />
            <span>Accéder à Les Gestions</span>
          </Button>
        </Link>
      </div>
      <Dashboard />
    </MobileLayout>
  );
};

export default Index;
