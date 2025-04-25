import { Page } from '@/components/common'
import MainContent from '@/components/student/main-content'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Page>
                <MainContent usageType='ADMIN'>
                    {children}
                </MainContent>
            </Page>
        </>
    )
}

export default Layout