
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  className?: string;
}

const TextField = ({
  name,
  label,
  placeholder,
  description,
  className = "bg-muted/50 border-border/30",
}: TextFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className={className}
              {...field}
            />
          </FormControl>
          {description && (
            <FormDescription className="text-muted-foreground">
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextField;
