import z from 'zod';
import { SCHEMA } from './common';




export const loginSchema = z.object({
    email: SCHEMA.email,
    password: SCHEMA.required,
})


export const signupSchema = z.object({
    // name: SCHEMA.name,
    email: SCHEMA.email,
    // phone: SCHEMA.phone,
    terms: z.boolean().default(false).refine((value) => value === true, { message: 'Please accept the terms and conditions' }),
    registrationType: SCHEMA.registrationTypeDefault,
})


export const verifyAccountSchema = z.object({
    otp: SCHEMA.otp,
    password: SCHEMA.password,
    confirmPassword: SCHEMA.confirmPassword
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});


export type ILogInFormValues = z.infer<typeof loginSchema>;
export type IVerifyFormValues = z.infer<typeof verifyAccountSchema>;
export type ISignUpFormValues = z.infer<typeof signupSchema>;
