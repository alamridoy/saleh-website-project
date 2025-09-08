"use client";

import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-center mx-auto"
            {...({} as any)}
          >
            Professional Satellite Dish Installation
          </Typography>


          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
            {...({} as any)}
          >
            Get fast and reliable satellite dish installation for your home or
            office. Our expert technicians ensure perfect alignment and
            high-quality signal reception for all major providers.
          </Typography>

          <Button
            variant="gradient"
            color="white"
            {...({} as any)}
          >
            BOOK INSTALLATION
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
