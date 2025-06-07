
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
  ClipboardList,
  Megaphone
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

const announcements = [
  "公司新產品發布會將於下月15日舉行，敬請期待！",
  "系統維護通知：本週末晚間10點至凌晨2點將進行系統升級。",
  "恭喜銷售部門達成上季度業績目標！",
  "員工健康檢查將於下週開始，請注意郵件通知。",
  "提醒：年度績效評估現已開放，請於月底前完成提交。",
  "重要公告：辦公室將於下週一進行消防演習，請全員參與。",
  "最新消息：公司App v2.0已上線，帶來全新體驗與多項優化功能。"
];


const MainFunctionCard: React.FC<{ label: string; icon: React.ElementType; description: string }> = ({ label, icon: Icon, description }) => (
  <Card className="shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-card">
    <CardHeader className="flex flex-col items-center justify-center p-4 space-y-2">
      <Icon className="w-10 h-10 text-primary mb-2" />
      <CardTitle className="text-base font-semibold text-center text-card-foreground">{label}</CardTitle>
    </CardHeader>
    {/* <CardContent className="p-2 pt-0">
      <p className="text-xs text-muted-foreground text-center">{description}</p>
    </CardContent> */}
  </Card>
);


export default function DashboardClientContent() {
  const [activeSecondaryTab, setActiveSecondaryTab] = React.useState('system-maintenance-main');
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <div className="flex-1 flex flex-col p-4 bg-background">
      
      <div className="mb-6 p-4 rounded-lg bg-card shadow">
        <h2 className="text-lg font-semibold text-primary mb-3 flex items-center">
          <Megaphone className="w-5 h-5 mr-2" />
          公司相關最新消息和公告
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {announcements.map((announcement, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-muted/50">
                    <CardContent className="flex items-center justify-center p-4 h-24">
                      <p className="text-sm text-muted-foreground text-center">{announcement}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 disabled:opacity-30" />
          <CarouselNext className="right-2 disabled:opacity-30" />
        </Carousel>
      </div>

      <div className="border-t border-b border-primary mb-4 bg-primary">
        <Tabs defaultValue="system-maintenance-main" onValueChange={setActiveSecondaryTab}>
          <TabsList className="bg-primary p-0 rounded-none justify-start h-8">
            <TabsTrigger value="system-maintenance-main" className="text-primary-foreground data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:font-semibold rounded-none px-3 py-1 text-sm h-full whitespace-nowrap">系統維護</TabsTrigger>
            <TabsTrigger value="workflow" className="text-primary-foreground data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:font-semibold rounded-none px-3 py-1 text-sm h-full whitespace-nowrap">作業流程</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {activeSecondaryTab === 'system-maintenance-main' ? (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rounded-lg bg-card shadow">
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
        <div className="flex-1 flex items-center justify-center p-4 rounded-lg bg-card shadow">
          <div className="text-center">
            <ClipboardList className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
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
      
      <div className="mt-auto pt-8 text-center">
        <Image src="https://placehold.co/300x60.png?text=ERP+System+Branding" data-ai-hint="company logo abstract" alt="ERP Branding" width={150} height={30} className="mx-auto opacity-70" />
      </div>
    </div>
  );
}

