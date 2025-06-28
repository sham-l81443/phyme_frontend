"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
// import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

// import GoogleSvg from "@/assets/svg/google.svg"
import { DefaultPageLoader, Scroll, Section } from "@/components/common"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { loginStudent } from "@/services/student/auth"
import { ILogInFormValues, loginSchema } from "@/lib/validations"
import { STUDENT_ROUTES } from "@/constants/routes"
import { setStudentDataById } from "@/store/student/studentStore"
import { STUDENT_STORE_KEY } from "@/store/store-key"
import { SVG } from "@/assets/svg"
import Image from "next/image"
import { showError, showSuccess } from "@/lib/toast"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { getMyDetails } from "@/services/student/my-details"
import { Loader2 } from "lucide-react"
import CustomFormFieldInput from "@/components/common/custom-ui/custom-form-field-input"




const Login = () => {
    const router = useRouter()
    const [isSsoLoading, setIsSsoLoading] = useState(false)

    // Initialize all hooks first
    const { data: studentDetails, isFetching: isStudentDetailsFetching } = useQuery({
        queryKey: ['student-details'],
        queryFn: getMyDetails,
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnMount: false,
        enabled: Cookies.get('s_l_i') === 'true'
    })

    const form = useForm<ILogInFormValues>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
    })

    const mutation = useMutation({
        mutationFn: loginStudent,
        mutationKey: ["loginUser"],
        onSuccess: (data) => {
            showSuccess("Login succesful")
            setStudentDataById(STUDENT_STORE_KEY.IS_STUDENT_LOGGED_IN, true, 'persist')
            setStudentDataById(STUDENT_STORE_KEY.IS_PREMIUM_STUDENT, data?.data?.userType || 'Free', 'persist')
            setStudentDataById(STUDENT_STORE_KEY.STUDENT_DATA, data?.data || null, 'persist')
            router.push(STUDENT_ROUTES.dashboard)
        },
        onError: (error: Error) => {
            console.log(error)
            showError(error?.message || "Something went wrong")
        },
    })

    useEffect(() => {
        const ssoError = Cookies.get('sso-error');
        if (ssoError) {
            showError(ssoError)
            Cookies.remove('sso-error');
        }
    }, [])

    const handleGoogleLogin = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsSsoLoading(true)
        window.location.href = 'http://localhost:3001/api/google/callback?flow=login'
    }

    const onSubmit = (formData: ILogInFormValues) => {
        console.log(formData)
        mutation.mutate(formData)
    }

    const { isPending } = mutation

    // Handle loading and redirects after all hooks
    useEffect(() => {
        if (studentDetails?.success) {
            router.push(STUDENT_ROUTES.dashboard)
        }
    }, [studentDetails?.success, router])

    if (isStudentDetailsFetching) {
        return <DefaultPageLoader />
    }

    return (
        <Section loading={isPending || isSsoLoading} className="center bg-background">
            <Scroll direction="column" className="center min-h-screen px-4 sm:px-6 md:px-10 max-w-[30rem] bg-background">
                <div className='self-start flex-col flex w-max mb-6'>
                    <p className='text-3xl font-bold text-primary self-start'>LOGIN </p>
                    <p className='text-muted-foreground text-sm mt-1'>{"Let's get started"}</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-4">
                        <CustomFormFieldInput
                            form={form}
                            name="email"
                            placeholder="Email Address"
                            type="email"    
                        />

                        <CustomFormFieldInput
                            form={form}
                            name="password"
                            placeholder="Password"
                            type="password"
                        />

                        <Button
                            type="submit"
                            className="w-full mt-4 tracking-wider bg-foreground text-background hover:bg-foreground/90"
                            disabled={isPending}
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </Button>
                    </form>
                </Form>
                {/* <div className="flex items-center gap-2 w-full mt-7">
                    <p className="h-[2px] flex-1 bg-border rounded-sm"></p>
                    <p className="text-muted-foreground text-xs"> Or Login with Google</p>
                    <p className="h-[2px] flex-1 bg-border rounded-sm"></p>
                </div>
                <a href="http://localhost:3001/api/google/callback?flow=login" className="w-full">
                    <Button
                        className="w-full bg-muted text-muted-foreground hover:bg-muted/80 gap-x-4 active:bg-muted border border-border mt-7"
                        onClick={handleGoogleLogin}
                        disabled={isSsoLoading}
                    >
                        {isSsoLoading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                        )}
                        Login with Google
                    </Button>
                </a> */}
                <p className="text-sm text-muted-foreground py-5">
                    {"Don't have an account?"}{" "}
                    <span
                        className="font-medium underline cursor-pointer hover:text-foreground"
                        onClick={() => {
                            router.push("/signup")
                        }}
                    >
                        Signup
                    </span>
                </p>
            </Scroll>
        </Section>

    )
}

export default Login

