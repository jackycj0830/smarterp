
'use client';

import * as React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
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
  TerminalSquare,
  UserPlus,
  KeyRound,
  ShieldCheck,
  ClipboardList,
  FolderOpenDot,
  FileCode,
  UsersRound,
  FileLock2,
  Settings2,
  Workflow,
  ShoppingBag,
  Ticket,
  Contact,
  Building,
  Power,
  Search,
  Printer,
  ChevronLeft,
  ChevronFirst,
  ChevronLast,
  FileEdit,
  Trash2,
  Copy,
  PlusCircle,
  GripVertical,
  Bell,
  LogOut,
  Palette,
  Info
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
     { id: 'ps-placeholder1', label: '使用者管理', icon: Users },
  ] },
  { id: 'basic-data', label: '基本資料', icon: Database, children: [
     { id: 'bd-placeholder1', label: '客戶資料', icon: Contact },
  ] },
  { id: 'purchase-system', label: '進貨系統', icon: ShoppingCart, children: [
    { id: 'psys-placeholder1', label: '進貨單', icon: Receipt },
  ]},
  { id: 'sales-system', label: '銷貨系統', icon: Briefcase, children: [
    { id: 'ssys-placeholder1', label: '銷貨單', icon: Receipt },
  ]},
  { id: 'inventory-system', label: '庫存系統', icon: Home, children: [
    { id: 'isys-placeholder1', label: '庫存查詢', icon: Search },
  ]},
  { id: 'invoice-system', label: '發票系統', icon: Ticket, children: [
    { id: 'invsys-placeholder1', label: '電子發票', icon: Mail },
  ]},
];

const SidebarNavItemContent: React.FC<{ item: SidebarNavItem; level: number }> = ({ item, level }) => {
  const [isOpen, setIsOpen] = React.useState(level === 0); // Keep top level open by default
  const Icon = item.icon || Folder;
  const ExpandIcon = isOpen ? ChevronDown : ChevronRight;

  const handleToggle = () => {
    if (item.children && item.children.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div style={{ paddingLeft: `${level * 16}px` }}>
      <Button
        variant="ghost"
        className="w-full justify-start h-8 px-2 py-1 text-sm font-normal"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {item.children && item.children.length > 0 && (
          <ExpandIcon className="h-4 w-4 mr-2 flex-shrink-0" />
        )}
        {!item.children && <div className="w-4 mr-2 flex-shrink-0"></div>}
        <Icon className="h-4 w-4 mr-2 flex-shrink-0 text-sky-600" />
        <span>{item.label}</span>
      </Button>
      {isOpen && item.children && (
        <div className="mt-1">
          {item.children.map((child) => (
            <SidebarNavItemContent key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-slate-100">
      <Menubar className="rounded-none border-b border-slate-300 px-2 lg:px-4 bg-slate-50">
        <MenubarMenu>
          <MenubarTrigger className="font-medium">系統別(Z)</MenubarTrigger>
          {/* Add menu content if needed */}
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-medium">編輯(Y)</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-medium">系統設定(X)</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>系統代碼(W)</MenubarItem>
            <MenubarItem>系統參數(X)</MenubarItem>
            <MenubarItem>系統通知(Y)</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>資料庫備份(Z)</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-medium">權限設定(W)</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-medium">基本資料(V)</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-medium">視窗(U)</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-medium">說明(T)</MenubarTrigger>
           <MenubarContent>
            <MenubarItem>關於 <MenubarShortcut>⌘I</MenubarShortcut></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-medium">公司別(S)</MenubarTrigger>
        </MenubarMenu>
        <div className="flex-grow"></div>
         <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="px-2"><PlusCircle className="w-4 h-4 mr-1" />新增</Button>
            <Button variant="ghost" size="sm" className="px-2"><Copy className="w-4 h-4 mr-1" />複製</Button>
            <Button variant="ghost" size="sm" className="px-2"><FileEdit className="w-4 h-4 mr-1" />修改</Button>
            <Button variant="ghost" size="sm" className="px-2"><Trash2 className="w-4 h-4 mr-1" />刪除</Button>
            <Button variant="ghost" size="sm" className="px-2"><Search className="w-4 h-4 mr-1" />查詢</Button>
            <Button variant="ghost" size="sm" className="px-2"><Printer className="w-4 h-4 mr-1" />列印</Button>
            <GripVertical className="h-5 w-5 text-slate-400" />
            <Button variant="ghost" size="sm" className="px-2"><ChevronFirst className="w-4 h-4 mr-1" />首筆</Button>
            <Button variant="ghost" size="sm" className="px-2"><ChevronLeft className="w-4 h-4 mr-1" />上筆</Button>
            <Button variant="ghost" size="sm" className="px-2"><ChevronRight className="w-4 h-4 mr-1" />下筆</Button>
            <Button variant="ghost" size="sm" className="px-2"><ChevronLast className="w-4 h-4 mr-1" />末筆</Button>
            <GripVertical className="h-5 w-5 text-slate-400" />
            <Button variant="ghost" size="sm" className="px-2 text-red-600"><Power className="w-4 h-4 mr-1" />離開</Button>
            <Button variant="ghost" size="sm" className="px-2"><Palette className="w-4 h-4 mr-1" />待辦</Button>
            <Button variant="ghost" size="sm" className="px-2"><Info className="w-4 h-4 mr-1" />選單</Button>
         </div>
      </Menubar>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-slate-50 border-r border-slate-300 flex flex-col">
          <div className="p-2 border-b border-slate-300">
            <Button variant="outline" className="w-full justify-start text-sm">
              <ChevronDown className="w-4 h-4 mr-2" />
              功能選單切換 (M)
            </Button>
          </div>
          <ScrollArea className="flex-1 p-2">
            <nav className="space-y-1">
              {sidebarNavItems.map((item) => (
                <SidebarNavItemContent key={item.id} item={item} level={0} />
              ))}
            </nav>
          </ScrollArea>
        </aside>

        <main className="flex-1 flex flex-col overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
