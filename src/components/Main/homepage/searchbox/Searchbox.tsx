"use client";

import { Card} from "@/components/ui/shadcn/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../ui/shadcn/tabs";
import DoctorForm from "./DoctorForm";
import HospitalForm from "./HospitalForm";
import BloodForm from "./BloodForm";
import AmbulanceForm from "./AmbulanceForm";

const Searchbox = () => {
  return (
    <div>
      <Card className="w-[600px] h-auto mx-auto mt-5 mb-10">
        <Tabs defaultValue="doctor" className="">
          <TabsList>
            <TabsTrigger value="doctor">Doctor</TabsTrigger>
            <TabsTrigger value="hospital">Hospital</TabsTrigger>
            <TabsTrigger value="blood">Blood</TabsTrigger>
            <TabsTrigger value="ambulance">Ambulance</TabsTrigger>
          </TabsList>

          <TabsContent className="p-5 -mt-5" value="doctor">
            <DoctorForm />
          </TabsContent>

          <TabsContent className="p-5 -mt-5" value="hospital">
            <HospitalForm />
          </TabsContent>

          <TabsContent className="p-5 -mt-5" value="blood">
            <BloodForm />
          </TabsContent>

          <TabsContent className="p-5 -mt-5" value="ambulance">
            <AmbulanceForm />
          </TabsContent>
          
        </Tabs>
      </Card>
    </div>
  );
};

export default Searchbox;
