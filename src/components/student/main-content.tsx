"use client"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import StudentSideBar from "./student-sidebard"
import { Main } from "../common"

import DashboardTitle from "./dashboard-title"
import ContentProtection from "../common/protection-wrapper"

export default function MainContent({ children }: { children: React.ReactNode }) {


    return (
        <ContentProtection>
            <SidebarProvider>

                <StudentSideBar />
                <SidebarInset className="overflow-auto flex flex-col">
                    <header className="flex min-h-12 items-center gap-4 border-b bg-background px-4">
                        <SidebarTrigger />
                        <div className="flex-1">
                            <DashboardTitle />
                        </div>
                        <div className="flex items-center gap-2">
                        </div>
                    </header>

                    <Main>
                        {children}
                    </Main>
                </SidebarInset>
            </SidebarProvider>
        </ContentProtection>
    )
}


