import Image from "next/image";
import { NavDropdownMenu } from "./DropDown";
import { NavDrawer } from "./NavDrawer";
import NavMenuItems from "./NavmenuItems";
import lifecare from '../../../../assets/images/Homepage/banner-img.png'


const Navbar = () => {
    const alignitems = 'hidden lg:flex lg:flex-row';
  return (
    <div className="flex justify-around items-center">
      <div className="flex justify-end items-center">
      <NavDrawer />
        <Image
          className="mr-20"
          src={lifecare}
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