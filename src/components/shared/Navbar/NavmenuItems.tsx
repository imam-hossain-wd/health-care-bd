import Link from "next/link";

const NavMenuItems = ({alignitems}:any) => {
  return <nav>
    <ul className={`${alignitems} flex gap-5 font-semibold text-[16px]`}>
        <Link href="/"> Home </Link>
        <Link href="/doctor"> Doctor</Link>
        <Link href="/hospital"> Hospital</Link>
        <Link href="/blood"> Blood Bank</Link>
        <Link href=""> Consultation</Link>
        <Link href=""> Contact </Link>
        <Link href=""> About</Link>
    </ul>
  </nav>;
};

export default NavMenuItems;