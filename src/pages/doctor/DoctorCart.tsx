import { Button } from "@/components/ui/shadcn/button";
import { Card } from "@/components/ui/shadcn/card";
import Image from "next/image";

const DoctorCart = ({ doctors }: any) => {
  // console.log(doctors, 'doctorszzzzzzzz');

  //   address;
  //   city;
  //   description;
  //   doctor_id;
  //   email;
  //   image;
  //   name;
  //   password;
  //   phone_number;
  //   qualification;
  //   rating;
  //   role;
  //   specilization_id;
  //   website_link;

  return (
    <div>
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-5 mt-5">
        {doctors?.map((doctor: any) => (
          <Card className="w-[280px] p-5" key={doctor.id}>
            <Image
              src="https://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/15.jpg"
              className="w-full h-[220px] rounded"
              width={200}
              height={200}
              alt="doctor"
            />

            <div className=" text-[14px] mt-2">
              <p className="text-primary">{doctor?.specialization}</p>
              <p>{doctor?.name}</p>
              <p className="text-sm">{doctor?.qualification}</p>
              <p>{doctor?.city}</p>
              <p className="text-[#32B9A9]">{doctor?.phone_number}</p>
            </div>

            <div className="flex justify-around items-center mt-2">
              <Button className="h-9">Book now</Button>
              <Button className="h-9">View Profile</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoctorCart;
