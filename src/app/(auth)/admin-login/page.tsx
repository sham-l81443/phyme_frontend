"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import { Scroll, Section } from "@/components/common"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { ILogInFormValues, loginSchema } from "@/lib/validations"
import { ADMIN_ROUTES } from "@/constants/routes"
import { setStudentDataById } from "@/store/student/studentStore"
import { STUDENT_STORE_KEY } from "@/store/store-key"

import { showError, showSuccess } from "@/lib/toast"
import { loginAdmin } from "@/services/admin/auth"




const Login = () => {


    const router = useRouter()

    const form = useForm<ILogInFormValues>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
    })



    const onSubmit = (formData: ILogInFormValues) => {
        mutation.mutate(formData)
    }


    const mutation = useMutation({
        mutationFn: loginAdmin,
        mutationKey: ["loginUser"],
        onSuccess: (data) => {

            showSuccess("Login succesful")
            setStudentDataById(STUDENT_STORE_KEY.IS_STUDENT_LOGGED_IN, true, 'persist')
            setStudentDataById(STUDENT_STORE_KEY.IS_PREMIUM_STUDENT, data?.data?.userType || 'Free', 'persist')
            setStudentDataById(STUDENT_STORE_KEY.STUDENT_DATA, data?.data || null, 'persist')

            router.push(ADMIN_ROUTES.dashboard)
        },
        onError: (error: Error) => {
            console.log(error)

            showError(error?.message || "Something went wrong")

        },

    })

    const { isPending } = mutation


    return (
        <Section loading={isPending} className="center">
            <Scroll direction="column" className="center min-h-screen px-4 sm:px-6 md:px-10 max-w-[30rem] ">
                <div className='self-start flex-col flex w-max mb-6'>
                    <p className='text-3xl font-bold text-gray-600 self-start'>LOGIN </p>
                    <p className='text-muted-foreground text-sm mt-1'>{"Let's get started"}</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-y-4'>
                        <FormField
                            control={form.control}
                            name={"email"}
                            render={({ field, fieldState }) => (
                                <FormItem >
                                    <FormLabel></FormLabel>
                                    <FormControl>
                                        <Input placeholder='Email Address' {...field}></Input>
                                    </FormControl>
                                    {fieldState.error ? <FormMessage className='text-xs ml-1'></FormMessage> : <></>}
                                </FormItem>
                            )} />

                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field, fieldState }) => (
                                <FormItem >
                                    <FormLabel></FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder='password' {...field}></Input>
                                    </FormControl>
                                    {fieldState.error ? <FormMessage className='text-xs ml-1'></FormMessage> : <></>}
                                </FormItem>
                            )} />

                        <Button type='submit' className='w-full mt-4 tracking-wider'>Login</Button>

                    </form>
                </Form>
            </Scroll>
        </Section>

    )
}

export default Login

