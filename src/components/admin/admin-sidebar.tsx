'use client'
import type * as React from "react"
import { ChevronUp, FolderCog, Home, LogOut, Settings, TvMinimalPlay, User, Youtube } from "lucide-react"
import Link from "next/link"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { ADMIN_ROUTES, STUDENT_ROUTES } from "@/constants/routes"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import useStudentStore from "@/store/student/studentStore"
import { STUDENT_STORE_KEY } from "@/store/store-key"
import LOGO from "@/assets/svg/logo.svg"

import Image from "next/image"

// This is sample data for the sidebar navigation
const navigationItems = [
    {
        title: "Dashboard",
        icon: Home,
        href: ADMIN_ROUTES.dashboard,
        isActive: false

    },
    {
        title: "Videos",
        icon: TvMinimalPlay,
        href: ADMIN_ROUTES.videos,
        isActive: false

    },
    {
        title: "Config",
        icon: FolderCog,
        href: ADMIN_ROUTES.config,
        isActive: false

    },
]

export default function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const pathname = usePathname()

    const studentInfo = useStudentStore(state => state.studentStore.persist?.[STUDENT_STORE_KEY.STUDENT_DATA])

    return (
        <Sidebar className="border-none rounded-none " {...props}>
            <SidebarHeader className="app-banner h-14 p-0 bg-cover  ">
                <div className="flex items-center px-4 h-full justify-start  ">
                    <span className="text-lg font-semibold">
                        <Image src={LOGO} alt="logo" className="w-40"></Image>
                    </span>
                </div>

            </SidebarHeader>
            <SidebarContent className="px-2">
                <SidebarGroup>
                    {/* <SidebarGroupLabel>Main Navigation</SidebarGroupLabel> */}
                    <SidebarGroupContent >
                        <SidebarMenu className="space-y-4 my-4 ">
                            {navigationItems.map((item) => {
                                item.isActive = pathname.includes(item.href)
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title} className="rounded-lg py-4 ">
                                            <Link href={item.href} prefetch={true} className="flex items-center gap-2">
                                                <item.icon className="h-4 w-4" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            {/* <SidebarRail /> */}
            <SidebarFooter className="p4 shadow border-t">
                <DropdownMenu >
                    <DropdownMenuTrigger className="bg-background rounded-md" asChild>
                        <button className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                            <Avatar className="h-10 w-10 border border-sidebar-border rounded-full center">
                                <AvatarImage src={"/placeholder.svg"} alt={studentInfo?.name} />
                                <AvatarFallback className="text-sidebar-accent-foreground">
                                    {studentInfo?.name?.[0] + studentInfo?.name?.[1] || ''}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <p className="truncate font-medium">{studentInfo.name}</p>
                                <p className="truncate text-xs text-sidebar-foreground/70">{studentInfo?.userType}</p>
                            </div>
                            <ChevronUp className="h-4 w-4 text-sidebar-foreground/70" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
