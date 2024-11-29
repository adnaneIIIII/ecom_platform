import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <>
      <Navbar />

      <div className="relative h-[100vh]">
        {/* Background Image */}
        <Image
          src={"/hero1.jpg"}
          alt="Banner Image"
          fill
          className="object-cover w-full h-full rounded-xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/50"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white p-6 hover:scale-105 cursor-pointer text-center ">
            <h1 className="text-3xl lg:text-6xl font-bold mb-4">
              ELEVATE YOUR STYLE
            </h1>
            <p className="text-lg lg:text-xl mt-2 mb-4">
              discover the latest trends
            </p>
            <Button variant="default" size="lg">Shop Now</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
