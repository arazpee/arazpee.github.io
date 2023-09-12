"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartMenu from "./CartMenu";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

function Menu() {
  const user = false;
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      {!isOpen ? (
        <Image
          className="cursor-pointer"
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          className="cursor-pointer"
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {isOpen && (
        <div className="bg-red-500 text-white absolute left-0 top-16 h-[calc(100vh-6rem)] flex items-center justify-center text-3xl w-full flex-col gap-8 z-10">
          {links.map((item) => {
            return (
              <Link href={item.url} key={item.id}>
                {item.title}
              </Link>
            );
          })}
          {!user ? (
            <Link href="/login">login</Link>
          ) : (
            <Link href="/order">order</Link>
          )}
          <div>
            <CartMenu />
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
