"use client";

import React from "react";
import { Button } from "@material-tailwind/react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">

          <h1 className="uppercase text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mx-auto">
            Professional Satellite Dish Installation
          </h1>

          <p className="text-white mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl text-center">
            Get fast and reliable satellite dish installation for your home or
            office. Our expert technicians ensure perfect alignment and
            high-quality signal reception for all major providers.
          </p>

          {/* TSX-safe Button */}
          <Button
            variant="gradient"
            color="white"
            onClick={() => console.log("Book installation clicked")}
            {...({} as React.ComponentProps<typeof Button>)} // ✅ cast to satisfy TS
          >
            BOOK INSTALLATION
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
