
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  // Animation loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // في الإنتاج، يجب التحقق من المعلومات من الخادم
    // هنا نقوم بمحاكاة تسجيل الدخول
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className={`text-center space-y-2 transition-all duration-500 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center animate-float-subtle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary animate-pulse-soft"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold font-display animate-slide-up-fade">بيطري+</h1>
          <p className="text-muted-foreground animate-slide-up-fade animation-delay-100">منظومة إدارة العيادات البيطرية المتكاملة</p>
        </div>

        <Card className={`border-primary/10 transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0 animate-glow-pulse' : 'opacity-0 transform translate-y-10'}`}>
          <CardHeader>
            <CardTitle className="animate-slide-up-fade">{isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد"}</CardTitle>
            <CardDescription className="animate-slide-up-fade animation-delay-100">
              {isLogin 
                ? "أدخل رقم الهاتف وكلمة المرور للوصول إلى حسابك" 
                : "أدخل بياناتك لإنشاء حساب جديد"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {!isLogin && (
                <div className="space-y-2 animate-slide-up-fade animation-delay-200">
                  <label htmlFor="name" className="text-sm font-medium">
                    الاسم الكامل
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="د. أحمد محمد"
                    required
                    dir="rtl"
                    className="transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              )}

              <div className="space-y-2 animate-slide-up-fade animation-delay-300">
                <label htmlFor="phone" className="text-sm font-medium">
                  رقم الهاتف
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05xxxxxxxx"
                  required
                  dir="rtl"
                  className="transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2 animate-slide-up-fade animation-delay-400">
                <label htmlFor="password" className="text-sm font-medium">
                  كلمة المرور
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {isLogin && (
                <div className="text-right animate-slide-up-fade animation-delay-500">
                  <Button variant="link" className="p-0 h-auto text-sm hover:text-primary transition-colors">
                    نسيت كلمة المرور؟
                  </Button>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col space-y-3">
              <Button 
                type="submit" 
                className="w-full animate-slide-up-fade animation-delay-600 btn-animated"
              >
                {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
              </Button>

              <div className="relative w-full my-2 animate-slide-up-fade animation-delay-700">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">أو</span>
                </div>
              </div>

              <Button 
                type="button" 
                variant="outline" 
                className="w-full animate-slide-up-fade animation-delay-800 hover:bg-secondary/50 transition-all duration-300"
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                {isLogin ? "تسجيل الدخول" : "التسجيل"} باستخدام جوجل
              </Button>

              <Button 
                type="button" 
                variant="link" 
                className="mt-4 animate-slide-up-fade animation-delay-900 hover:text-primary transition-colors"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin 
                  ? "ليس لديك حساب؟ إنشاء حساب جديد" 
                  : "لديك حساب بالفعل؟ تسجيل الدخول"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
