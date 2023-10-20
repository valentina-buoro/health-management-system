'use server'
import React from 'react'

import SidebarItems from './sidebarItems';

const guestRoutes = [
    {
        label: 'Dashboard',
        href:'/'
    },
    {
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