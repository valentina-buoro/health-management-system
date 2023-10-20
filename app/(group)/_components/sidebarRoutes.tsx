'use server'
import React from 'react'

import { Compass, Layout } from 'lucide-react'
import SidebarItems from './sidebarItems';

const guestRoutes = [
    {
        icon: Layout,
        label: 'Dashboard',
        href:'/dashboard'
    },
    {
        icon: Compass,
        label: 'Inventory',
        href:'/inventory'
    }
]

const SidebarRoutes = () => {
    const routes = guestRoutes;
  return (
    <div className='flex flex-col w-full'>
        
        {routes.map((route)=>(
            <SidebarItems key={route.href}  label={route.label} href={route.href} />
        ))}
        
        </div>
  )
}

export default SidebarRoutes