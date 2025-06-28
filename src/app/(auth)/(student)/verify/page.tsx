"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
// import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import z from "zod"

// import GoogleSvg from "@/assets/svg/google.svg"
import { Scroll, Section } from "@/components/common"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { verifyUSer } from "@/services/student/auth"
import { IVerifyFormValues } from "@/lib/validations"
import { showError, showSuccess } from "@/lib/toast"
import { STUDENT_ROUTES } from "@/constants/routes"
import { OTP_SCHEMA, PASSWORD_SCHEMA } from "@/constants/validation-schema"





const verifyAccountSchema = z.object({
    otp: OTP_SCHEMA,
    password: PASSWORD_SCHEMA,
    confirmPassword: PASSWORD_SCHEMA,
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})
    

const Login = () => {

    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    const router = useRouter()

    const form = useForm<IVerifyFormValues>({
        defaultValues: {
            password: "",
            confirmPassword: "",
            otp: ""
        },
        resolver: zodResolver(verifyAccountSchema)
    })





    const mutation = useMutation({
        mutationFn: verifyUSer,
        mutationKey: ['verifyUser'],
        retry: 1,
        onSuccess: (data) => {
            showSuccess('Account verified successfully')
            router.replace(STUDENT_ROUTES.dashboard)
        },
        onError: (error) => {
            showError(error?.message)
        }
    })

    const onSubmit = (formData: IVerifyFormValues) => {
        const body = {
            otp: formData.otp,
            password: formData.password,
            email
        }

        mutation.mutate(body)
    }

    const { isPending } = mutation


    return (
        <Section loading={isPending} className="center">
            <Scroll direction="column" className="center min-h-screen px-4 sm:px-6 md:px-10 max-w-[30rem] ">
                <div className='self-start mb-6'>
                    <p className='text-3xl font-bold text-gray-600 self-start'>Verify </p>
                    <p className='text-muted-foreground text-sm mt-1'>Please verify your account</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-y-4'>
                        <FormField
                            control={form.control}
                            name='otp'
                            render={({ field, fieldState }) => (
                                <FormItem >
                                    <FormControl>
                                        <Input maxLength={6} placeholder='OTP' {...field}></Input>
                                    </FormControl>
                                    {fieldState.error ? <FormMessage className='text-xs ml-1'></FormMessage> : <></>}
                                </FormItem>
                            )} />

                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field, fieldState }) => (
                                <FormItem >
                                    <FormControl>
                                        <Input type='password' placeholder='Password' {...field}></Input>
                                    </FormControl>
                                    {fieldState.error ? <FormMessage className='text-xs ml-1'></FormMessage> : <></>}
                                </FormItem>
                            )} />

                        <FormField
                            control={form.control}
                            name='confirmPassword'
                            render={({ field, fieldState }) => (
                                <FormItem >
                                    <FormControl>
                                        <Input type='password' placeholder='Confirm Password' {...field}></Input>
                                    </FormControl>
                                    {fieldState.error ? <FormMessage className='text-xs ml-1'></FormMessage> : <></>}
                                </FormItem>
                            )} />
                        <Button disabled={isPending} type='submit' className='w-full mt-4 tracking-wider'>Verify And Signup</Button>

                    </form>
                </Form>
            </Scroll>
        </Section>

    )
}

export default Login

