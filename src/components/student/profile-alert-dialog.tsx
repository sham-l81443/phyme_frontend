'use client'
import { getMyDetails } from '@/services/student/my-details'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ProfileCompletionAlertDialog from './profile-completion-alert-dialog'
import ParentConsentAlertDialog from './parent-consent-alert-dialog'
import { DefaultPageLoader } from '../common'

const ProfileAlertDialog = () => {

    const { data: studentDetails, isFetching: isStudentDetailsFetching } = useQuery({
        queryKey: ['student-details'],
        queryFn: getMyDetails,
        staleTime: 1000 * 60 * 60 * 24,
    })


    if(isStudentDetailsFetching) return <DefaultPageLoader/>

    if(!studentDetails?.data?.isProfileComplete) return <ProfileCompletionAlertDialog />

    if (
        studentDetails?.data?.isProfileComplete &&
        (
            studentDetails?.data?.isUnderAged &&
            !studentDetails?.data?.isParentConsent
        )
    ) {
        return <ParentConsentAlertDialog />
    }

    return null
}

export default ProfileAlertDialog