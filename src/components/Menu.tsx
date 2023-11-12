"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import CartMenu from "./CartMenu";

const links = [
  {
    id: 1,
    title: "IG: /Dong_better",
    url: "https://www.instagram.com/dong_better/",
    icon: <AiFillInstagram />,
  },
  {
    id: 2,
    title: "Facebook: Dong Better",
    url: "/https://www.facebook.com/dongbetterfood",
    icon: <AiFillFacebook />,
  },
  { id: 3, title: "Line man", url: "https://lin.ee/xwHEnDO", icon: "" },
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
        <div className="bg-red-500 text-white absolute left-0 top-12 h-[calc(100vh-4rem)] flex items-center justify-center text-3xl w-full flex-col gap-8 z-10">
          {links.map((item) => {
            return (
              <Link href={item.url} key={item.id}>
                <div className="flex flex-row gap-2">
                  {item.icon}
                  {item.title}
                </div>
              </Link>
            );
          })}
          <Image
            src={"/Line Man QR Code.png"}
            width="240"
            height="240"
            alt="line man"
          ></Image>
        </div>
      )}
    </div>
  );
}

export default Menu;
