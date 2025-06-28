"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Nav = () => {

    const router = useRouter();

    const handleLogin = () => {
        router.push('/login')
    }

    return (
        <div className="py-5 flex container mx-auto justify-between items-center px-10 w-full  ">
            <div></div>
            <Button onClick={handleLogin} className="bg-gradient-to-r from-rose-600 to-purple-600 z-10">Login</Button>
        </div>
    )
}

export default Nav