"use client";
import { FormInput } from "lucide-react";
import { Form } from "../Form/Form";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { TextInput } from "../Form/FormInput";
import { SelectInput } from "../Form/SelectInput";
import { FaSearch, FaFilter, FaSearchPlus } from "react-icons/fa";

import { z } from "zod";
import { Button } from "../shadcn/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadcn/tabs";
import SearchForm from "./DoctorForm";
import DoctorForm from "./DoctorForm";

const Searchbox = () => {
  return (
    <div>
      <Card className="w-[600px] mx-auto mt-5">
        <Tabs defaultValue="doctor" className="">
          <TabsList>
            <TabsTrigger value="doctor">Doctor</TabsTrigger>
            <TabsTrigger value="hospital">Hospital</TabsTrigger>
            <TabsTrigger value="blood">Blood</TabsTrigger>
            <TabsTrigger value="ambulance">Ambulance</TabsTrigger>
          </TabsList>
          <TabsContent value="doctor">
            <DoctorForm />

            <CardContent>
              {/* <div className="flex justify-center items-center mt-5">
                <Button className="flex justify-center items-center">
                  Advance Search{" "}
                  <span className=" ml-3 text-2xl">
                    {" "}
                    <FaSearchPlus />{" "}
                  </span>
                </Button>
              </div> */}
            </CardContent>
          </TabsContent>
          <TabsContent value="hospital">
            <SearchForm />
            <CardContent>
              {/* <div className="flex justify-center items-center mt-5">
                <Button className="flex justify-center items-center">
                  Advance Search{" "}
                  <span className=" ml-3 text-2xl">
                    {" "}
                    <FaSearchPlus />{" "}
                  </span>
                </Button>
              </div> */}
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Searchbox;
