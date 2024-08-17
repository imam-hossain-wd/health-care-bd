"use client";

import { useFormContext, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  placeholder,
  description,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <p>{description}</p>}
          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};
