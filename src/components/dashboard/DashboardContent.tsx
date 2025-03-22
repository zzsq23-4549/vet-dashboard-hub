
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import StatCard from "./StatCard";
import QuickAction from "./QuickAction";
import Notification from "./Notification";

const DashboardContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-6 pb-16">
      <section className="animate-fade-in">
        <h1 className="text-3xl font-display font-bold tracking-tight">
          Good morning, Dr. Sarah
        </h1>
        <p className="text-muted-foreground mt-1 animation-delay-100">
          Welcome back. Here's what's happening at your clinic today.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in animation-delay-200">
        <StatCard
          title="Appointments Today"
          value="8"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Registered Patients"
          value="142"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
          trend={{ value: 3, isPositive: true }}
        />
        <StatCard
          title="Pending Invoices"
          value="$1,240"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="14" x="3" y="5" rx="2" />
              <path d="M21 8H3" />
              <path d="M7 15h0" />
              <path d="M12 15h0" />
              <path d="M17 15h0" />
            </svg>
          }
          trend={{ value: 5, isPositive: false }}
        />
        <StatCard
          title="Remote Consultations"
          value="3"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 10v4a3 3 0 0 1-3 3H7m-3-7 3-3 3 3M9 17v1a3 3 0 0 0 3 3h6m3-7-3 3-3-3" />
            </svg>
          }
          trend={{ value: 20, isPositive: true }}
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <Card className="animate-scale-in animation-delay-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Upcoming Appointments</span>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
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
                      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-.5-1.5-1-2z" />
                      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                      <path d="M16 11h0" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Max</h3>
                      <span className="text-sm text-muted-foreground">10:30 AM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Labrador, 3 years - Annual checkup and vaccines
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm" className="h-8">
                        Reschedule
                      </Button>
                      <Button variant="default" size="sm" className="h-8">
                        Start Checkup
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
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
                      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
                      <path d="M8 14v.5" />
                      <path d="M16 14v.5" />
                      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Whiskers</h3>
                      <span className="text-sm text-muted-foreground">11:15 AM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Maine Coon, 5 years - Dental checkup
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm" className="h-8">
                        Reschedule
                      </Button>
                      <Button variant="default" size="sm" className="h-8">
                        Start Checkup
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
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
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16.5 12" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Remote: Bella</h3>
                      <span className="text-sm text-muted-foreground">1:00 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Golden Retriever, 7 years - Follow-up consultation
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm" className="h-8">
                        Reschedule
                      </Button>
                      <Button variant="default" size="sm" className="h-8">
                        Start Call
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-scale-in animation-delay-400">
            <QuickAction
              title="Schedule Appointment"
              description="Create a new appointment for a patient"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
              title="Register Patient"
              description="Add a new animal to the system"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
              title="Create Invoice"
              description="Generate a new invoice for a client"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
              }
            />

            <QuickAction
              title="Start Remote Consultation"
              description="Begin a video call with a patient owner"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 10v5" />
                  <path d="M15.5 14.5h.01" />
                  <path d="M17 22H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2Z" />
                  <path d="M13 2v5" />
                  <path d="M13.5 7h.01" />
                  <path d="M21 8V5a2 2 0 0 0-2-2h-6" />
                  <path d="M22 12h-2" />
                  <path d="M22 16h-2" />
                </svg>
              }
            />
          </div>
        </section>

        <section className="space-y-6 animate-scale-in animation-delay-500">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Notification
                title="Vaccine Reminder"
                description="Max (Labrador) is due for rabies vaccine next week. Schedule a reminder."
                time="1 hour ago"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m19 9-7 7-7-7" />
                  </svg>
                }
              />

              <Notification
                title="Payment Received"
                description="Payment of $120 received from John Smith for Bella's treatment."
                time="3 hours ago"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                }
                isRead={true}
              />

              <Notification
                title="New Patient Registration"
                description="Charlie (German Shepherd) has been registered by Maria Rodriguez."
                time="Yesterday"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                isRead={true}
              />

              <Notification
                title="Lab Results Ready"
                description="Blood work results for Whiskers are ready for review."
                time="Yesterday"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M2.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                    <path d="M22.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M17.5 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M11 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M15 5 6.5 9.5" />
                    <path d="m6.5 14.5 4.5 2" />
                    <path d="m12 17 3.5-4.5" />
                    <path d="M17.5 6.5 15 10" />
                    <path d="M2.5 6.5c2.5 1 5 1 7.5 0" />
                  </svg>
                }
              />

              <Notification
                title="Inventory Alert"
                description="Low stock of Amoxicillin (5 units remaining). Please reorder."
                time="2 days ago"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" y2="13" x2="12" />
                    <line x1="12" y1="17" y2="17.01" x2="12" />
                  </svg>
                }
                isRead={true}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Vaccinations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
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
                      className="text-primary"
                    >
                      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-.5-1.5-1-2z" />
                      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                      <path d="M16 11h0" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Max</p>
                    <p className="text-xs text-muted-foreground">Rabies, Due in 5 days</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Remind</Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
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
                      className="text-primary"
                    >
                      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
                      <path d="M8 14v.5" />
                      <path d="M16 14v.5" />
                      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Whiskers</p>
                    <p className="text-xs text-muted-foreground">FVRCP, Due in 2 weeks</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Remind</Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
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
                      className="text-primary"
                    >
                      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-.5-1.5-1-2z" />
                      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                      <path d="M16 11h0" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Bella</p>
                    <p className="text-xs text-muted-foreground">Bordetella, Due in 3 weeks</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Remind</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default DashboardContent;
