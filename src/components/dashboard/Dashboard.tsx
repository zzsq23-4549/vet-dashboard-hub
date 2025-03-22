
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import StatCard from "@/components/dashboard/StatCard";
import QuickAction from "@/components/dashboard/QuickAction";
import Notification from "@/components/dashboard/Notification";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "notifications">("dashboard");

  return (
    <div className="space-y-6 py-4 animate-fade-in">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold font-display tracking-tight">مرحبًا، د. أحمد</h1>
          <p className="text-muted-foreground text-sm">الثلاثاء، ١٤ مايو ٢٠٢٤</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <Input
          className="pl-10 bg-secondary/50"
          placeholder="بحث عن مرضى، مواعيد..."
          dir="rtl"
        />
      </div>

      <div className="flex space-x-2 border-b">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "dashboard"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground"
          }`}
        >
          الرئيسية
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`px-4 py-2 font-medium text-sm relative ${
            activeTab === "notifications"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground"
          }`}
        >
          الإشعارات
          <span className="absolute top-1 right-0 h-2 w-2 rounded-full bg-primary"></span>
        </button>
      </div>

      {activeTab === "dashboard" ? (
        <>
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              title="مواعيد اليوم"
              value="8"
              icon={
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
              }
              trend="+2"
            />
            <StatCard
              title="مرضى جدد"
              value="3"
              icon={
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
              }
              trend="+1"
            />
            <StatCard
              title="مبيعات الأدوية"
              value="1,250"
              icon={
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
                  <path d="m17 3-5 5-5-5h10" />
                  <path d="M17 21H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4" />
                  <path d="m21 12-8 8-4-4" />
                </svg>
              }
              trend="+200"
              trendUp={true}
              className="animation-delay-100"
            />
            <StatCard
              title="حالات طارئة"
              value="1"
              icon={
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
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
              }
              trend="-2"
              trendUp={false}
              className="animation-delay-200"
            />
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">وصول سريع</h2>
            <div className="space-y-2">
              <QuickAction
                title="إضافة موعد جديد"
                description="جدولة مواعيد الفحص والمتابعة"
                icon={
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
                    <line x1="12" x2="12" y1="14" y2="18" />
                    <line x1="10" x2="14" y1="16" y2="16" />
                  </svg>
                }
              />
              <QuickAction
                title="إضافة مريض جديد"
                description="تسجيل بيانات حيوان جديد"
                icon={
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
                    <line x1="19" x2="19" y1="8" y2="14" />
                    <line x1="16" x2="22" y1="11" y2="11" />
                  </svg>
                }
              />
              <QuickAction
                title="استشارة طبية عن بُعد"
                description="تقديم الاستشارات عبر الفيديو"
                icon={
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
                    <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4z" />
                    <rect width="15" height="14" x="3" y="5" rx="2" ry="2" />
                  </svg>
                }
              />
              <QuickAction
                title="إدارة الفواتير"
                description="إصدار وتتبع الفواتير والمدفوعات"
                icon={
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
                    <rect width="16" height="20" x="4" y="2" rx="2" />
                    <path d="M8 10h8" />
                    <path d="M8 14h8" />
                    <path d="M8 18h5" />
                  </svg>
                }
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">المواعيد القادمة</h2>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
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
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="font-medium">لولو (قطة)</p>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">10:30 ص</span>
                      </div>
                      <p className="text-muted-foreground text-sm truncate">فحص عام + تطعيم</p>
                    </div>
                  </div>
                  
                  <div className="p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
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
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="font-medium">رامبو (كلب)</p>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">12:15 م</span>
                      </div>
                      <p className="text-muted-foreground text-sm truncate">جراحة - إزالة ورم</p>
                    </div>
                  </div>
                  
                  <div className="p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
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
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="font-medium">بيلي (حصان)</p>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">2:30 م</span>
                      </div>
                      <p className="text-muted-foreground text-sm truncate">زيارة ميدانية - مراجعة لقاح</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <div className="space-y-4 pt-2">
          <h2 className="text-lg font-bold">الإشعارات</h2>
          <div className="space-y-2">
            <Notification
              title="حالة طارئة قريبة"
              description="كلب مصاب بجروح على بعد 3 كم منك، هل تريد الاستجابة؟"
              time="الآن"
              icon={
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
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
              }
            />
            <Notification
              title="تذكير بموعد"
              description="لديك جراحة مجدولة بعد ساعتين للكلب رامبو"
              time="منذ 5 دقائق"
              icon={
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
              isRead={true}
            />
            <Notification
              title="مخزون منخفض"
              description="دواء سيفوتاكسيم أوشك على النفاد (متبقي 3 عبوات)"
              time="منذ 25 دقيقة"
              icon={
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
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
              }
            />
            <Notification
              title="طلب استشارة"
              description="طلب استشارة من أحمد محمد بخصوص قطته التي تعاني من مشاكل في الجهاز الهضمي"
              time="منذ ساعة"
              icon={
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
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              }
              isRead={true}
            />
            <Notification
              title="تذكير بالمتابعة"
              description="حان موعد متابعة حالة القط ميمو بعد العملية الجراحية"
              time="منذ 3 ساعات"
              icon={
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
                  <path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
                  <polyline points="21 12 16 12" />
                  <polyline points="8 12 3 12" />
                  <path d="M21 12v3a2 2 0 0 1-2 2h-4" />
                  <path d="M3 12v3a2 2 0 0 0 2 2h4" />
                </svg>
              }
              isRead={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
