"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const DashboardTitle = () => {

    const pathName = usePathname()

    console.log(usePathname(), "pathname")
    return (
        <h1 className="text-lg font-semibold capitalize">{pathName?.split('/')?.[2] || ''}</h1>
    )
}

export default DashboardTitle