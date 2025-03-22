
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
        "sidebar-link",
        isActive && "active",
        className
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default SidebarItem;
