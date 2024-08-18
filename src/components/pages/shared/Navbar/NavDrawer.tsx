"use client";

import { Button } from "@/components/ui/button";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FaAlignLeft } from "react-icons/fa";
import NavMenuItems from "./NavmenuItems";

const side = "left";

const alignitems = "flex-col justify-start";

export function NavDrawer() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet key={side}>
      
        <SheetTrigger asChild>
          <Button className="" variant="outline"><FaAlignLeft /></Button>
        </SheetTrigger>
        <SheetHeader>

        {/* <SheetClose>
          closed
        </SheetClose> */}
        </SheetHeader>

        <SheetTitle></SheetTitle>
       
        <SheetContent side={side}>
          <NavMenuItems alignitems={alignitems} />

        
        </SheetContent>
        
      </Sheet>
    </div>
  );
}
