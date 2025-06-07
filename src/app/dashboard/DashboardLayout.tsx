
'use client';

import * as React from 'react';
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
  FileCode,
  UsersRound,
  FileLock2,
  Settings2,
  Bell,
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
    { id: 'isys-query', label: '庫存查詢', icon: FileSearch2IconProperty },
    { id: 'isys-transfer', label: '調撥作業', icon: Replace },
  ]},
  { id: 'invoice-system', label: '發票系統', icon: TicketIconProperty, children: [
    { id: 'invsys-einvoice', label: '電子發票', icon: Mail },
  ]},
];

// Placeholder icons if specific ones are not found or for variety
const FileSearch2IconProperty = FileText; // Using FileText as a placeholder for FileSearch2
const TicketIconProperty = Receipt; // Using Receipt as a placeholder for Ticket
const Replace = FileText; // Using FileText as a placeholder

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
       setIsOpen(level === 0); // Default open for top-level items if no search term
    }
  }, [searchTerm, item.label, item.children, level]);


  const isMatch = searchTerm && item.label.toLowerCase().includes(searchTerm.toLowerCase());
  const hasVisibleChild = item.children?.some(child => child.label.toLowerCase().includes(searchTerm.toLowerCase()) || isOpen && child.children?.some(c => c.label.toLowerCase().includes(searchTerm.toLowerCase())));

  if (searchTerm && !isMatch && !hasVisibleChild && item.children && item.children.length > 0 && !item.children.some(child => child.label.toLowerCase().includes(searchTerm.toLowerCase()) || child.children?.some(c => c.label.toLowerCase().includes(searchTerm.toLowerCase())))) {
    let parentHasMatch = false;
    // This logic might need to be passed down or handled globally if deep nested search highlighting is needed across non-expanded parents
    if (searchTerm && !item.label.toLowerCase().includes(searchTerm.toLowerCase())) {
        const checkChildren = (children?: SidebarNavItem[]): boolean => {
            if (!children) return false;
            return children.some(child => child.label.toLowerCase().includes(searchTerm.toLowerCase()) || checkChildren(child.children));
        };
        if (!checkChildren(item.children)) return null; 
    }
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
          <Input 
            placeholder="搜尋選單..." 
            className="h-8 text-xs"
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
  return (
    <div className="flex flex-col h-screen bg-slate-100">
      {/* Menubar has been removed as per user request */}
      <div className="flex flex-1 overflow-hidden pt-2 md:pt-0"> {/* Added padding top for when menubar is removed */}
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
