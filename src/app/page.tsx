"use client";
import { useState, useRef, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Typed from "typed.js";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import { tsParticles } from "@tsparticles/engine";
import confetti from "canvas-confetti";

// import ValentinePopup from "@/components/Valentine";

export default function Home() {
  const [timeSince, setTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [showMessage, setShowMessage] = useState(false);
  // Function to calculate time difference since 2nd August 2024
  const calculateTimeSince = () => {
    const startDate = new Date("2024-08-02"); // Set the start date
    const currentDate = new Date(); // Current date and time
    const diff = currentDate.getTime() - startDate.getTime(); // Difference in milliseconds

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);


    return { days, hours, minutes, seconds };
  };

  // Update the timer every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSince(calculateTimeSince()); // Update the timer every second
    }, 1000); // 1000ms = 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const typedElement = useRef(null); // Create a reference for the element

  const handleConfetti = () => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"] as unknown as confetti.Shape[],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

    confetti({ ...defaults, particleCount: 50, scalar: 2 });
    confetti({ ...defaults, particleCount: 25, scalar: 3 });
    confetti({ ...defaults, particleCount: 10, scalar: 4 });
  };

  // Initialize Typed.js when the component mounts
  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: [
          "My love for you is <i>Awesome</i>",
          "My love for you is <i>Great</i>",
          "My love for you is Ever-lasting",
        ],
        typeSpeed: 0,
        backSpeed: 0,
        smartBackspace: true, // this is a default
        loop: true,
      };

      // Create the Typed.js instance
      const typed = new Typed("#typed-text", options);

      // Cleanup when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []); // Run once when the component mounts

  return (
    <div className="bg-gradient-to-t from-pink-100 via-pink-50 to-white min-h-screen">
      <Navbar />
      <div className="flex justify-center">
  <motion.button
    onClick={() => {
      setShowMessage(true);
      handleConfetti();
    }}
    
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-pink-500 text-white mt-2 px-6 py-3 rounded-full shadow-lg text-xl font-bold transition-all duration-300"
  >
    Tap to Reveal 💝
  </motion.button>
</div>

      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 p-6 bg-white rounded-lg shadow-xl text-center text-pink-600 text-lg font-semibold"
        >
          <p>
            Happy <span className="font-bold text-red-500">7-Month</span>{" "}
            Miss. 💖
          </p>
          <p className="mt-3">
          {`This was a very hard month for us. Fights hue thora iske wajah se distance thora badh gaya and dono ka mann dukha bohot. It made me realise that I should value you very much and never take you for granted. Efforts are necessary and I should never stop making them. I always thought like having a girlfriend and a person that you care very much like the meeting and bonding part is hard but the time after that is hard too. Hard I mean it's not easy which I thought would be very easy after getting the perfect person. You have been very understanding this time but now it's my turn to become the old Me when we started. Well in studies and well in extra curricular too with you. I am reallly mad that you went through this and I promise I am not like the other guys who do not spend time like with their girlfriends. Gifts and surprises incoming this month and travelling together too.(Better Giftsss) Happpy Dayyyy ✨`}
          </p>
          <p className="mt-3 text-2xl animate-pulse">❤️❤️❤️</p>
        </motion.div>
      )}
      <TracingBeam className="px-6">
        {/* <ValentinePopup /> */}
        <div className="container mx-auto mt-12 px-4">
          <div className="text-center mt-12">
            {/* Attractive Timer Display */}
            {/* Timer Display with Mobile Responsiveness */}
            {/* <div className="bg-gradient-to-r from-pink-500 to-red-400 text-white p-6 rounded-3xl shadow-xl max-w-lg mx-auto transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white text-center">
              Time since 2nd August 2024
            </h2>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4">
              <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
                {timeSince.days} <span className="text-sm block">Days</span>
              </div>
              <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
                {timeSince.hours} <span className="text-sm block">Hours</span>
              </div>
              <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
                {timeSince.minutes}{" "}
                <span className="text-sm block">Minutes</span>
              </div>
              <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
                {timeSince.seconds}{" "}
                <span className="text-sm block">Seconds</span>
              </div>
            </div> */}
            <CardContainer className="inter-var">
              <CardBody className="bg-gradient-to-r from-pink-500 to-red-400 text-white p-8 rounded-3xl shadow-xl max-w-lg mx-auto transform hover:scale-105 transition-all duration-300relative group/card  dark:hover:shadow-2xl w-auto sm:w-[30rem] h-auto border  ">
                <CardItem
                  translateZ="50"
                  className="text-2xl sm:text-3xl mb-4 text-white text-center font-bold"
                >
                  Time since 2nd August 2024
                </CardItem>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4">
                  <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
                    {timeSince.days} <span className="text-sm block">Days</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
                    {timeSince.hours}{" "}
                    <span className="text-sm block">Hours</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
                    {timeSince.minutes}{" "}
                    <span className="text-sm block">Minutes</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-bold bg-white text-pink-500 rounded-lg p-3 sm:p-4 shadow-lg text-center">
                    {timeSince.seconds}{" "}
                    <span className="text-sm block">Seconds</span>
                  </div>
                </div>
                <CardItem translateZ={100} className="w-full mt-4"></CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        <h1 className="text-5xl text-pink-500 font-bold text-center mt-4">
          <span id="typed-text" ref={typedElement}></span>
        </h1>
        <p className="mt-4 text-xl text-gray-700 text-center max-w-3xl mx-auto">
          Here&apos;s our beautiful journey together, each moment a memory to
          cherish. Let&apos;s celebrate our love, one beautiful memory at a
          time.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* First Date */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h2 className="text-2xl text-pink-600 merriweather-bold font-semibold text-center">
              First Date
            </h2>
            <p className="text-gray-600 mt-3 text-center">
              Our very first date... where it all started!
            </p>
            <Link
              href="/first-date"
              className="text-pink-500 hover:underline mt-4 block text-center"
            >
              See the moment
            </Link>
            <div className="mt-4 text-center">
              {/* <img src="/assets/first-date.gif" alt="First Date" className="w-full h-48 object-cover rounded-lg"/> */}
            </div>
            <div className="mt-4 text-pink-600 text-3xl hover:text-red-500 transition duration-300 transform hover:scale-125 text-center">
              💖
            </div>
          </div>

          {/* First Hand Holding */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h2 className="text-2xl text-pink-600 merriweather-bold font-semibold text-center">
              First Hand Holding
            </h2>
            <p className="text-gray-600 mt-3 text-center">
              When our hands first touched...
            </p>
            <Link
              href="/first-hand-holding"
              className="text-pink-500 hover:underline mt-4 block text-center"
            >
              See the moment
            </Link>
            <div className="mt-4 text-center">
              {/* <img src="/assets/hand-holding.gif" alt="First Hand Holding" className="w-full h-48 object-cover rounded-lg"/> */}
            </div>
            <div className="mt-4 text-pink-600 text-3xl hover:text-red-500 transition duration-300 transform hover:scale-125 text-center">
              💖
            </div>
          </div>

          {/* First Hug */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h2 className="text-2xl text-pink-600 merriweather-bold font-semibold text-center">
              First Hug
            </h2>
            <p className="text-gray-600 mt-3 text-center">
              Our first hug... an unforgettable feeling!
            </p>
            <Link
              href="/first-hug"
              className="text-pink-500 hover:underline mt-4 block text-center"
            >
              See the moment
            </Link>
            <div className="mt-4 text-center">
              {/* <img src="/assets/first-hug.gif" alt="First Hug" className="w-full h-48 object-cover rounded-lg"/> */}
            </div>
            <div className="mt-4 text-pink-600 text-3xl hover:text-red-500 transition duration-300 transform hover:scale-125 text-center">
              💖
            </div>
          </div>

          {/* First Gift */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h2 className="text-2xl text-pink-600 merriweather-bold font-semibold text-center">
              First Gift
            </h2>
            <p className="text-gray-600 mt-3 text-center">
              The first gift you gave me.
            </p>
            <Link
              href="/first-rose"
              className="text-pink-500 hover:underline mt-4 block text-center"
            >
              See the moment
            </Link>
            <div className="mt-4 text-center">
              {/* <img src="/assets/first-gift.gif" alt="First Gift" className="w-full h-48 object-cover rounded-lg"/> */}
            </div>
            <div className="mt-4 text-pink-600 text-3xl hover:text-red-500 transition duration-300 transform hover:scale-125 text-center">
              💖
            </div>
          </div>

          {/* Drives on Scooter */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h2 className="text-2xl text-pink-600 merriweather-bold font-semibold text-center">
              Drives on Scooter
            </h2>
            <p className="text-gray-600 mt-3 text-center">
              Our cute scooter rides, together through the city streets!
            </p>
            <Link
              href="/drives-on-scooter"
              className="text-pink-500 hover:underline mt-4 block text-center"
            >
              See the moment
            </Link>
            <div className="mt-4 text-center">
              {/* <img src="/assets/scooter-ride.gif" alt="Scooter Ride" className="w-full h-48 object-cover rounded-lg"/> */}
            </div>
            <div className="mt-4 text-pink-600 text-3xl hover:text-red-500 transition duration-300 transform hover:scale-125 text-center">
              💖
            </div>
          </div>

          {/* Add more moments as needed */}
        </div>
      </TracingBeam>
    </div>
    // </div>
  );
}
