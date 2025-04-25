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
import { useMutation } from "@tanstack/react-query";
import { createSyllabusService } from "@/services/admin/syllabus";
import { showError, showSuccess } from "@/lib/toast";
import { SCHEMA } from "@/lib/validations/common";

const createSyllabus = z.object({
    name: SCHEMA.name,
    description: SCHEMA.description,
    year: z.coerce.number().int().positive().optional(),
    language: z.string().optional(),
    gradeLevels: z.array(z.string()).optional(),
    uniqueCode: SCHEMA.uniqueCode,
});

export type ICreateSyllabus = z.infer<typeof createSyllabus>;

export default function SyllabusForm() {
    const router = useRouter();
    const [gradeLevels, setGradeLevels] = useState<string[]>([]);
    const [gradeInput, setGradeInput] = useState("");

    const form = useForm<ICreateSyllabus>({
        resolver: zodResolver(createSyllabus),
        defaultValues: {
            name: "",
            description: "",
            year: new Date().getFullYear(),
            language: "English",
            gradeLevels: [],
            uniqueCode: "",
        },
    });

    const mutation = useMutation({
        mutationKey: ["createSyllabus"],
        mutationFn: createSyllabusService,
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

        const { name, description, year, language, uniqueCode } = formValues

        mutation.mutate({ name, uniqueCode, description, year, language, gradeLevels: gradeLevels || [] })

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

                        <Scroll className=" p-3">
                            <div className=" grid grid-cols-1 md:grid-cols-2  space-x-10 ">
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
                                        name="year"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Academic Year <span className="text-primary/60">(optional)</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        placeholder="Enter academic year"
                                                        {...field}
                                                        value={field.value || ""}
                                                        onChange={(e) =>
                                                            field.onChange(e.target.valueAsNumber)
                                                        }
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    The academic year this syllabus applies to.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="language"
                                        render={({ field }) => (
                                            <FormItem >
                                                <FormLabel>Language <span className="text-primary/60">(optional)</span></FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}

                                                >
                                                    <FormControl className="w-full">
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select language" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="English">English</SelectItem>
                                                        <SelectItem value="Spanish">Spanish</SelectItem>
                                                        <SelectItem value="French">French</SelectItem>
                                                        <SelectItem value="German">German</SelectItem>
                                                        <SelectItem value="Chinese">Chinese</SelectItem>
                                                        <SelectItem value="Japanese">Japanese</SelectItem>
                                                        <SelectItem value="Other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormDescription>
                                                    The primary language of instruction.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 w-full space-x-10">

                                <div className=" ">
                                    <FormLabel>Grade Levels <span className="text-primary/60">(optional)</span></FormLabel>
                                    <div className="flex mt-2 mb-2">
                                        <Input
                                            value={gradeInput}
                                            onChange={(e) => setGradeInput(e.target.value)}
                                            placeholder="Add grade level (e.g., 9th, 10th, Elementary)"
                                            className="flex-1 mr-2"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    addGradeLevel();
                                                }
                                            }}
                                        />
                                        <Button
                                            className="min-w-20"
                                            type="button"
                                            onClick={addGradeLevel}
                                        >
                                            Add
                                        </Button>
                                    </div>
                                    <FormDescription>
                                        Add all applicable grade levels for this syllabus.
                                    </FormDescription>

                                    {gradeLevels.length > 0 && (
                                        <div className="mt-4">
                                            <div className="text-sm font-medium mb-2">
                                                Added Grade Levels:
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {gradeLevels.map((grade, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-md"
                                                    >
                                                        <span>{grade}</span>
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-auto p-1 ml-1"
                                                            onClick={() => removeGradeLevel(index)}
                                                        >
                                                            <Trash2 className="h-3 w-3" />
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="uniqueCode"
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
                                </div>

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
