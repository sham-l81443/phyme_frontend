"use client"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import StudentSideBar from "./student-sidebard"
import { Main } from "../common"

import DashboardTitle from "./dashboard-title"
import ContentProtection from "../common/protection-wrapper"
import AdminSidebar from "../admin/admin-sidebar"

export default function MainContent({ children, usageType }: { children: React.ReactNode, usageType: 'ADMIN' | 'STUDENT' }) {


    return (
        <ContentProtection>
            <SidebarProvider className="bg-background ">

                {usageType === 'STUDENT' ? <StudentSideBar /> : <AdminSidebar />}
                <SidebarInset className="overflow-auto flex flex-col ">
                    <header className="flex min-h-14 items-center gap-4 px-4 bg-white overflow-hidden ">
                        <SidebarTrigger className="hover:bg-background" />
                        <div className="flex-1">
                            <DashboardTitle />
                        </div>
                        <div className="flex items-center gap-2">
                        </div>
                    </header>

                    <Main className="bg-background p-1 rounded-sm ">
                        {children}
                    </Main>
                </SidebarInset>
            </SidebarProvider>
        </ContentProtection>
    )
}


