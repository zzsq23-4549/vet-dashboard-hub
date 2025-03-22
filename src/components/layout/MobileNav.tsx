
import { useState } from "react";

const MobileNav = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-2 px-6 z-10 animate-slide-in">
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleClick("dashboard")}
          className={`flex flex-col items-center p-2 ${
            activeItem === "dashboard" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
          <span className="text-xs mt-1">الرئيسية</span>
        </button>

        <button
          onClick={() => handleClick("appointments")}
          className={`flex flex-col items-center p-2 ${
            activeItem === "appointments" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span className="text-xs mt-1">المواعيد</span>
        </button>

        <button
          onClick={() => handleClick("cases")}
          className={`flex flex-col items-center p-2 ${
            activeItem === "cases" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
            <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
            <path d="M15 2v5h5" />
          </svg>
          <span className="text-xs mt-1">الحالات</span>
        </button>

        <button
          onClick={() => handleClick("emergency")}
          className={`flex flex-col items-center p-2 ${
            activeItem === "emergency" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8.7 3A6 6 0 0 0 2 8.7V15a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-1.3A6 6 0 0 0 15.3 8H8.7A6 6 0 0 1 3 3Z" />
            <circle cx="7" cy="12" r="1" />
            <circle cx="17" cy="12" r="1" />
            <path d="M12 17v.01" />
          </svg>
          <span className="text-xs mt-1">طوارئ</span>
        </button>

        <button
          onClick={() => handleClick("profile")}
          className={`flex flex-col items-center p-2 ${
            activeItem === "profile" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-xs mt-1">حسابي</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
