import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-start font-bold">
      <Link href="/" className="font-bold text-xl w-[20%]">
        Nakhon-Dessert
      </Link>
      <div className="flex flex-row items-center gap-2">
        <span className="flex flex-row items-center">
          <AiFillInstagram />
          IG: sss
        </span>
        <span className="flex flex-row items-center">
          <AiFillFacebook />
          Facebook: sss
        </span>
      </div>
      <p className="ml-auto">© ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
