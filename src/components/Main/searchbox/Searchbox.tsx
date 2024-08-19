"use client";

import { Card, CardContent } from "@/components/ui/shadcn/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/shadcn/tabs";
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
          </TabsContent>

          <TabsContent value="hospital">
            <SearchForm />
            <CardContent>
            </CardContent>
          </TabsContent>
          
        </Tabs>
      </Card>
    </div>
  );
};

export default Searchbox;
