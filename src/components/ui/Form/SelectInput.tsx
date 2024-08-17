// "use client";

// import { useFormContext, Controller } from "react-hook-form";
// import {
//   FormControl,
//   FormLabel,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/shadcn/form";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "../shadcn/select";

// interface SelectInputProps {
//   name: string;
//   label: string;
//   options: { value: string; label: string }[];
//   description?: string;
// }

// export const SelectInput: React.FC<SelectInputProps> = ({
//   name,
//   label,
//   options,
//   description,
// }) => {
//   const { control } = useFormContext();

//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({ field, fieldState }) => (
//         <FormItem>
//           <FormLabel>{label}</FormLabel>
//           <FormControl>
//             {/* <select {...field}>
//               {options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select> */}

//             <Select>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Select a fruit" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectLabel>Fruits</SelectLabel>
//                   {/* <SelectItem value="apple">Apple</SelectItem>
//           <SelectItem value="banana">Banana</SelectItem>
//           <SelectItem value="blueberry">Blueberry</SelectItem>
//           <SelectItem value="grapes">Grapes</SelectItem>
//           <SelectItem value="pineapple">Pineapple</SelectItem> */}

//                   {options.map((option) => (
//                     <SelectItem key={option.value} value={option.value}>
//                       {option.label}
//                     </SelectItem>
//                   ))}
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </FormControl>
//           {description && <p>{description}</p>}
//           {fieldState.error && (
//             <FormMessage>{fieldState.error.message}</FormMessage>
//           )}
//         </FormItem>
//       )}
//     />
//   );
// };

"use client";

import { useFormContext, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/shadcn/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

interface SelectInputProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  description?: string;
  placeholder?: string;
  selectLabel?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  description,
  placeholder = "Select an option",
  selectLabel,
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
            <Select {...field}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {selectLabel && (
                  <SelectGroup>
                    <SelectLabel>{selectLabel}</SelectLabel>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                )}
                {!selectLabel &&
                  options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </FormControl>
          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

