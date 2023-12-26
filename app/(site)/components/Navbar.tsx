"use client";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <nav className="flex items-center py-2 bg-black p-2 mt-0 fixed w-full z-10 top-0">
      <div className="flex-auto">
        <Link href="/" passHref>
          <Image
            src="mmt-logo.svg"
            width="600"
            height="63"
            className="text-2xl font-bold text-grey-800"
            alt="My Mexico Tours Logo"
          />
        </Link>
      </div>
      <div className="flex-auto">
        <Sidebar />
      </div>
    </nav>
  );
}

export default Navbar;