"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Scroll, Section } from "@/components/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createSyllabusService } from "@/services/admin/syllabus";
import { showError, showSuccess } from "@/lib/toast";
import { SCHEMA } from "@/lib/validations/common";
import CustomFormFieldInput from "@/components/common/custom-ui/custom-form-field-input";
import CustomFormFieldSelect from "@/components/common/custom-ui/custom-form-field-select";
import { getClassList } from "@/services/admin/class";
import { createSubjectService } from "@/services/admin/subject";

const createSubject = z.object({
    name: SCHEMA.name,
    classId: z.string().min(1, "Class ID is required"),
    teacherName: z.string().min(2).max(50).optional(),
    code: SCHEMA.uniqueCode
});

export type ICreateSubject = z.infer<typeof createSubject>;

export default function createSubjectForm() {
    const router = useRouter();

    const form = useForm<ICreateSubject>({
        resolver: zodResolver(createSubject),
        defaultValues: {
            name: "",
            classId: "",
            teacherName: "",
            code: "",
        },
    });

    const mutation = useMutation({
        mutationKey: ["createSubject"],
        mutationFn: createSubjectService,
        onSuccess: (data) => {
            showSuccess('Subject created successfully')
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
    const { data: classList, isPending: isClassFetchingLoading } = useQuery({
        queryKey: ['class-list'],
        queryFn: getClassList,
      })
    

    return (
        <>
            <Section className="p-0 bg-white">
                <Form {...form}>
                    <form className="flex-1 flex flex-col h-full  overflow-hidden" onSubmit={form.handleSubmit(onSubmit)}>

                        <Scroll className=" p-3">
                            <div className=" grid grid-cols-1 md:grid-cols-2  space-x-10 ">

                                    <CustomFormFieldInput
                                        form={form}
                                        name="name"
                                        label="Subject Name"
                                        placeholder="Enter subject name"
                                    />
                                    
                                    <CustomFormFieldInput
                                        form={form}
                                        name="teacherName"
                                        label="Teacher Name"
                                        placeholder="Enter Teacher Name"
                                        optional
                                    />

                               
                            </div>

                            <div className="mt-6 grid grid-cols-2 w-full space-x-10">

                            <CustomFormFieldInput
                                        form={form}
                                        name="code"
                                        label="Class Code"
                                        description="Unique code to identify the class"
                                        placeholder="eg. C1, C2, C3 etc"
                                    />

                                <CustomFormFieldSelect
                                        name="classId"
                                        form={form}
                                        label="class"
                                        description="Select the class this subject belongs to"
                                        placeholder="Select class"
                                        options={classList?.data || []}
                                    />

                            </div>
                        </Scroll>
                        <div className="flex items-center gap-x-5 py-2 justify-between px-3 bg-primary/5">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => router.back()}
                            >
                                GO BACK
                            </Button>
                            <Button className="min-w-[8rem]" type="submit" isLoading={isPending} disabled={isPending}>
                                CREATE
                            </Button>
                        </div>
                    </form>
                </Form>
            </Section>
        </>
    );
}
