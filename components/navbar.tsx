import Image from "next/image";
import Link from "next/link";
import {MobileNav} from "./mobile-nav";
import { SignedIn, UserButton } from "@clerk/nextjs";

 export const Navbar = () => {
  return (
    <nav
      className="flex-between fixed z-50 w-full bg-dark-100
    px-6 py-4 lg:px-10"
    >
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={38}
          height={38}
          alt="Zoom logo"
          className="max-sm:size-10"
        />
        <p
          className="text-[26px] font-extrabold text-white 
      max-sm:hidden"
        >
          Zoom
        </p>
      </Link>
      <div className="flex-between">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};


