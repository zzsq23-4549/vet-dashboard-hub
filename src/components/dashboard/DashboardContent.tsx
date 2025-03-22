
import { useEffect, useState } from "react";
import QuickAction from "./QuickAction";
import StatCard from "./StatCard";
import Notification from "./Notification";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const DashboardContent = () => {
  const [progressValue, setProgressValue] = useState(13);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Load animation effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Progress bar animation
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const notifications = [
    {
      id: 1,
      title: "موعد تطعيم",
      description: "يجب تطعيم قطة أحمد مصطفى غدًا",
      time: "منذ 5 دقائق",
      icon: "calendar"
    },
    {
      id: 2,
      title: "حالة طارئة",
      description: "كلب مصاب بجروح على بعد 5 كم",
      time: "منذ 15 دقيقة",
      icon: "alert"
    },
    {
      id: 3,
      title: "فاتورة مستحقة",
      description: "لم يتم دفع فاتورة العملية الجراحية",
      time: "منذ 3 ساعات",
      icon: "bill"
    }
  ];

  return (
    <div className="pb-20">
      {/* Header section with fade-in animation */}
      <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
        <h1 className="text-2xl font-bold mb-2">مرحبًا، د. أحمد</h1>
        <p className="text-muted-foreground mb-6">هذا ملخص نشاط عيادتك لهذا اليوم</p>
      </div>

      {/* Stats with staggered animations */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard 
          title="المواعيد اليوم" 
          value="8" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>}
          className={`transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
          trend={{ value: 10, isPositive: true }}
        />
        <StatCard 
          title="حالات طارئة" 
          value="2" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.7 3A6 6 0 0 0 2 8.7V15a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-1.3A6 6 0 0 0 15.3 8H8.7A6 6 0 0 1 3 3Z" /><circle cx="7" cy="12" r="1" /><circle cx="17" cy="12" r="1" /><path d="M12 17v.01" /></svg>}
          className={`transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
          trend={{ value: 5, isPositive: false }}
        />
        <StatCard 
          title="حيوانات مسجلة" 
          value="124" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" /><path d="M2 13h10" /><path d="m9 16 3-3-3-3" /></svg>}
          className={`transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard 
          title="فواتير مستحقة" 
          value="5" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18" /><path d="M7 15h10" /><path d="M17 20H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4Z" /></svg>}
          className={`transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
          trend={{ value: 20, isPositive: false }}
        />
      </div>

      {/* Progress section with animation */}
      <div className={`mb-6 transition-all duration-500 delay-500 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">تقدم اليوم</h3>
          <span className="text-sm text-muted-foreground">{progressValue}%</span>
        </div>
        <Progress value={progressValue} className="h-2 w-full" />
      </div>

      {/* Quick actions with hover effects */}
      <div className={`mb-6 transition-all duration-500 delay-600 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
        <h2 className="font-semibold text-xl mb-4">وصول سريع</h2>
        <div className="space-y-3">
          <QuickAction
            title="إدارة المواعيد"
            description="عرض وتعديل جدول المواعيد"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>}
            className="transform hover:scale-[1.02] hover:bg-primary/5 transition-all duration-300"
          />
          <QuickAction
            title="إدارة المرضى"
            description="عرض وإضافة سجلات الحيوانات"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 10v2a5 5 0 0 1-10 0v-2A5 5 0 0 1 12 2a5 5 0 0 1 4.5 7H19Z" /><path d="M6.5 9H4.1a1 1 0 0 0-.7 1.7L6 13.3a1 1 0 0 1 .3.7V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.5" /><path d="M14 22h4a1 1 0 0 0 1-1v-5.3a1 1 0 0 1 .3-.7l2.6-2.6a1 1 0 0 0-.7-1.7h-6.4" /></svg>}
            className="transform hover:scale-[1.02] hover:bg-primary/5 transition-all duration-300"
          />
          <QuickAction
            title="الفواتير والمدفوعات"
            description="إصدار وإدارة الفواتير"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18" /><path d="M7 15h10" /><path d="M17 20H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4Z" /></svg>}
            className="transform hover:scale-[1.02] hover:bg-primary/5 transition-all duration-300"
          />
          <QuickAction
            title="استشارات عن بُعد"
            description="التواصل مع أصحاب الحيوانات"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>}
            className="transform hover:scale-[1.02] hover:bg-primary/5 transition-all duration-300"
          />
        </div>
      </div>

      {/* Notifications with collapsible animation */}
      <div className={`transition-all duration-500 delay-700 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
        <Collapsible
          open={showNotifications}
          onOpenChange={setShowNotifications}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
            <div className="flex items-center">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse mr-2"></div>
              <h3 className="font-semibold">التنبيهات والإشعارات</h3>
            </div>
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
              className={`transition-transform duration-300 ${showNotifications ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </CollapsibleTrigger>
          <CollapsibleContent className="animate-accordion-down">
            <div className="divide-y">
              {notifications.map((notification, index) => (
                <Notification
                  key={notification.id}
                  title={notification.title}
                  description={notification.description}
                  time={notification.time}
                  icon={notification.icon}
                  className={`animate-fade-in animation-delay-${index * 100}`}
                />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default DashboardContent;
