"use client";


import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { cn } from '../../../lib/utils';
import Image from 'next/image';

interface SidebarItemsProps {
  label: string;
  href: string;
  icon: string;
  icon2?: string;
  collapsible?: boolean;
}

const SidebarItems = ({
label,
  href,
  icon,
  icon2,
  collapsible
}: SidebarItemsProps) => {
  const pathname = usePathname()
  const router  = useRouter()

  const isActive = (pathname === '/' && href === '/') ||  pathname === href || pathname?.startsWith(`${href}/`) 

  const onClick = ()=>{
    router.push(href)
  }

  const [collapsed, setCollapsed] = React.useState(false)

  const toggleCollapsed = ()=>{
    setCollapsed(!collapsed)}

  return (
    <>
   <button onClick={onClick} type='button' className={cn(
    'flex items-center  gap-x-2 text-white  text-sm font-[500] pl-6 transition-all hover:text-white hover:bg-slate-300/20', isActive && 'text-white bg-sky-200/20 hover:bg-sky-200/20 hover:text-white'
   )}>
     <div className='flex items-center gap-x-2 py-4 justify-between'>
     <Image src={icon} alt={icon} />
      {label}
     </div>
     <div className='flex items-center '>
      {icon2 && <Image src={icon2} alt={icon2} className='w-4 ml-10' onClick={toggleCollapsed} />}
      </div>

     <div className={cn(
      'ml-auto opacity-0 border-2 border-white h-full transition-all', isActive && 'opacity-100 '
     )} />
   
   </button>
   {
        collapsed && (
          <button >
            yes
          </button>
        )
      }
   </>
  )
}

export default SidebarItems