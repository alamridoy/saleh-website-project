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
            className="md:max-w-full lg:max-w-3xl"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Master the Power of React Beginner Course
          </Typography>

          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Our React Course is your gateway to becoming a proficient React
            developer. Learn to build dynamic and interactive web applications
            using one of the most popular JavaScript libraries in the industry.
          </Typography>

          <Button
            variant="gradient"
            color="white"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            ENROLL TODAY
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
