"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "อร่อย มากกกกก",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "อร่อย มากกกกก",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "อร่อย มากกกกก",
    image: "/slide3.jpg",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-3rem)] w-screen bg-gray-100 items-center">
      <div className="h-[20%] flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-2xl text-center uppercase p-4 md:text-4xl xl:text-5xl ">
          ร้านขนมหวานเล็กๆ
        </h1>
      </div>

      <div className="h-[80%] relative w-[100%]">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Slider;
