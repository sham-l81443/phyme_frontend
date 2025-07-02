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



const classSchema = z.object({
    name: REQUIRED_STRING_SCHEMA,
    description: OPTIONAL_STRING_SCHEMA,
    code: CODE_SCHEMA,
    syllabusId: REQUIRED_STRING_SCHEMA,
})

export default function SyllabusForm() {

    const form = useForm<ICreateClass>({
        resolver: zodResolver(classSchema),
        defaultValues: {
            name: "",
            description: "",
            syllabusId: "",
            code: "",
        },
    });

    const mutation = useMutation({
        mutationKey: ["createClass"],
        mutationFn: createClassService,
        onSuccess: (data) => {
            showSuccess('Class created successfully')
            form.reset()
        },
        onError: (error: any) => {
            showError(error?.message || "Something went wrong")
        },
    })


    async function onSubmit(formValues: ICreateClass) {
        console.log(formValues);

        const { name, description, code, syllabusId } = formValues

        mutation.mutate({ name, code, description, syllabusId: syllabusId })

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
                                        label="Class Name"
                                        placeholder="Enter name of class"
                                        description="Name of the class (e.g. Class 1, First Grade)"
                                    />



                                    <CustomFormFieldInput
                                        form={form}
                                        name="description"
                                        label="Class Description"
                                        description="A brief description of the class"
                                        placeholder="Enter class description"
                                        optional={true}
                                        required={false}
                                    />
                                </div>
                                <div className="space-y-6 ">

                                    <CustomFormFieldInput
                                        form={form}
                                        name="code"
                                        label="Class Code"
                                        description="Unique code to identify the class"
                                        placeholder="eg. C1, C2, C3 etc"
                                    />

                                    <SyllabusSelector  form={form} label="Select Syllabus This Class Belongs To" required={true}/>


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

