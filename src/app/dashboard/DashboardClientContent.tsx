
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Settings,
  TerminalSquare,
  HardDriveDownload,
  UserPlus,
  KeyRound,
  UsersRound,
  FileLock2,
  HelpCircle,
  Briefcase,
  ShoppingCart,
  Home,
  Receipt,
  Mail,
  Workflow,
  Settings2,
  FileText,
  ClipboardList
} from 'lucide-react';
import Image from 'next/image';

const mainFunctionItems = [
  { label: '系統參數', icon: Settings2, description: '配置應用程式的核心參數與行為。' },
  { label: '系統代碼', icon: TerminalSquare, description: '管理系統內部使用的標準化代碼。' },
  { label: '資料庫備份', icon: HardDriveDownload, description: '執行與管理資料庫的備份作業。' },
  { label: '新增帳號', icon: UserPlus, description: '建立新的使用者帳號並設定基本資料。' },
  { label: '密碼變更', icon: KeyRound, description: '允許使用者或管理員變更帳號密碼。' },
  { label: '帳號權限設定', icon: UsersRound, description: '管理使用者帳號的系統存取權限。' },
  { label: '報表權限設定', icon: FileLock2, description: '設定不同使用者對於報表的檢視權限。' },
];

const MainFunctionCard: React.FC<{ label: string; icon: React.ElementType; description: string }> = ({ label, icon: Icon, description }) => (
  <Card className="shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-white">
    <CardHeader className="flex flex-col items-center justify-center p-4 space-y-2">
      <Icon className="w-10 h-10 text-sky-600 mb-2" />
      <CardTitle className="text-base font-semibold text-center text-slate-700">{label}</CardTitle>
    </CardHeader>
    {/* <CardContent className="p-2 pt-0">
      <p className="text-xs text-slate-500 text-center">{description}</p>
    </CardContent> */}
  </Card>
);


export default function DashboardClientContent() {
  const [activeSecondaryTab, setActiveSecondaryTab] = React.useState('system-maintenance-main');


  return (
    <div className="flex-1 flex flex-col p-4 bg-slate-100/50">
      
      <div className="border-t border-b border-sky-600 mb-4 bg-sky-600">
        <Tabs defaultValue="system-maintenance-main" onValueChange={setActiveSecondaryTab}>
          <TabsList className="bg-sky-600 p-0 rounded-none justify-start h-8">
            <TabsTrigger value="system-maintenance-main" className="text-white data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:font-semibold rounded-none px-3 py-1 text-sm h-full whitespace-nowrap">系統維護</TabsTrigger>
            <TabsTrigger value="workflow" className="text-white data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:font-semibold rounded-none px-3 py-1 text-sm h-full whitespace-nowrap">作業流程</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {activeSecondaryTab === 'system-maintenance-main' ? (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rounded-lg bg-white shadow">
          {mainFunctionItems.map((item) => (
            <MainFunctionCard key={item.label} label={item.label} icon={item.icon} description={item.description} />
          ))}
          {/* Placeholder for empty grid cells to maintain layout */}
          {mainFunctionItems.length % 4 !== 0 && Array(4 - (mainFunctionItems.length % 4)).fill(null).map((_, idx) => (
             <div key={`placeholder-${idx}`} className="hidden lg:block" />
          ))}
           {mainFunctionItems.length % 3 !== 0 && Array(3 - (mainFunctionItems.length % 3)).fill(null).map((_, idx) => (
             <div key={`placeholder-md-${idx}`} className="hidden md:block lg:hidden" />
          ))}
           {mainFunctionItems.length % 2 !== 0 && Array(2 - (mainFunctionItems.length % 2)).fill(null).map((_, idx) => (
             <div key={`placeholder-sm-${idx}`} className="hidden sm:block md:hidden" />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4 rounded-lg bg-white shadow">
          <div className="text-center">
            <ClipboardList className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500">
              「選定模組」
              的 「{
                {
                  'workflow': '作業流程'
                }[activeSecondaryTab] || '系統維護'
              }」 功能尚未實作。
            </p>
          </div>
        </div>
      )}
      
      <div className="mt-auto pt-4 text-center">
        <Image src="https://placehold.co/400x80.png?text=ERP+System+Branding" data-ai-hint="company logo abstract" alt="ERP Branding" width={200} height={40} className="mx-auto opacity-70" />
      </div>
    </div>
  );
}
