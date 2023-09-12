"use client";
import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

function Feature() {
  return (
    <div className="w-screen text-red-500 mt-6">
      <div className="flex flex-wrap">
        {featuredProducts.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[100%] md:w-[50%] lg:w-[33%] h-[80vh] flex flex-col items-center hover:bg-gray-200 transition-all duration-300"
            >
              <div className="relative flex-1 w-full drop-shadow-lg">
                {item.img && (
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="flex-1 flex flex-col gap-4 items-center justify-center p-5">
                <h1 className="font-bold uppercase  text-xl">{item.title}</h1>
                <p>{item.desc}</p>
                <span className="text-xl font-bold">{`${item.price} บาท`}</span>
                <button
                  className="btn drop-shadow-md rounded-md p-2 text-white bg-red-500"
                  onClick={() => {
                    if (document) {
                      (
                        document.getElementById("my_modal_2") as HTMLFormElement
                      ).showModal();
                    }
                  }}
                >
                  ฉันจะกินอันนี้ !
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click outside to close
                    </p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feature;
