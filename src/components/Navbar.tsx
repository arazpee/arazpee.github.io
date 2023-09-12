import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartMenu from "./CartMenu";
import { AiFillPhone, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

function Navbar() {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase">
      <div className="flex gap-4">
        <div className="text-xl font-bold">
          <Link href="/">Nakhon-Dessert</Link>
        </div>
        {/* for other devices */}
        <div className="hidden md:flex gap-4">
          <Link href="/">homepage</Link>
          <Link href="/">homepage</Link>
          <Link href="/">homepage</Link>
        </div>
      </div>

      {/* for Mobile */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* for other devices right menu*/}
      <div className="hidden md:flex gap-4 justify-end items-center">
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
        <Link
          href="/"
          className="flex justify-center items-center bg-orange-300 rounded-lg p-1"
        >
          <AiFillPhone />
          <span>080-389-4809</span>
        </Link>
        {user ? (
          <Link href="/order">order</Link>
        ) : (
          <Link href="/login">login</Link>
        )}
        <CartMenu />
      </div>
    </div>
  );
}

export default Navbar;
