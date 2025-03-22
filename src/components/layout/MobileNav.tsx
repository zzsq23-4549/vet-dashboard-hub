
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
          <span className="text-xs mt-1">Dashboard</span>
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
          <span className="text-xs mt-1">Appointments</span>
        </button>

        <button
          onClick={() => handleClick("patients")}
          className={`flex flex-col items-center p-2 ${
            activeItem === "patients" ? "text-primary" : "text-muted-foreground"
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="text-xs mt-1">Patients</span>
        </button>

        <button
          onClick={() => handleClick("billing")}
          className={`flex flex-col items-center p-2 ${
            activeItem === "billing" ? "text-primary" : "text-muted-foreground"
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
            <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-.5-1.5-1-2z" />
            <path d="M2 9v1c0 1.1.9 2 2 2h1" />
            <path d="M16 11h0" />
          </svg>
          <span className="text-xs mt-1">Billing</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
