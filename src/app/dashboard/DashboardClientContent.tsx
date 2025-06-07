
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
  const [activePrimaryTab, setActivePrimaryTab] = React.useState('system-maintenance');
  const [activeSecondaryTab, setActiveSecondaryTab] = React.useState('system-maintenance-main');


  return (
    <div className="flex-1 flex flex-col p-4 bg-slate-100/50">
      <Tabs defaultValue="system-maintenance" className="mb-2" onValueChange={setActivePrimaryTab}>
        <TabsList className="grid w-full grid-cols-7 h-auto p-0 rounded-none bg-transparent gap-0">
          <TabsTrigger value="online-ops" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white rounded-none border-r border-slate-300 py-1.5 text-xs">網購作業</TabsTrigger>
          <TabsTrigger value="pos-system" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white rounded-none border-r border-slate-300 py-1.5 text-xs">POS系統</TabsTrigger>
          <TabsTrigger value="purchase-system" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white rounded-none border-r border-slate-300 py-1.5 text-xs">進貨系統</TabsTrigger>
          <TabsTrigger value="sales-system" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white rounded-none border-r border-slate-300 py-1.5 text-xs">銷貨系統</TabsTrigger>
          <TabsTrigger value="inventory-system" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white rounded-none border-r border-slate-300 py-1.5 text-xs">庫存系統</TabsTrigger>
          <TabsTrigger value="billing-system" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white rounded-none border-r border-slate-300 py-1.5 text-xs">帳款系統</TabsTrigger>
          <TabsTrigger value="e-invoice" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white rounded-none py-1.5 text-xs">電子發票</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="border-t border-b border-sky-600 mb-4 bg-sky-600">
        <Tabs defaultValue="system-maintenance-main" onValueChange={setActiveSecondaryTab}>
          <TabsList className="bg-sky-600 p-0 rounded-none justify-start h-8">
            <TabsTrigger value="system-maintenance-main" className="text-white data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:font-semibold rounded-none px-3 py-1 text-sm h-full">系統維護</TabsTrigger>
            <TabsTrigger value="workflow" className="text-white data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:font-semibold rounded-none px-3 py-1 text-sm h-full">作業流程</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {activePrimaryTab === 'system-maintenance' || activeSecondaryTab === 'system-maintenance-main' ? (
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-4 rounded-lg bg-white shadow">
          {mainFunctionItems.map((item) => (
            <MainFunctionCard key={item.label} label={item.label} icon={item.icon} description={item.description} />
          ))}
          {/* Placeholder for empty grid cells to maintain layout */}
          {Array(Math.max(0, 7 - mainFunctionItems.length % 7)).fill(null).map((_, idx) => mainFunctionItems.length % 7 !== 0 ? <div key={`placeholder-${idx}`} /> : null)}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4 rounded-lg bg-white shadow">
          <div className="text-center">
            <ClipboardList className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500">
              「{
                {
                  'online-ops': '網購作業',
                  'pos-system': 'POS系統',
                  'purchase-system': '進貨系統',
                  'sales-system': '銷貨系統',
                  'inventory-system': '庫存系統',
                  'billing-system': '帳款系統',
                  'e-invoice': '電子發票'
                }[activePrimaryTab] || '選定模組'
              }」
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

