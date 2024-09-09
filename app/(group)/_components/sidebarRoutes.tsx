'use server'
import React from 'react'

import SidebarItems from "./sideItems"
import Dashboard from '../../../public/sidebarDashboard.svg'
import Inventory from '../../../public/sidebarInventory.svg'
import Persons from '../../../public/persons.svg'
import Reports from '../../../public/sidebarReport.svg'
import DropDown from '../../../public/dropdown.svg'
import Settings from '../../../public/settings.svg'

const guestRoutes = [
    {
        icon: Dashboard,
        label: 'Dashboard',
        href:'/dashboard'
    },
    {
        icon: Inventory,
        icon2: DropDown,
        label: 'Inventory',
        label2: 'List of Medicines',
        href:'/inventory',
        href2:'/list-of-medicines',
        collapsible: true
    },
    {
        icon: Persons,
        label: 'Accounts',
        label2: 'Add New Account',
        href:'/accounts',
       
    },
    {
        icon: Reports,
        icon2: DropDown,
        label: 'Reports',
        label2: 'Sales Report',
        href:'/reports',
        href2: '/sales-report'
    },
    {
        icon: Settings,
        label: 'Configuration/settings',
        href: 'configure'
    }
]



const SidebarRoutes = () => {
    const routes = guestRoutes;
  return (
    <div className='flex flex-col w-full'>
        
        {routes.map((route)=>(
            <SidebarItems key={route.href} icon={route.icon}  label={route.label} label2={route.label2}  href={route.href} href2={route.href2} icon2={route.icon2} collapsible={route.collapsible} />
        ))}
        
        </div>
  )
}

export default SidebarRoutes