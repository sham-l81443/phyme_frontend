"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
// import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import z from "zod"

// import GoogleSvg from "@/assets/svg/google.svg"
import { Scroll, Section } from "@/components/common"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { loginStudent } from "@/services/student/auth"
import { ILogInFormValues, loginSchema } from "@/lib/validations"
import { STUDENT_ROUTES } from "@/constants/routes"
import { setStudentDataById } from "@/store/student/studentStore"
import { STUDENT_STORE_KEY } from "@/store/store-key"







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
        console.log(formData)
        // router.push("/")
        mutation.mutate(formData)
    }


    const mutation = useMutation({
        mutationFn: loginStudent,
        mutationKey: ["loginUser"],
        onSuccess: (data) => {
            console.log(data)
            toast.success("Login succesful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            setStudentDataById(STUDENT_STORE_KEY.IS_STUDENT_LOGGED_IN, true, 'persist')
            setStudentDataById(STUDENT_STORE_KEY.IS_PREMIUM_STUDENT, data?.data?.userType || 'Free', 'persist')
            setStudentDataById(STUDENT_STORE_KEY.STUDENT_DATA, data?.data || null, 'persist')

            router.push(STUDENT_ROUTES.dashboard)
        },
        onError: (error: Error) => {
            console.log(error)

            toast.error(error?.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

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
                {/* <div className='flex items-center gap-2 w-full mt-7'>
                    <p className='h-[2px] flex-1 bg-zinc-200 rounded-sm'></p>
                    <p className='text-muted-foreground text-xs'> Or Login with Google</p>
                    <p className='h-[2px] flex-1 bg-zinc-200 rounded-sm'></p>
                </div>
                <Button className='w-full bg-secondary text-muted-foreground hover:bg-secondary-dark gap-x-4 active:bg-secondary border border-secondary-dark mt-7' onClick={() => { }}>
                    <Image height={2} width={2} src={GoogleSvg} className='w-5 h-5' alt='google svg' />
                    Login with Google
                </Button> */}

                <p className='text-sm text-muted-foreground py-5'>{"Don't have an account?"} <span className='font-medium underline cursor-pointer hover:text-primary-dark' onClick={() => {
                    router.push("/signup")
                }}>Signup</span></p>
            </Scroll>
        </Section>

    )
}

export default Login

