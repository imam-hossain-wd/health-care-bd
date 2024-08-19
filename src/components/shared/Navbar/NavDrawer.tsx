"use client";


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/shadcn/sheet";
import { FaAlignLeft } from "react-icons/fa";
import NavMenuItems from "./NavmenuItems";
import { Button } from "@/components/ui/shadcn/button";

const side = "left";

const alignitems = "flex-col justify-start";

export function NavDrawer() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet key={side}>
        <SheetTrigger asChild>
          <Button className="" variant="outline">
            <FaAlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent side={side}>
          <NavMenuItems alignitems={alignitems} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
