
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { ZodTypeAny } from "zod"

interface FormProviderProps {
  children: React.ReactNode
  schema: ZodTypeAny
  defaultValues: any
  onSubmit: (values: any) => void
}

export const Form: React.FC<FormProviderProps> = ({ children, schema, defaultValues, onSubmit }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-2">
        {children}
      </form>
    </FormProvider>
  )
}


