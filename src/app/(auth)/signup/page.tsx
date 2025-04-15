"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
// import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

// import GoogleSvg from "@/assets/svg/google.svg"
import { Scroll, Section } from "@/components/common"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { signupStudent } from "@/services/student/auth"
import { ISignUpFormValues, signupSchema } from "@/lib/validations"
import { Checkbox } from '@/components/ui/checkbox'
import { showError, showSuccess } from "@/lib/toast"
import logger from "@/utils/logger"
const Signup = () => {

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      terms: false,
      registrationType: "DEFAULT"
    },
    resolver: zodResolver(signupSchema)
  })


  const router = useRouter()


  const mutation = useMutation({
    mutationFn: signupStudent,
    onSuccess: () => {
      showSuccess("We have sent you an otp to your email, Please verify your email ")
      router.push('/verify')
    },
    onError: (error) => {
      showError(error.message)
    },
  })
  const { isPending } = mutation

  function onSubmit(formData: ISignUpFormValues) {
    logger.info('signup form data', formData)
    const { name, email, phone } = formData
    mutation.mutate({ name, email, phone, registrationType: "DEFAULT" })
  }

  return (
    <Section loading={isPending} className="center">
      <Scroll direction="column" className="center min-h-screen px-4 sm:px-6 md:px-10 max-w-[30rem] ">
        <div className='self-start mb-6'>
          <p className='text-3xl font-bold text-gray-600 self-start'>SIGN UP</p>
          <p className='text-muted-foreground text-sm mt-1'>{`Let's get started`}</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-y-5'>
            <FormField
              control={form.control}
              name='name'
              render={({ field, fieldState }) => (
                <FormItem >
                  <FormControl>
                    <Input placeholder='Name' {...field}></Input>
                  </FormControl>
                  {fieldState.error ? <FormMessage className='text-xs ml-1' /> : <></>}
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name='email'
              render={({ field, fieldState }) => (
                <FormItem >
                  <FormControl>
                    <Input placeholder='Email Address' {...field}></Input>
                  </FormControl>
                  {fieldState.error ? <FormMessage className='text-xs ml-1' /> : <></>}
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name='phone'
              render={({ field, fieldState }) => (
                <FormItem >
                  <FormControl>
                    <Input placeholder='Phone Number ' {...field}></Input>
                  </FormControl>
                  <FormDescription>(optional)</FormDescription>
                  {fieldState.error ? <FormMessage className='text-xs ml-1' /> : <></>}
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name="terms"
              render={({ field, fieldState }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0 mt-2 relative">
                  <FormControl>
                    <Checkbox
                      className="border-primary"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">

                    <FormLabel className={'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600'}>Accept terms and conditions</FormLabel>
                    <FormDescription className={'text-xs'}>
                      By signing up, you agree to our Terms of Service and Privacy Policy. <span className="block underline text-blue-600 mt-1">read terms & policy </span>
                    </FormDescription>
                    {fieldState.error ? <FormMessage className='text-xs' /> : <></>}

                  </div>

                </FormItem>
              )} />
            <Button type='submit' className='w-full mt-3 tracking-wider' disabled={isPending}>Signup</Button>


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

        <p className='text-sm text-muted-foreground py-5'>{"Already have an account?"} <span className='font-medium underline cursor-pointer hover:text-primary-dark' onClick={() => {
          router.push('/login')
        }}>Login</span></p>
      </Scroll>
    </Section>
  )
}

export default Signup