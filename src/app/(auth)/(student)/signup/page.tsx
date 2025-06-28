"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Scroll, Section } from "@/components/common"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from '@/components/ui/checkbox'
import { showError, showSuccess } from "@/lib/toast"
import logger from "@/utils/logger"
import { useState } from "react"
import CustomFormFieldInput from "@/components/common/custom-ui/custom-form-field-input"
import CustomFormFieldSelect from "@/components/common/custom-ui/custom-form-field-select"
import { EMAIL_SCHEMA, REQUIRED_STRING_SCHEMA } from "@/constants/validation-schema"
import {z} from 'zod'
import { apiHandler } from "@/utils/apiHandler"
import { ISignUpFormValues } from "@/lib/validations"
import SyllabusSelector from "./_components/syllabus-selector"
import ClassSelector from "./_components/class-selector"
const Signup = () => {


  const signupSchema = z.object({
    name:REQUIRED_STRING_SCHEMA,
    email:EMAIL_SCHEMA,
    terms:z.boolean().default(false).refine((value) => value === true, { message: 'Please accept the terms and conditions' }),
    classId:REQUIRED_STRING_SCHEMA,
    syllabusId:REQUIRED_STRING_SCHEMA

  })

  type IRegisterType = z.infer<typeof signupSchema>


  const form = useForm({
    defaultValues: {
      name: undefined,
      email: undefined,
      terms: false,
      classId: undefined,
      syllabusId: undefined
    },
    resolver: zodResolver(signupSchema)
  })


  const router = useRouter()
  const [isSsoLoading, setIsSsoLoading] = useState(false)

  const handleGoogleRegister = () => {
    setIsSsoLoading(true)
    try {

      router.push(`http://localhost:3001/api/google/callback/register`)

    } catch (error) {
      showError('Something went wrong')
    }


  }

  const mutation = useMutation({

    mutationFn: (data:IRegisterType)=>apiHandler({method:'POST',url:'/register',body:data}),

    onSuccess: () => {

      showSuccess("We have sent you an otp to your email, Please verify your email ")

      router.push(`/verify?email=${form.getValues('email')}`)

    },
    onError: (error) => {
      showError(error.message)
    },
  })

  const { isPending } = mutation

  function onSubmit(formData: IRegisterType) {

    console.log(formData,'signup form data')
    logger.info('signup form data', formData)

    const { email, name, terms, classId, syllabusId } = formData

    mutation.mutate({ email, name, terms, classId, syllabusId })

  }

  return (
    <Section loading={isPending || isSsoLoading} className="center">
      <Scroll direction="column" className="center min-h-screen px-4 sm:px-6 md:px-10 max-w-[30rem] ">
        <div className='self-start mb-6'>
          <p className='text-3xl font-bold text-gray-600 self-start'>SIGN UP</p>
          <p className='text-muted-foreground text-sm mt-1'>{`Let's get started`}</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-y-5'>

            <CustomFormFieldInput
              form={form}
              name="name"
              placeholder="Name"
            />

            <CustomFormFieldInput
              form={form}
              name="email"
              placeholder="Email Address"
            />

           

            <SyllabusSelector form={form} />

            <ClassSelector form={form} />

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
          <p className='text-muted-foreground text-xs'> Or signup with Google</p>
          <p className='h-[2px] flex-1 bg-zinc-200 rounded-sm'></p>
        </div>
        <a href="http://localhost:3001/api/google/callback?flow=register" className="w-full">
          <Button className='w-full bg-secondary text-muted-foreground hover:bg-secondary-dark gap-x-4 active:bg-secondary border border-secondary-dark mt-7' >
            <Image height={2} width={2} src={SVG.google} className='w-5 h-5' alt='google svg' />
            Signup with Google
          </Button>
        </a> */}
        <p className='text-sm text-muted-foreground py-5'>{"Already have an account?"} <span className='font-medium underline cursor-pointer hover:text-primary-dark' onClick={() => {
          router.push('/login')
        }}>Login</span></p>
      </Scroll>
    </Section>
  )
}

export default Signup