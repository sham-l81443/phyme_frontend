import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const CustomFormFieldInput = ({ form, name, description, placeholder, label, optional = false, required = true,type }: { form: any, name: string, description?: string, placeholder?: string, label?: string, optional?: boolean, required?: boolean,type?: string }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="">
                    {label && <FormLabel>{label} {(required && !optional) && <span className="text-red-500">*</span>} {optional && <span className="text-primary/60">(optional)</span>}</FormLabel>}
                    <FormControl>
                        <Input
                            placeholder={placeholder ? placeholder : ""}
                            {...field}
                            type={type}
                        />
                    </FormControl>
                    {description && <FormDescription>
                        {description}
                    </FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomFormFieldInput