
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const SidebarItem = ({
  icon,
  label,
  isActive = false,
  onClick,
  className,
}: SidebarItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "sidebar-link flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md transition-all",
        isActive 
          ? "bg-primary/10 text-primary font-medium animate-glow-pulse" 
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        "mobile-nav-item",
        isActive && "active",
        className
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="truncate">{label}</span>
    </button>
  );
};

export default SidebarItem;
