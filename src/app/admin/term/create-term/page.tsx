"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
} from "@/components/ui/form";
import CustomFormFieldInput from "@/components/common/custom-ui/custom-form-field-input";
import { Scroll, Section } from "@/components/common";
import { useMutation } from "@tanstack/react-query";
import { showError, showSuccess } from "@/lib/toast";
import { z } from "zod";
import { ICreateClass } from "@/lib/validations/class.schema";
import { createClassService } from "@/services/admin/class";
import CreatePageFooter from "@/components/common/custom-ui/create-page-footer";
import SyllabusSelector from "@/app/(auth)/(student)/signup/_components/syllabus-selector";
import { CODE_SCHEMA, OPTIONAL_STRING_SCHEMA, REQUIRED_STRING_SCHEMA } from "@/constants/validation-schema";
import { apiHandler } from "@/utils/apiHandler";
import ClassSelector from "@/app/(auth)/(student)/signup/_components/class-selector";



const termSchema = z.object({
    name: REQUIRED_STRING_SCHEMA,
    description: OPTIONAL_STRING_SCHEMA,
    code: CODE_SCHEMA,
    classId: REQUIRED_STRING_SCHEMA,
})

export type ITerm = z.infer<typeof termSchema>

export default function CreateTerm() {

    const form = useForm<ITerm>({
        resolver: zodResolver(termSchema),
        defaultValues: {
            name: "",
            description: "",
            classId: "",
            code: "",
        },
    });

    const mutation = useMutation({
        mutationKey: ["createTerm"],
        mutationFn:(body:ITerm)=> apiHandler({ method: "POST", url: "/term/create", body }),
        onSuccess: (data) => {
            console.log(data)
            showSuccess('Term created successfully')
            form.reset()
        },
        onError: (error: any) => {
            showError(error?.message || "Something went wrong")
        },
    })


    async function onSubmit(formValues: ITerm) {
        console.log(formValues);

        const { name, description, code, classId } = formValues

        mutation.mutate({ name, code, description, classId })

    }

    const { isPending } = mutation


    return (
        <>
            <Section className="p-0 bg-white">
                <Form {...form}>
                    <form className="flex-1 flex flex-col h-full  overflow-hidden" onSubmit={form.handleSubmit(onSubmit)}>

                        <Scroll className="  pt-0">
                            <div className="py-4 px-4 bg-accent">
                                <h1 className="text-2xl font-semibold">Create Class</h1>
                            </div>
                            <div className="p-4 grid grid-cols-1 md:grid-cols-2  space-x-12 ">
                                <div className="space-y-10">

                                    <CustomFormFieldInput
                                        form={form}
                                        name="name"
                                        label="Term Name"
                                        placeholder="Enter name of term"
                                        description="Name of the term (e.g. Term 1, Term 2)"
                                    />



                                    <CustomFormFieldInput
                                        form={form}
                                        name="description"
                                        label="Term Description"
                                        description="A brief description of the term"
                                        placeholder="Enter term description"
                                        optional={true}
                                        required={false}
                                    />
                                </div>
                                <div className="space-y-10 ">

                                    <CustomFormFieldInput
                                        form={form}
                                        name="code"
                                        label="Term Code"
                                        description="Unique code to identify the term"
                                        placeholder="eg. T1, T2, T3 etc"
                                    />

                                    <ClassSelector name="classId" form={form} label="Select Class This Term Belongs To" required={true}/>
                                </div>

                            </div>
                        </Scroll>
                        <CreatePageFooter isPending={isPending}/>
                    </form>
                </Form>
            </Section>
        </>
    );
}

