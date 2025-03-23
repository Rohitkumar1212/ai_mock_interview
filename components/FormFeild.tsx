import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Controller, FieldValues, Control, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues>{
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file'

}
const FormFeild = ({control, name, label, placeholder, type="text"}:FormFieldProps<T>) =>(
    <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="label">{label}</FormLabel>
              <FormControl>
                <Input className="input" placeholder={placeholder} {...field} type={type}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
)

export default FormFeild;
