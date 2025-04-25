"use client"
import React from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogTitle } from '../ui/alert-dialog'
import { useQuery } from '@tanstack/react-query'
import { getMyDetails } from '@/services/student/my-details'
import { Button } from '../ui/button'


const ParentConsentAlertDialog = () => {


    const { data: studentDetails, isFetching: isStudentDetailsFetching } = useQuery({
        queryKey: ['student-details'],
        queryFn: getMyDetails,
        staleTime: 1000 * 60 * 60 * 24,
    })

    
    if(isStudentDetailsFetching)return

    if (
        studentDetails?.data?.isProfileCompleted &&
        (
            !studentDetails?.data?.isUnderAged ||
            (studentDetails?.data?.isUnderAged && studentDetails?.data?.parentConset)
        )
    ) {
        return null
    }



    return (
        <AlertDialog open={true}>
            <AlertDialogTitle />
            <AlertDialogContent className="min-w-1/2 p-0 overflow-x-hidden border-none bg-white min-h-1/2 ">
                <div className="flex flex-col gap-4  text-background px-4 py-6 relative ">
                    <h1 className="text-2xl font-bold">Please verify your parental conset</h1>
                    <p className="text-sm">
                        Parental consent is required for further usage of our services.
                    </p>
                    <div className="absolute inset-0 flex flex-col bg-amber-400  app-banner -z-10">
                    </div>
                </div>

                <div className="bg-white text-center px-8 py-6 mt-auto">
                    <h3 className="text-xl font-semibold mb-3">We have sent a parental consent approval request to your email</h3>
                    <p className="text-base text-gray-600 mb-6">Please check your email and approve the request</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 px-8 pb-8 mt-auto ">
                    <p className="text-sm text-gray-600">
                        If you have not received the email, please check your spam folder or click
                    </p>
                    <Button onClick={() => { }} className="px-6 py-2">
                        Resend
                    </Button>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ParentConsentAlertDialog
