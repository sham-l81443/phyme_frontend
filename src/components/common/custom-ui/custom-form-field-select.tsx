import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const CustomFormFieldSelect = ({ form, name, description, placeholder, label, optional = false, required = true, options=[] }: { form: any, name: string, description?: string, placeholder?: string, label?: string, optional?: boolean, required?: boolean, options?: {id: string, name: string}[] }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem >
                    <FormLabel>{label && label} {required && <span className="text-red-500">*</span>} {optional && <span className="text-primary/60">(optional)</span>}</FormLabel>
                    <Select
                        onValueChange={
                            (value:string)=>{
                                field.onChange(value)
                            }
                            
                        }
                        defaultValue={field.value}

                    >
                        <FormControl className="w-full text-primary">
                            <SelectTrigger className="">
                                <SelectValue className="text-primary" placeholder={placeholder ? placeholder : "Select"} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {
                                options?.map((item: any) => {
                                    console.log(item)
                                    return (
                                        <SelectItem className="text-primary" key={item?.id || item?.name} value={item?.id}>{item?.name}</SelectItem>
                                    )
                                })
                            }
                        </SelectContent>
                    </Select>
                    {description && <FormDescription>
                        {description}
                    </FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomFormFieldSelect