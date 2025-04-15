import { Main, Page } from '@/components/common'
import MainContent from '@/components/student/main-content'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Page>
            <MainContent>
                {children}
            </MainContent>
        </Page>
    )
}

export default Layout