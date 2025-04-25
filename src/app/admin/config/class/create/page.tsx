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
import { createSyllabusService, getSyllabusList } from "@/services/admin/syllabus";
import { showError, showSuccess } from "@/lib/toast";
import { SCHEMA } from "@/lib/validations/common";
import { classSchema, ICreateClass } from "@/lib/validations/class.schema";
import { createClassService } from "@/services/admin/class";
import { json } from "stream/consumers";
import { ISyllabus } from "@/types/common/syllabus";




export default function SyllabusForm() {
    const router = useRouter();
    const [gradeLevels, setGradeLevels] = useState<string[]>([]);
    const [gradeInput, setGradeInput] = useState("");

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
        },
        onError: (error: any) => {
            showError(error?.message || "Something went wrong")
        },
    })

    const { data: syllabusList, isPending: isSyllabusFetchingLoading } = useQuery({
        queryKey: ['syllabus-list'],
        queryFn: getSyllabusList,
    })
    async function onSubmit(formValues: ICreateClass) {
        console.log(formValues);

        const { name, description, code, syllabusId } = formValues

        mutation.mutate({ name, code, description, syllabusId: syllabusId })

        try {

        } catch (error: any) {

        } finally {
        }
    }

    function addGradeLevel() {
        if (gradeInput.trim() && !gradeLevels.includes(gradeInput.trim())) {
            setGradeLevels([...gradeLevels, gradeInput.trim()]);
            setGradeInput("");
        }
    }

    function removeGradeLevel(index: number) {
        const newGradeLevels = [...gradeLevels];
        newGradeLevels.splice(index, 1);
        setGradeLevels(newGradeLevels);
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
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter syllabus name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    The name of your syllabus.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description <span className="text-primary/60">(optional)</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter syllabus description"
                                                        {...field}
                                                        value={field.value || ""}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    A brief description of the syllabus content.
                                                    (optional)
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="space-y-6 ">
                                    <FormField
                                        control={form.control}
                                        name="code"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Enter a unique code</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="eg. S1,S2,S3 etc"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    Unique code is important to identify the syllabus
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="syllabusId"
                                        render={({ field }) => (
                                            <FormItem >
                                                <FormLabel>Choose a syllabus<span className="text-red-500">*</span></FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}

                                                >
                                                    <FormControl className="w-full">
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select syllabus" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {
                                                            syllabusList?.data?.map((item: ISyllabus) => {
                                                                return (
                                                                    <SelectItem value={JSON.stringify(item?.id)}>{item?.name}</SelectItem>

                                                                )
                                                            })
                                                        }
                                                    </SelectContent>
                                                </Select>
                                                <FormDescription>
                                                    Class comes under a syllabus, so choose one
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </Scroll>
                        <div className="flex items-center gap-x-5 py-2 justify-between px-4 bg-accent">
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
