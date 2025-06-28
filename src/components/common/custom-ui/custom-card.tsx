import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const CustomCard1 = ({title, description, footerLabel, footerValue, headerClass = "blue", headerTextClass = "blue",href,cardClass}: {title: string, description: string, footerLabel: string, footerValue: any,headerClass?: string,headerTextClass?: string, href?: string,cardClass?: string}) => {
    return (
        <Link href={href || ''}>
        <Card className={cn("overflow-hidden p-0 gap-0 shadow  shadow-secondary", cardClass)}>
            <div className={cn("px-6 py-4 border-b", headerClass)}>
                <CardTitle className={cn("", headerTextClass)}>{title}</CardTitle>
            </div>
            <CardContent className="p-5">
                <CardDescription className="mb-4 text-base">
                    {description}
                </CardDescription>
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">{footerLabel}</span>
                    <span className="font-semibold">{footerValue}</span>
                </div>
            </CardContent>
        </Card>
        </Link>
    )
}

export default CustomCard1