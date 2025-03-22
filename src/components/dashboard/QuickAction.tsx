
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
      className={cn(
        "quick-action w-full p-4 flex items-center gap-4 rounded-lg border bg-card hover:bg-accent/50 transition-all duration-300",
        "animate-scale-bounce card-animated glass-effect-animated",
        className
      )}
    >
      <div className="btn-icon flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary animate-pulse-soft">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </button>
  );
};

export default QuickAction;
