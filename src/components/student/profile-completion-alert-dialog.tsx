"use client"
import React from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogTitle } from '../ui/alert-dialog'
import Cookies from "js-cookie"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import clsx from 'clsx'
import { cn } from '@/lib/utils'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getClassList } from '@/services/admin/class'
import { getSyllabusList } from '@/services/admin/syllabus'
import { IClass } from '@/types/common/class'
import { ISyllabus } from '@/types/common/syllabus'
import { z } from 'zod'
import { SCHEMA } from '@/lib/validations/common'
import { zodResolver } from '@hookform/resolvers/zod'
import { completeProfileService } from '@/services/student/profile'
import { showError, showSuccess } from '@/lib/toast'
import { getMyDetails } from '@/services/student/my-details'


const ProfileCompletionAlertDialog = () => {

    // const isProfileCompleted = Cookies.get('is-profile-completed') === 'true';

    const { data: studentDetails, isFetching: isStudentDetailsFetching } = useQuery({
        queryKey: ['student-details'],
        queryFn: getMyDetails,
        staleTime: 1000 * 60 * 60 * 24,
    })




    const { data: classList, isPending: isClassFetchingLoading } = useQuery({
        queryKey: ['class-list'],
        queryFn: getClassList,
        enabled: studentDetails?.data?.isProfileComplete
    })


    const { data: syllabusList, isPending: isSyllabusFetchingLoading } = useQuery({
        queryKey: ['syllabus-list'],
        queryFn: getSyllabusList,
        enabled: studentDetails?.data?.isProfileComplete
    })


    const profileSchema = z.object({
        fullName: SCHEMA.name,
        classId: SCHEMA.required,
        syllabusId: SCHEMA.required,
        isUnderAged: z.boolean().default(false),
        parentEmail: z.string().email('Invalid email address').optional(),
    }).refine(
        (data) => {
            if (data.isUnderAged) {
                return typeof data.parentEmail === 'string' && data.parentEmail.length > 0;
            }
            return true;
        },
        {
            message: 'Parent email is required for underaged users',
            path: ['parentEmail'],
        }
    );

    const form = useForm({
        defaultValues: {
            fullName: '',
            classId: undefined,
            syllabusId: undefined,
            isUnderAged: false,
            parentEmail: undefined,
        },
        resolver: zodResolver(profileSchema),

    })


    type IProfileCompletion = z.infer<typeof profileSchema>

    const mutation = useMutation({
        mutationKey: ['complete-profile'],
        mutationFn: completeProfileService,
        onSuccess: () => {
            showSuccess('Profile completed successfully')
        },
        onError: (error: any) => {
            showError(error?.message || "Something went wrong")
        }
    })


    function onSubmit(formData: IProfileCompletion) {
        console.log(formData)
        mutation.mutate(formData)
    }

    if(isStudentDetailsFetching)return

    if (studentDetails?.data?.isProfileComplete  ) return null


    return (
        <AlertDialog open={true}>
            <AlertDialogTitle />
            <AlertDialogContent className="min-w-1/2 p-0 overflow-x-hidden border-none ">
                <div className="flex flex-col gap-4  text-background px-4 py-6 relative ">
                    <h1 className="text-2xl font-bold">Please complete your profile</h1>
                    <p className="text-sm">
                        Your profile is incomplete. Please complete your profile to continue using our services.
                    </p>
                    <div className="absolute inset-0 flex flex-col bg-amber-400  app-banner -z-10">
                    </div>

                </div>
                <Form {...form} >
                    <form className='p-4 space-y-8' onSubmit={form.handleSubmit(onSubmit)} action="">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Please enter your full name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="classId"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Select the class you are studying</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={JSON.stringify(field.value)}
                                    >
                                        <FormControl className='w-full '>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose class" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>

                                            {
                                                classList?.data.map((classItem: IClass) => {
                                                    return (
                                                        <SelectItem key={classItem.id} value={JSON.stringify(classItem.id)}>
                                                            {classItem.name}
                                                        </SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Select your current class to personalize your learning experience. The lessons, quizzes, and videos you see will be based on this selection.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="syllabusId"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Select your syllabus</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={JSON.stringify(field.value)}
                                    >
                                        <FormControl className='w-full '>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose syllabus" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>

                                            {
                                                syllabusList?.data.map((syllabus: ISyllabus) => {
                                                    return (
                                                        <SelectItem key={syllabus.id} value={JSON.stringify(syllabus.id)}>
                                                            {syllabus.name}
                                                        </SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Select your current syllabus to personalize your learning experience. The lessons, quizzes, and videos you see will be based on this selection.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='bg-secondary p-4 rounded-md flex flex-col space-y-8'>
                            <FormField
                                control={form.control}
                                name="isUnderAged"
                                render={({ field, fieldState }) => (
                                    <FormItem className="flex flex-row items-start space-x-1 space-y-0 mt-2 relative ">
                                        <FormControl>
                                            <Checkbox
                                                className='h-5 w-5'
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className={clsx('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600')}>I am under 13 years old</FormLabel>
                                            <FormDescription className={clsx('text-xs')}>
                                                For users under 13, we require confirmation due to privacy regulations.
                                            </FormDescription>
                                            {fieldState.error ? <FormMessage className='text-xs' /> : <></>}
                                        </div>

                                    </FormItem>
                                )} />

                            <FormField
                                control={form.control}
                                name="parentEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn(form.watch('isUnderAged') ? '' : 'text-gray-400')}>Please enter your parent email address</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={form.watch('isUnderAged') ? false : true}
                                                placeholder="Please enter parent email address"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription className={clsx('text-xs')}>
                                            We need your parent's email address to verify your parental consent.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className='ml-auto w-max'>
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ProfileCompletionAlertDialog