'use server'
import React from 'react'

import SidebarItems from "./sideItems"
import Dashboard from '../../../public/sidebarDashboard.svg'
import Inventory from '../../../public/sidebarInventory.svg'
import Reports from '../../../public/sidebarReport.svg'
import DropDown from '../../../public/dropDown.svg'


const guestRoutes = [
    {
        icon: Dashboard,
        label: 'Dashboard',
        href:'/'
    },
    {
        icon: Inventory,
        icon2: DropDown,
        label: 'Inventory',
        href:'/inventory',
        collapsible: true
    },
    {
        icon: Reports,
        label: 'Reports',
        href:'/reports'
    }
]



const SidebarRoutes = () => {
    const routes = guestRoutes;
  return (
    <div className='flex flex-col w-full'>
        
        {routes.map((route)=>(
            <SidebarItems key={route.href} icon={route.icon}  label={route.label} href={route.href} icon2={route.icon2} collapsible={route.collapsible} />
        ))}
        
        </div>
  )
}

export default SidebarRoutes