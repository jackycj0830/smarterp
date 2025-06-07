
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Eye, X } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 selection:bg-red-200 selection:text-red-900">
      <div className="absolute top-4 right-6 md:top-6 md:right-8 flex items-center space-x-3">
        <div className="flex items-center">
          {/* Placeholder for stylized W logo */}
          <span className="text-2xl lg:text-3xl font-bold text-red-600 mr-1">W</span>
          <span className="text-neutral-700 font-semibold text-base lg:text-lg">鼎新電腦</span>
        </div>
        <Button variant="ghost" size="icon" aria-label="Close" className="text-neutral-500 hover:text-neutral-700">
          <X className="h-5 w-5 lg:h-6 lg:w-6" />
        </Button>
      </div>

      <div className="w-full max-w-4xl lg:max-w-5xl bg-white shadow-2xl rounded-lg flex overflow-hidden">
        {/* Decorative triangle pattern strip */}
        <div className="w-16 md:w-20 lg:w-24 bg-gradient-to-br from-teal-50 via-sky-50 to-cyan-50 flex-none hidden md:flex flex-col items-center justify-around p-2 opacity-80">
          {/* Simplified representation of the geometric pattern */}
          <div className="w-full h-1/4 bg-teal-300 opacity-60 my-1 transform -skew-y-12 rounded-sm"></div>
          <div className="w-full h-1/4 bg-sky-400 opacity-60 my-1 rounded-sm"></div>
          <div className="w-full h-1/4 bg-cyan-500 opacity-60 my-1 transform skew-y-12 rounded-sm"></div>
        </div>

        {/* Main content area (Logo/Image + Form) */}
        <div className="flex-grow grid md:grid-cols-[55%_45%]">
          {/* Left content (Logo title, Image) */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-around border-r border-gray-200">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold">
                <span className="text-red-600">鼎新</span>
                <span className="text-neutral-700"> Smart ERP </span>
                <span className="text-red-600">iSM</span>
              </h1>
              <p className="text-neutral-500 mt-2 text-sm lg:text-base">智能中小企業資源規劃系統</p>
            </div>
            
            <div className="flex justify-center my-6 md:my-0">
              <Image 
                src="https://placehold.co/320x210.png" 
                width={320}
                height={210}
                data-ai-hint="businessman urban cityscape" 
                alt="Corporate Environment" 
                className="rounded-md shadow-lg object-contain"
              />
            </div>
             <div className="hidden md:block h-8"></div> {/* Spacer to balance justify-around */}
          </div>

          {/* Right content (Form) */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-5 bg-gray-50 md:bg-white rounded-r-lg">
            <div>
              <label htmlFor="language-select" className="sr-only">選擇語言</label>
              <Select defaultValue="zh-tw">
                <SelectTrigger id="language-select" aria-label="選擇語言" className="text-sm">
                  <SelectValue placeholder="選擇語言" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh-tw">中文(繁體)</SelectItem>
                  {/* Add other languages if necessary */}
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <label htmlFor="username" className="sr-only">用戶名</label>
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <Input id="username" placeholder="用戶名" defaultValue="DS" className="pl-9 text-sm h-10" />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">密碼</label>
              <Eye className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <Input id="password" type="password" placeholder="密碼" className="pl-9 text-sm h-10" />
            </div>
            
            <div>
              <label htmlFor="system-select" className="sr-only">選擇系統</label>
              <Select defaultValue="leader_ism">
                <SelectTrigger id="system-select" aria-label="選擇系統" className="text-sm">
                  <SelectValue placeholder="選擇系統" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leader_ism">Leader_ISM</SelectItem>
                  {/* Add other systems if necessary */}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full !bg-[#0052A5] hover:!bg-[#004182] text-white font-semibold py-2.5 text-base h-10">
              登入
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
