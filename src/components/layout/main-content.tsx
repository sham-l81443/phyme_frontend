"use client"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import {StudentSidebar} from "../student/student-sidebard"
import { Main } from "../common"

import ContentProtection from "../common/protection-wrapper"
import {AdminSidebar} from "../admin/admin-sidebar"
import { TopBar } from "./app-header"

export default function MainContent({ children, usageType }: { children: React.ReactNode, usageType: 'ADMIN' | 'STUDENT' }) {


    return (
        <ContentProtection>
            <SidebarProvider className="bg-background ">

                {usageType === 'STUDENT' ? <StudentSidebar /> : <AdminSidebar />}
                <SidebarInset className="overflow-auto flex flex-col ">
                    <TopBar />

                    <Main className="bg-background rounded-sm ">
                        {children}
                    </Main>
                </SidebarInset>
            </SidebarProvider>
        </ContentProtection>
    )
}


