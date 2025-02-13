"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Typed from "typed.js";
import ValentinePopup from "@/components/Valentine";

export default function Home() {
  const [timeSince, setTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  // Initialize Typed.js when the component mounts
  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: ["Happy 6 Months, My Love!"], // The text you want to appear with the typing effect
        typeSpeed: 100, // Speed at which the text types
        backSpeed: 50, // Speed at which the text erases
        backDelay: 1000, // Delay before erasing the text
        startDelay: 500, // Delay before typing starts
        showCursor: true, // Show the cursor
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
      <ValentinePopup />
      <div className="container mx-auto mt-12 px-4">
        <div className="text-center mt-12">
          {/* Attractive Timer Display */}
          {/* Timer Display with Mobile Responsiveness */}
          <div className="bg-gradient-to-r from-pink-500 to-red-400 text-white p-6 rounded-3xl shadow-xl max-w-lg mx-auto transform hover:scale-105 transition-all duration-300">
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
            </div>
          </div>
        </div>

        <h1 className="text-5xl text-pink-500 font-bold text-center mt-8">
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
            <h2 className="text-2xl text-pink-600 font-semibold text-center">
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
            <h2 className="text-2xl text-pink-600 font-semibold text-center">
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
            <h2 className="text-2xl text-pink-600 font-semibold text-center">
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
            <h2 className="text-2xl text-pink-600 font-semibold text-center">
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
            <h2 className="text-2xl text-pink-600 font-semibold text-center">
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
      </div>
    </div>
  );
}
