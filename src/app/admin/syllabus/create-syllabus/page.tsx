"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Scroll, Section } from "@/components/common";
import { useMutation } from "@tanstack/react-query";
import { showError, showSuccess } from "@/lib/toast";
import CustomFormFieldInput from "@/components/common/custom-ui/custom-form-field-input";
import { OPTIONAL_STRING_SCHEMA, CODE_SCHEMA, REQUIRED_STRING_SCHEMA } from "@/constants/validation-schema";
import { apiHandler } from "@/utils/apiHandler";
import CreatePageFooter from "@/components/common/custom-ui/create-page-footer";

const createSyllabus = z.object({
    name: REQUIRED_STRING_SCHEMA,
    description: OPTIONAL_STRING_SCHEMA,
    code: CODE_SCHEMA,
});

export type ICreateSyllabus = z.infer<typeof createSyllabus>;

export default function SyllabusForm() {
    const router = useRouter();


    const form = useForm<ICreateSyllabus>({
        resolver: zodResolver(createSyllabus),
        defaultValues: {
            name: "",
            description: "",
            code: "",
        },
    });

    const mutation = useMutation({
        mutationKey: ["createSyllabus"],
        mutationFn: (data: ICreateSyllabus) => apiHandler({ method: "POST", url: "/admin/syllabus/create", body: data }),
        onSuccess: (data) => {
            showSuccess('Syllabus created successfully')
            form.reset()
        },
        onError: (error: any) => {
            showError(error?.message || "Something went wrong")
        },
    })


    async function onSubmit(formValues: ICreateSyllabus) {

        console.log(formValues);

        const { name, description, code } = formValues

        mutation.mutate({ name, code, description })

    }

    const { isPending } = mutation

    return (
        <>
            <Section className="p-0 bg-white">
                <Form {...form}>
                    <form className="flex-1 flex flex-col h-full  overflow-hidden" onSubmit={form.handleSubmit(onSubmit)}>

                        <Scroll className=" p-3">
                            <div className=" grid grid-cols-1 md:grid-cols-2  space-x-10 ">
                                <div className="space-y-10">
                                    <CustomFormFieldInput
                                    form={form}
                                    name="name"
                                    label="Name"
                                    placeholder="Enter Syllabus Name"
                                    />

                                    <CustomFormFieldInput
                                    form={form}
                                    name="description"
                                    label="Description"
                                    optional
                                    placeholder="Enter Syllabus Description"
                                    description="A brief description of the syllabus content."
                                    />
                                </div>

                                <div>
                                    <CustomFormFieldInput
                                        form={form}
                                        name="code"
                                        label="Unique Code"
                                        placeholder="eg. S1,S2,S3 etc"
                                        description="Unique code is important to identify the syllabus"
                                    />
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
