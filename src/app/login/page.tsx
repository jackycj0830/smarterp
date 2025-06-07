
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Eye } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

const translations = {
  zh: {
    companyName: '鼎新電腦',
    pageTitlePrimary: '鼎新',
    pageTitleSecondary: ' Smart ERP ',
    pageTitleTertiary: 'iSM',
    pageSubtitle: '智能中小企業資源規劃系統',
    languageSelectPlaceholder: '選擇語言',
    languageChineseTraditional: '中文(繁體)',
    languageEnglish: 'English',
    usernamePlaceholder: '用戶名',
    passwordPlaceholder: '密碼',
    systemSelectPlaceholder: '選擇系統',
    loginButton: '登入',
    loginErrorTitle: '登入失敗',
    loginErrorMessage: '用戶名或密碼不正確。',
  },
  en: {
    companyName: 'Winstek',
    pageTitlePrimary: 'Winstek',
    pageTitleSecondary: ' Smart ERP ',
    pageTitleTertiary: 'iSM',
    pageSubtitle: 'Intelligent SME Resource Planning System',
    languageSelectPlaceholder: 'Select Language',
    languageChineseTraditional: 'Chinese (Traditional)',
    languageEnglish: 'English',
    usernamePlaceholder: 'Username',
    passwordPlaceholder: 'Password',
    systemSelectPlaceholder: 'Select System',
    loginButton: 'Login',
    loginErrorTitle: 'Login Failed',
    loginErrorMessage: 'Incorrect username or password.',
  },
};

export default function LoginPage() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();
  const t = translations[language];

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'zh' | 'en');
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === 'admin' && password === '123456') {
      router.push('/dashboard');
    } else {
      toast({
        title: t.loginErrorTitle,
        description: t.loginErrorMessage,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 selection:bg-red-200 selection:text-red-900">
      <div className="absolute top-4 right-6 md:top-6 md:right-8 flex items-center space-x-3">
        <div className="flex items-center">
          <span className="text-2xl lg:text-3xl font-bold text-red-600 mr-1">W</span>
          <span className="text-neutral-700 font-semibold text-base lg:text-lg">{t.companyName}</span>
        </div>
      </div>

      <div className="w-full max-w-4xl lg:max-w-5xl bg-white shadow-2xl rounded-lg flex overflow-hidden">
        <div className="w-16 md:w-20 lg:w-24 bg-gradient-to-br from-teal-50 via-sky-50 to-cyan-50 flex-none hidden md:flex flex-col items-center justify-around p-2 opacity-80">
          <div className="w-full h-1/4 bg-teal-300 opacity-60 my-1 transform -skew-y-12 rounded-sm"></div>
          <div className="w-full h-1/4 bg-sky-400 opacity-60 my-1 rounded-sm"></div>
          <div className="w-full h-1/4 bg-cyan-500 opacity-60 my-1 transform skew-y-12 rounded-sm"></div>
        </div>

        <div className="flex-grow grid md:grid-cols-[55%_45%]">
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-around border-r border-gray-200">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold">
                <span className="text-red-600">{t.pageTitlePrimary}</span>
                <span className="text-neutral-700">{t.pageTitleSecondary}</span>
                <span className="text-red-600">{t.pageTitleTertiary}</span>
              </h1>
              <p className="text-neutral-500 mt-2 text-sm lg:text-base">{t.pageSubtitle}</p>
            </div>
            
            <div className="flex justify-center my-6 md:my-0">
              <Image 
                src="https://placehold.co/210x210.png" 
                width={210}
                height={210}
                data-ai-hint="QR code" 
                alt="QR Code" 
                className="rounded-md shadow-lg object-contain"
              />
            </div>
             <div className="hidden md:block h-8"></div>
          </div>

          <form onSubmit={handleLogin} className="p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-5 bg-gray-50 md:bg-white rounded-r-lg">
            <div>
              <label htmlFor="language-select" className="sr-only">{t.languageSelectPlaceholder}</label>
              <Select defaultValue={language} onValueChange={handleLanguageChange}>
                <SelectTrigger id="language-select" aria-label={t.languageSelectPlaceholder} className="text-sm">
                  <SelectValue placeholder={t.languageSelectPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh">{t.languageChineseTraditional}</SelectItem>
                  <SelectItem value="en">{t.languageEnglish}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <label htmlFor="username" className="sr-only">{t.usernamePlaceholder}</label>
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <Input 
                id="username" 
                placeholder={t.usernamePlaceholder} 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-9 text-sm h-10" 
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">{t.passwordPlaceholder}</label>
              <Eye className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <Input 
                id="password" 
                type="password" 
                placeholder={t.passwordPlaceholder} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-9 text-sm h-10" 
                required
              />
            </div>
            
            <div>
              <label htmlFor="system-select" className="sr-only">{t.systemSelectPlaceholder}</label>
              <Select defaultValue="leader_ism">
                <SelectTrigger id="system-select" aria-label={t.systemSelectPlaceholder} className="text-sm">
                  <SelectValue placeholder={t.systemSelectPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leader_ism">Leader_ISM</SelectItem>
                  {/* Add other system options here if needed */}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full !bg-[#0052A5] hover:!bg-[#004182] text-white font-semibold py-2.5 text-base h-10">
              {t.loginButton}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
    
