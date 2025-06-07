
'use client';

import * as React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FileText,
  Settings,
  Users,
  Database,
  Briefcase,
  ShoppingCart,
  Receipt,
  Mail,
  Home,
  Star,
  HardDriveDownload,
  FileCode,
  UsersRound,
  FileLock2,
  Settings2,
  Bell,
  FileSearch2,
  Ticket,
  Replace,
  Menu, // Added Menu icon
} from 'lucide-react';

interface SidebarNavItem {
  id: string;
  label: string;
  icon?: React.ElementType;
  children?: SidebarNavItem[];
  href?: string;
}

const sidebarNavItems: SidebarNavItem[] = [
  { id: 'common-tasks', label: '常用作業', icon: Star, children: [
      { id: 'ct-placeholder1', label: '常用功能一', icon: FileText },
    ]
  },
  {
    id: 'system-settings',
    label: '系統設定',
    icon: Settings,
    children: [
      { id: 'sys-code', label: '系統代碼', icon: FileCode },
      { id: 'sys-params', label: '系統參數', icon: Settings2 },
      { id: 'sys-notify', label: '系統通知', icon: Bell },
      { id: 'sys-backup', label: '資料庫備份', icon: HardDriveDownload },
    ],
  },
  { id: 'permission-settings', label: '權限設定', icon: UsersRound, children: [
     { id: 'ps-user-management', label: '使用者管理', icon: Users },
     { id: 'ps-role-management', label: '角色權限設定', icon: FileLock2},
  ] },
  { id: 'basic-data', label: '基本資料', icon: Database, children: [
     { id: 'bd-customer', label: '客戶資料', icon: Users },
     { id: 'bd-vendor', label: '廠商資料', icon: Briefcase },
     { id: 'bd-item', label: '品號資料', icon: FileText },
  ] },
  { id: 'purchase-system', label: '進貨系統', icon: ShoppingCart, children: [
    { id: 'psys-po', label: '採購單', icon: Receipt },
    { id: 'psys-grn', label: '進貨單', icon: Receipt },
  ]},
  { id: 'sales-system', label: '銷貨系統', icon: Briefcase, children: [
    { id: 'ssys-so', label: '訂單', icon: Receipt },
    { id: 'ssys-ship', label: '銷貨單', icon: Receipt },
  ]},
  { id: 'inventory-system', label: '庫存系統', icon: Home, children: [
    { id: 'isys-query', label: '庫存查詢', icon: FileSearch2 },
    { id: 'isys-transfer', label: '調撥作業', icon: Replace },
  ]},
  { id: 'invoice-system', label: '發票系統', icon: Ticket, children: [
    { id: 'invsys-einvoice', label: '電子發票', icon: Mail },
  ]},
];

const SidebarNavItemContent: React.FC<{ item: SidebarNavItem; level: number; searchTerm: string }> = ({ item, level, searchTerm }) => {
  const [isOpen, setIsOpen] = React.useState(level === 0 || (searchTerm && item.label.toLowerCase().includes(searchTerm.toLowerCase())));
  const Icon = item.icon || Folder;
  const ExpandIcon = isOpen ? ChevronDown : ChevronRight;

  const handleToggle = () => {
    if (item.children && item.children.length > 0) {
      setIsOpen(!isOpen);
    }
  };
  
  React.useEffect(() => {
    if (searchTerm) {
      const hasMatchingChild = item.children?.some(child => child.label.toLowerCase().includes(searchTerm.toLowerCase()));
      if (item.label.toLowerCase().includes(searchTerm.toLowerCase()) || hasMatchingChild) {
        setIsOpen(true);
      } else if (!hasMatchingChild && !item.label.toLowerCase().includes(searchTerm.toLowerCase()) && level !== 0){
         setIsOpen(false);
      }
    } else {
       setIsOpen(level === 0); 
    }
  }, [searchTerm, item.label, item.children, level]);


  const isMatch = searchTerm && item.label.toLowerCase().includes(searchTerm.toLowerCase());
  
  // Determine if this item or any of its children (recursively) should be visible based on search
  const shouldBeVisible = (currentItem: SidebarNavItem): boolean => {
    if (!searchTerm) return true; // Always visible if no search term
    if (currentItem.label.toLowerCase().includes(searchTerm.toLowerCase())) return true;
    if (currentItem.children) {
      return currentItem.children.some(child => shouldBeVisible(child));
    }
    return false;
  };

  if (searchTerm && !shouldBeVisible(item)) {
    return null; // Hide item if it and its children don't match search
  }

  return (
    <div style={{ paddingLeft: `${level * 12}px` }}>
      <Button
        variant="ghost"
        className={cn(
            "w-full justify-start h-8 px-2 py-1 text-sm font-normal",
            isMatch ? "bg-accent text-accent-foreground" : ""
        )}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {item.children && item.children.length > 0 && (
          <ExpandIcon className="h-4 w-4 mr-1.5 flex-shrink-0 transition-transform duration-200" />
        )}
        {!item.children && <div className="w-4 mr-1.5 flex-shrink-0"></div>}
        <Icon className="h-4 w-4 mr-1.5 flex-shrink-0 text-sky-600" />
        <span className="truncate">{item.label}</span>
      </Button>
      {isOpen && item.children && (
        <div className="mt-0.5">
          {item.children.map((child) => (
            <SidebarNavItemContent key={child.id} item={child} level={level + 1} searchTerm={searchTerm} />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarContent: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    return (
      <>
        <div className="p-2 border-b border-slate-300">
          <input 
            type="text"
            placeholder="搜尋選單..." 
            className="h-8 text-xs w-full px-2 py-1 border border-slate-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ScrollArea className="flex-1 p-2">
          <nav className="space-y-0.5">
            {sidebarNavItems.map((item) => (
              <SidebarNavItemContent key={item.id} item={item} level={0} searchTerm={searchTerm}/>
            ))}
          </nav>
        </ScrollArea>
      </>
    );
}


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileSheetOpen, setIsMobileSheetOpen] = React.useState(false);

  return (
    <div className="flex flex-col h-screen bg-slate-100">
      
      {/* Mobile Header with Hamburger Menu */}
      <div className="md:hidden flex items-center justify-between p-2 border-b border-slate-300 bg-slate-50">
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5 text-sky-700" />
              <span className="sr-only">開啟選單</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 bg-slate-50 border-r border-slate-300">
            <SidebarContent />
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-semibold text-sky-700">儀表板</h1>
        <div className="w-8"></div> {/* Spacer to balance the button */}
      </div>

      <div className="flex flex-1 overflow-hidden"> 
        <aside className="hidden md:flex w-56 bg-slate-50 border-r border-slate-300 flex-col">
          <SidebarContent />
        </aside>

        <main className="flex-1 flex flex-col overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
