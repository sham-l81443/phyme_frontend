"use client"
import { Scroll, Section } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateVideoSchema, ICreateVideo } from "@/schema/video.schema";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getClassList } from "@/services/admin/class";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import React from "react";
import { Calendar } from "@/components/ui/calendar";


const VideoCreationForm = () => {

    const router = useRouter()
    const [date, setDate] = React.useState<Date>()

    const form = useForm<ICreateVideo>({
        resolver: zodResolver(CreateVideoSchema)
    });

    function onSubmit(values: ICreateVideo) {
        console.log(values);
    }

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
                            <div className=" grid grid-cols-1 md:grid-cols-2  gap-x-10 gap-y-6">

                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter name"
                                                    {...field}
                                                    value={field.value || ""}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                The name of your video which will be displayed.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

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
                                                Unique code is important to identify the video
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
                                                    placeholder="Enter video description"
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
                                <FormField
                                    control={form.control}
                                    name="embedLink"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Embed Link</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter embed link"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                The embed link of the video.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="classId"
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormLabel>Class</FormLabel>
                                            <Select
                                                onValueChange={(value) => field.onChange(Number(value))}
                                                defaultValue={field.value?.toString()}
                                            >
                                                <FormControl className="w-full">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select class this video belongs to" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        classList?.data?.map((classItem: any) => (
                                                            <SelectItem key={classItem.id} value={classItem.id.toString()}>
                                                                {classItem.name}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormDescription>
                                                The class this video belongs to.This is important for proper categorization.s
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />



                                <FormField
                                    control={form.control}
                                    name="thumbnail"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Thumbnail</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter thumbnail URL"
                                                    {...field}
                                                    value={field.value || ""}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                The thumbnail of your video which will be displayed.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="duration"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Duration</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter duration"
                                                    {...field}
                                                    value={field.value || ""}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                The duration of your video.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="isFree"
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormLabel>Is this video available for free users </FormLabel>
                                            <Select
                                                onValueChange={(value) => field.onChange(value === 'true')}
                                                defaultValue={String(field.value)}
                                            >
                                                <FormControl className="w-full">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Is this free video " />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        [{ label: 'Yes', value: 'true' }, { label: 'No', value: 'false' }].map((classItem) => (
                                                            <SelectItem key={classItem.value} value={classItem.value}>
                                                                {classItem.label}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormDescription>
                                                If this video is only for premium users choose 'NO'
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="date"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date</FormLabel>
                                            <FormControl>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                " justify-start text-left font-normal w-full bg-transparent",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon />
                                                            {field.value ? format(field.value, "yyyy-MM-dd") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value || undefined}
                                                            onSelect={field.onChange}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                            <FormDescription>
                                                The date this live class occured.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                <FormField
                                    control={form.control}
                                    name="videoType"
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormLabel>Video Type</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={JSON.stringify(field.value)}

                                            >
                                                <FormControl className="w-full">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select video type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        ['TUTION', 'NOTE'].map((classItem: any) => (
                                                            <SelectItem key={classItem} value={classItem}>
                                                                {classItem}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormDescription>
                                                Choose Tution if its a tuition video.If its related to a note, choose Note.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                { form.watch('videoType') === 'NOTE' && <FormField
                                    control={form.control}
                                    name="noteId"
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormLabel>Choose Note This Video Belongs To</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={JSON.stringify(field.value)}

                                            >
                                                <FormControl className="w-full">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Note" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        ['TUTION', 'NOTE'].map((classItem: any) => (
                                                            <SelectItem key={classItem} value={classItem}>
                                                                {classItem}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormDescription>
                                                Choose Note this video belongs to.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />}

                            </div>

                        </Scroll>
                        <div className="flex items-center gap-x-5 py-4 justify-between px-3 bg-primary/5 border-t">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => router.back()}
                            >
                                GO BACK
                            </Button>
                            <Button className="min-w-[8rem]" type="submit" >
                                CREATE
                            </Button>
                        </div>
                    </form>
                </Form>
            </Section>
        </>
    );
}

export default VideoCreationForm