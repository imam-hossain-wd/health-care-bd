import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/shadcn/carousel";

  import Image from "next/image";
  import { Button } from "@/components/ui/shadcn/button";
  import Searchbox from "@/components/Main/searchbox/Searchbox";
import { homebanner } from "@/utils/asstes";
  
  
  const Homebanner = () => {
    return (
      <div className="bg-[#32B9A9] h-screen">
        <div className="w-[90%] mx-auto ">
          <Carousel className="flex justify-center  items-center">
            <CarouselContent className=" mt-28 -ml-32">
              <CarouselItem>
                <div className="flex justify-center items-center">
                  <Image
                    src={homebanner.banner1}
                    width={350}
                    height={250}
                    alt="doctor image"
                  />
                  <div>
                    <div className="text-3xl ml-48 -mt-16">
                      <h2 className="mb-1">Emergency?</h2>
                      <h2 className="mb-1">Find Nearest</h2>
                      <h2 className="mb-1">Medical Facility</h2>
                    </div>
                    <div className="flex justify-evenly mt-5 ml-10">
                      <Button className="">View Hospital</Button>
                      <Button>View Doctor</Button>
                      <Button>View Blood</Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-center items-center">
                  <Image
                    src={homebanner.banner2}
                    width={350}
                    height={250}
                    alt="doctor image"
                  />
                  <div>
                    <div className="text-3xl ml-48 -mt-16">
                      <h2 className="mb-1">Emergency?</h2>
                      <h2 className="mb-1">Find Nearest</h2>
                      <h2 className="mb-1">Medical Facility</h2>
                    </div>
                    <div className="flex justify-evenly mt-5 ml-10">
                      <Button >View Hospital</Button>
                      <Button>View Doctor</Button>
                      <Button>View Blood</Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-center items-center">
                  <Image
                    src={homebanner.banner3}
                    width={350}
                    height={250}
                    alt="doctor image"
                  />
                  <div>
                    <div className="text-3xl ml-48 -mt-16">
                      <h2 className="mb-1">Emergency?</h2>
                      <h2 className="mb-1">Find Nearest</h2>
                      <h2 className="mb-1">Medical Facility</h2>
                    </div>
                    <div className="flex justify-evenly mt-5 ml-10">
                      <Button>View Hospital</Button>
                      <Button>View Doctor</Button>
                      <Button>View Blood</Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
  
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
  
        <Searchbox />
      </div>
    );
  };
  
  export default Homebanner;