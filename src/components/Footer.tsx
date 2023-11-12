import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-start font-bold border-t-2 border-t-red-500">
      <Link href="/" className="font-bold text-xl w-[20%]">
        DONG BETTER
      </Link>

      <p className="ml-auto">©DONG BETTER ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
