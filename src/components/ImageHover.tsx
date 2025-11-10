"use client";

import { useRef } from "react";
import Image from "next/image";
import { ImageTrail } from "./ui/image-trail";

const ImageTrailDemo = () => {
  const ref = useRef<HTMLDivElement>(null);

  const images = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
  ].map((url) => `${url}?auto=format&fit=crop&w=300&q=80`);

  return (
    <div className="flex justify-center items-center relative overflow-hidden w-full h-full">
      <div className="absolute top-0 left-0 z-0 w-full h-full" ref={ref}>
        <ImageTrail containerRef={ref}>
          {images.map((url, index) => (
            <div
              key={index}
              className="relative overflow-hidden aspect-square rounded-xl min-w-[50px] min-h-[50px] w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw]"
            >
              <Image
                src={url}
                alt={`Trail image ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </ImageTrail>
      </div>
    </div>
  );
};

export { ImageTrailDemo };
