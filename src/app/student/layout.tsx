import { Page } from '@/components/common'
import MainContent from '@/components/student/main-content'
import ParentConsentAlertDialog from '@/components/student/parent-consent-alert-dialog' 
import ProfileCompletionAlertDialog from '@/components/student/profile-completion-alert-dialog'
import React from 'react'
import ProfileAlertDialog from './../../components/student/profile-alert-dialog';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Page>
                <MainContent usageType='STUDENT'>
                    {children}
                </MainContent>
            </Page>
            <ProfileAlertDialog/>
        </>
    )
}

export default Layout