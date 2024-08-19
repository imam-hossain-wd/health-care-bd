import Image from "next/image";
import { NavDropdownMenu } from "./DropDown";
import { NavDrawer } from "./NavDrawer";
import NavMenuItems from "./NavmenuItems";
import lifecare from '../../../../assets/images/Homepage/banner-img.png'
import { logo } from "@/utils/asstes";



const Navbar = () => {
    const alignitems = 'hidden lg:flex lg:flex-row';
  return (
    <div className="flex justify-around items-center p-3">
      <div className="flex justify-end items-center">
      <div className="lg:hidden">
      <NavDrawer />
      </div>
        <Image
          className="mr-20"
          src={logo.carelogo}
          width={80}
          height={80}
          alt="user logo"
        />
        <NavMenuItems alignitems={alignitems}/>
      </div>
      {/* <Link href="/login">Login</Link>
      <Link href="/signup">Sign up</Link> */}
      <NavDropdownMenu />
    </div>
  );
};

export default Navbar;