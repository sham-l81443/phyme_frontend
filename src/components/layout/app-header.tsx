"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "../common/custom-ui/theme-toggle"
import { Separator } from "../ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"
import { usePathname } from "next/navigation"

interface TopBarProps {
  title?: string
}

export function TopBar({ title = "Dashboard" }: TopBarProps) {

    const pathname = usePathname()

    const breadcrumbs = pathname.split('/').filter((item) => item !== '' && item !== 'admin')

    console.log(breadcrumbs)

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />

      {breadcrumbs && breadcrumbs.length > 0 ? (
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-lg capitalize tracking-wider ml-2">{crumb?.split("-").join(" ")}</BreadcrumbPage>
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      ) : (
        <h1 className="text-lg font-semibold">{title}</h1>
      )}

      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  )
}