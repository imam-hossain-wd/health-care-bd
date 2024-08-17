"use client";

import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormItem, FormLabel, FormMessage } from "../shadcn/form";
import { Input } from "../shadcn/input";
import { Label } from "../shadcn/label";

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
}

export const FileInput: React.FC<TextInputProps> = ({
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
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input id="picture" type="file" />
            </div>
          </FormControl>

          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};
 