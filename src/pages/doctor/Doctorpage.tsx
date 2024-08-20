"use client";

import { Form } from "@/components/ui/Form/Form";
import { TextInput } from "@/components/ui/Form/FormInput";
import { SelectInput } from "@/components/ui/Form/SelectInput";
import Loader from "@/components/ui/Loader/Loader";
import { Button } from "@/components/ui/shadcn/button";
import { Card } from "@/components/ui/shadcn/card";
import { useGetdoctorsQuery } from "@/redux/api/doctorApi";
import { FaSearch } from "react-icons/fa";
import { z } from "zod";
import DoctorCart from "./DoctorCart";

const Doctorpage = () => {
  const { data, isLoading } = useGetdoctorsQuery(undefined);
  // console.log(data, "user data");
  // const { data, isLoading } = useGetProductQuery({ searchTerm, sortBy, sortOrder , page, limit, category});

  const doctors = data?.data?.data;
  const meta = data?.data?.meta;

  console.log(doctors, 'doctors');
  console.log(meta, 'meta');

  if (isLoading) {
    return <Loader />;
  }

  const defaultValues = {
    name: "",
    location: "",
    specilities: "",
  };
  
  const onSubmit = (values: any) => {
    const formData = {
      name: values.name || "",
      location: values.location || "",
      specilities: values.specilities || "",
    };
    console.log(formData, 'form value');
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
      .optional(),
    location: z.string().optional(),
    specilities: z.string().optional(),
  });
  

  return (
    <div className="">
      <div>
        <h1 className="text-center text-2xl font-bold my-5">
          Find your best Doctor
        </h1>
      </div>
      <Card className="w-[60%] p-5 flex justify-center items-center mx-auto">
        <Form
          schema={formSchema}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-4 gap-5 -mt-2">
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
            <TextInput name="name" label="" placeholder="Search doctor" />

            <Button
              className="text-md w-32 flex justify-center items-center mt-2 "
              type="submit"
            >
              <span> Search </span>
              <FaSearch className="ml-2 text-xl mt-1" />
            </Button>
          </div>
        </Form>
      </Card>

      <div>
        <DoctorCart doctors={doctors}/>
      </div>
    </div>
  );
};

export default Doctorpage;
