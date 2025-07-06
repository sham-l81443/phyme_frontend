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
import ClassSelector, { SubjectSelector, TermSelector } from "@/app/(auth)/(student)/signup/_components/class-selector";



const subjectSchema = z.object({
    name: REQUIRED_STRING_SCHEMA,
    description: OPTIONAL_STRING_SCHEMA,
    code: CODE_SCHEMA,
    subjectId: REQUIRED_STRING_SCHEMA,
    termId: REQUIRED_STRING_SCHEMA
})

type ICreateSubject = z.infer<typeof subjectSchema>

export default function CreateSubject() {

    const form = useForm<ICreateSubject>({
        resolver: zodResolver(subjectSchema),
        defaultValues: {
            name: "",
            description: "",
            subjectId: "",
            termId: "",
            code: "",
        },
    });

    const mutation = useMutation({
        mutationKey: ["createChapter"],
        mutationFn: (data: ICreateSubject) => apiHandler({ method: "POST", url: "/chapter/create", body: data }),
        onSuccess: (data) => {
            showSuccess('Chapter created successfully')
            form.reset()
        },
        onError: (error: any) => {
            showError(error?.message || "Something went wrong")
        },
    })


    async function onSubmit(formValues: ICreateSubject) {

        console.log(formValues);

        mutation.mutate(formValues)

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
                            <div className="p-4 grid grid-cols-1 md:grid-cols-2  space-x-10 ">
                                <div className="space-y-6">

                                    <CustomFormFieldInput
                                        form={form}
                                        name="name"
                                        label="Chapter Name"
                                        placeholder="Enter name of chapter"
                                        description="Name of the chapter (e.g. Math, Science)"
                                    />


                                    <CustomFormFieldInput
                                        form={form}
                                        name="description"
                                        label="Chapter Description"
                                        description="A brief description of the chapter"
                                        placeholder="Enter chapter description"
                                        optional={true}
                                        required={false}
                                    />

                                    <div className="space-y-6">
                                        <TermSelector name="termId" form={form} label="Select Term This Chapter Belongs To" required={true} />
                                    </div>
                                </div>
                                <div className="space-y-6 ">

                                    <CustomFormFieldInput
                                        form={form}
                                        name="code"
                                        label="Chapter Code"
                                        description="Unique code to identify the chapter"
                                        placeholder="eg. M1, M2, M3 etc"
                                    />

                                    <SubjectSelector name="subjectId" form={form} label="Select Subject This Chapter Belongs To" required={true} />
                                </div>



                            </div>
                        </Scroll>
                        <CreatePageFooter isPending={isPending} />
                    </form>
                </Form>
            </Section>
        </>
    );
}

