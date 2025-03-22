
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface QuickActionProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

const QuickAction = ({
  title,
  description,
  icon,
  onClick,
  className,
}: QuickActionProps) => {
  return (
    <button
      onClick={onClick}
      className={cn("quick-action animate-scale-in", className)}
    >
      <div className="btn-icon">{icon}</div>
      <div className="text-left">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </button>
  );
};

export default QuickAction;
