"use client";


import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { cn } from '../../../lib/utils';
import Image from 'next/image';

interface SidebarItemsProps {
  label: string;
  href: string;
  icon: string;
}

const SidebarItems = ({
label,
  href,
  icon
}: SidebarItemsProps) => {
  const pathname = usePathname()
  const router  = useRouter()

  const isActive = (pathname === '/' && href === '/') ||  pathname === href || pathname?.startsWith(`${href}/`) 

  const onClick = ()=>{
    router.push(href)
  }

  return (
   <button onClick={onClick} type='button' className={cn(
    'flex items-center gap-x-2 text-white  text-sm font-[500] pl-6 transition-all hover:text-white hover:bg-slate-300/20', isActive && 'text-white bg-sky-200/20 hover:bg-sky-200/20 hover:text-white'
   )}>
     <div className='flex items-center gap-x-2 py-4'>
     <Image src={icon} alt={icon} />
      {label}
     </div>
     <div className={cn(
      'ml-auto opacity-0 border-2 border-white h-full transition-all', isActive && 'opacity-100 '
     )} />
   </button>
  )
}

export default SidebarItems