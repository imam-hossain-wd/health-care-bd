

"use client";
import { Form } from "@/components/ui/Form/Form";
import { TextInput } from "@/components/ui/Form/FormInput";
import { SelectInput } from "@/components/ui/Form/SelectInput";
import { Button } from "@/components/ui/shadcn/button";
import { FaSearch } from "react-icons/fa";
import { z } from "zod";


const defaultValues = {
  name: "",
  email: "",
  password: "",
  file: undefined, // Changed from null to undefined
  role: "",
};

const onSubmit = (values: any) => {
  console.log(values);
};

const location = [
  { value: "Chattogram", label: "Chattogram" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Comilla", label: "Comilla" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Khulna", label: "Khulna" },
];

const specilities = [
  { value: "Cardiology", label: "Cardiology" },
  { value: "Neurology", label: "Neurology" },
  { value: "Urology", label: "Urology" },
  { value: "Orthopedic", label: "Orthopedic" },
  { value: "Dentist", label: "Dentist" },
  { value: "Ophthalmology", label: "Ophthalmology" },
];

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .nonempty({ message: "Name is required." }),
  role: z
    .string()
    .min(1, { message: "Please select a role." })
    .nonempty({ message: "Role is required." }),
});

const HospitalForm = () => {
  return (
    <div className="w-full">
      <Form
        schema={formSchema}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
      >
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-5 mt-5">
            <TextInput name="hospital_name" label="" placeholder="Search Hospital" />
            <SelectInput
              name="location"
              label=""
              options={location}
              placeholder="Select location"
              selectLabel="Chattogram"
            />
            <SelectInput
              name="specilities"
              label=""
              options={specilities}
              placeholder="Select Specilities"
              selectLabel="Cardiology"
            />

            <Button
              className="text-md flex justify-center items-center mt-2 "
              type="submit"
            >
              <span> Search </span>
              <FaSearch className="ml-2 text-xl" />
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default HospitalForm;
