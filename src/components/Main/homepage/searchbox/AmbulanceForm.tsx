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

const division = [
  { value: "Chattogram", label: "Chattogram" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Comilla", label: "Comilla" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Khulna", label: "Khulna" },
];

const district = [
  { value: "Chattogram", label: "Chattogram" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Comilla", label: "Comilla" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Khulna", label: "Khulna" },
];

const thana = [
  { value: "Chattogram", label: "Chattogram" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Comilla", label: "Comilla" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Khulna", label: "Khulna" },
];

const blood_group = [
  { value: "A+", label: "A" },
  { value: "A-", label: "A-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "0-" },
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

const AmbulanceForm = () => {
  return (
    <div className="w-full">
      <Form
        schema={formSchema}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
      >
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-5 mt-5">
            
            <SelectInput
              name="division"
              label=""
              options={division}
              placeholder="Select division"
              selectLabel="Chattogram"
            />
            <SelectInput
              name="district"
              label=""
              options={district}
              placeholder="Select district"
              selectLabel="Chattogram"
            />

            <SelectInput
              name="thana"
              label=""
              options={thana}
              placeholder="Select thana"
              selectLabel="Hathazari"
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

export default AmbulanceForm;
