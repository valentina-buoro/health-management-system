"use client";

import { LucideIcon ,} from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { cn } from '../../../lib/utils';

interface SidebarItemsProps {
  //icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItems = ({
  //icon: Icon,
  label,
  href
}: SidebarItemsProps) => {
  const pathname = usePathname()
  const router  = useRouter()

  const isActive = (pathname === '/dashboard' && href === '/dashboard') ||  pathname === href || pathname?.startsWith(`${href}/`) 

  const onClick = ()=>{
    router.push(href)
  }

  return (
   <button onClick={onClick} type='button' className={cn(
    'flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20', isActive && 'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700'
   )}>
     <div className='flex items-center gap-x-2 py-4'>
     
      {label}
     </div>
     <div className={cn(
      'ml-auto opacity-0 border-2 border-sky-700 h-full transition-all', isActive && 'opacity-100 '
     )} />
   </button>
  )
}

export default SidebarItems