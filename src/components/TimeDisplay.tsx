import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface TimeDisplayProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function TimeDisplay({
  days,
  hours,
  minutes,
  seconds,
}: TimeDisplayProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-r from-pink-500 to-red-400 text-white p-8 rounded-3xl shadow-xl max-w-lg mx-auto transform hover:scale-105 transition-all duration-300relative group/card dark:hover:shadow-2xl w-auto sm:w-[30rem] h-auto border">
        <CardItem
          translateZ="50"
          className="text-2xl sm:text-3xl mb-4 text-white text-center font-bold"
        >
          Time since 2nd August 2024
        </CardItem>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4">
          <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
            {days} <span className="text-sm block">Days</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
            {hours} <span className="text-sm block">Hours</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
            {minutes} <span className="text-sm block">Minutes</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
            {seconds} <span className="text-sm block">Seconds</span>
          </div>
        </div>
        <CardItem translateZ={100} className="w-full mt-4"></CardItem>
      </CardBody>
    </CardContainer>
  );
}
