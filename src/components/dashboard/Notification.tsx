
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface NotificationProps {
  title: string;
  description: string;
  time: string;
  icon: ReactNode;
  isRead?: boolean;
  onClick?: () => void;
  className?: string;
}

const Notification = ({
  title,
  description,
  time,
  icon,
  isRead = false,
  onClick,
  className,
}: NotificationProps) => {
  return (
    <div
      onClick={onClick}
      className={cn("notification-item cursor-pointer", className)}
    >
      <div className="btn-icon shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-sm truncate">{title}</h4>
          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
            {time}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>
      </div>
      {!isRead && (
        <div className="h-2 w-2 rounded-full bg-primary shrink-0 self-start mt-2"></div>
      )}
    </div>
  );
};

export default Notification;
