
import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import QuickAction from "./QuickAction";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const [progressValue, setProgressValue] = useState(13);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animation loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Progress bar animation
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-6 space-y-6">
      {/* Welcome message with fade-in animation */}
      <div className={`space-y-2 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
        <h1 className="text-3xl font-bold">مرحبًا، د. أحمد</h1>
        <p className="text-muted-foreground">هذا ملخص نشاط عيادتك لهذا اليوم</p>
      </div>

      {/* Stats with staggered animation */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard 
          title="المواعيد اليوم" 
          value="8" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>}
          className={`transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
        />
        <StatCard 
          title="حالات طارئة" 
          value="2" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.7 3A6 6 0 0 0 2 8.7V15a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-1.3A6 6 0 0 0 15.3 8H8.7A6 6 0 0 1 3 3Z" /><circle cx="7" cy="12" r="1" /><circle cx="17" cy="12" r="1" /><path d="M12 17v.01" /></svg>}
          className={`transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
        />
        <StatCard 
          title="حيوانات مسجلة" 
          value="124" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" /><path d="M2 13h10" /><path d="m9 16 3-3-3-3" /></svg>}
          className={`transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
        />
        <StatCard 
          title="فواتير مستحقة" 
          value="5" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18" /><path d="M7 15h10" /><path d="M17 20H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4Z" /></svg>}
          className={`transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
        />
      </div>

      {/* Progress section with animation */}
      <div className={`space-y-2 transition-all duration-500 delay-500 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
        <div className="flex justify-between items-center">
          <h3 className="font-medium">تقدم اليوم</h3>
          <span className="text-sm text-muted-foreground">{progressValue}%</span>
        </div>
        <Progress value={progressValue} className="h-2 w-full" />
      </div>

      {/* Quick actions with scale animation */}
      <div className={`space-y-2 transition-all duration-500 delay-600 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
        <h2 className="font-semibold text-xl">وصول سريع</h2>
        <div className="grid grid-cols-1 gap-3">
          <QuickAction
            title="إدارة المواعيد"
            description="عرض وتعديل جدول المواعيد"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>}
            className="hover:scale-[1.02] transition-transform duration-300"
          />
          
          <QuickAction
            title="إدارة المرضى"
            description="عرض وإضافة سجلات الحيوانات"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 10v2a5 5 0 0 1-10 0v-2A5 5 0 0 1 12 2a5 5 0 0 1 4.5 7H19Z" /><path d="M6.5 9H4.1a1 1 0 0 0-.7 1.7L6 13.3a1 1 0 0 1 .3.7V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.5" /><path d="M14 22h4a1 1 0 0 0 1-1v-5.3a1 1 0 0 1 .3-.7l2.6-2.6a1 1 0 0 0-.7-1.7h-6.4" /></svg>}
            className="hover:scale-[1.02] transition-transform duration-300"
          />
          
          <QuickAction
            title="الفواتير والمدفوعات"
            description="إصدار وإدارة الفواتير"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18" /><path d="M7 15h10" /><path d="M17 20H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4Z" /></svg>}
            className="hover:scale-[1.02] transition-transform duration-300"
          />
          
          <QuickAction
            title="استشارات عن بُعد"
            description="التواصل مع أصحاب الحيوانات"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>}
            className="hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

      {/* Appointments today section with pulse animation */}
      <div className={`space-y-3 rounded-lg border border-border p-4 transition-all duration-500 delay-700 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
        <h3 className="font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse-soft mr-2"></span>
          المواعيد القادمة
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded hover:bg-secondary/50 transition-all cursor-pointer">
            <div>
              <p className="font-medium">قطة سيامي - فحص عام</p>
              <p className="text-sm text-muted-foreground">خالد محمد</p>
            </div>
            <div className="text-sm text-right">
              <p className="font-medium">10:30 ص</p>
              <p className="text-muted-foreground">بعد 35 دقيقة</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded hover:bg-secondary/50 transition-all cursor-pointer">
            <div>
              <p className="font-medium">كلب هاسكي - تطعيم</p>
              <p className="text-sm text-muted-foreground">سارة عبدالله</p>
            </div>
            <div className="text-sm text-right">
              <p className="font-medium">11:15 ص</p>
              <p className="text-muted-foreground">بعد 80 دقيقة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
