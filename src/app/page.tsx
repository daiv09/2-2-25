"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ImageTrailDemo } from "@/components/ImageHover";
import { useTimeSince } from "@/hooks/useTimeSince";
import { useConfetti } from "@/hooks/useConfetti";
import TypedText from "@/components/TypedText";
import { TimeDisplay } from "@/components/TimeDisplay";
import { MomentCard } from "@/components/MomentCard";
import HoverFooter from "@/components/Footer";

export default function Home() {
  const timeSince = useTimeSince("2024-08-02");
  const handleConfetti = useConfetti();

  const [showMessage, setShowMessage] = useState(false);

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
            Happy <span className="font-bold text-red-500">7-Month</span> Miss.
            💖
          </p>
          <p className="mt-3">
            {`This was a very hard month for us. Fights hue thora iske wajah se distance thora badh gaya and dono ka mann dukha bohot. It made me realise that I should value you very much and never take you for granted. Efforts are necessary and I should never stop making them. I always thought like having a girlfriend and a person that you care very much like the meeting and bonding part is hard but the time after that is hard too. Hard I mean it's not easy which I thought would be very easy after getting the perfect person. You have been very understanding this time but now it's my turn to become the old Me when we started. Well in studies and well in extra curricular too with you. I am reallly mad that you went through this and I promise I am not like the other guys who do not spend time like with their girlfriends. Gifts and surprises incoming this month and travelling together too.(Better Giftsss) Happpy Dayyyy ✨`}
          </p>
          <p className="mt-3 text-2xl animate-pulse">❤️❤️❤️</p>
        </motion.div>
      )}

      <TracingBeam className="px-6">
        <div className="container mx-auto mt-12 px-4">
          <div className="text-center mt-12">
            <TimeDisplay {...timeSince} />
          </div>
        </div>

        <h1 className="text-5xl text-pink-500 font-bold text-center mt-4">
          <TypedText />
        </h1>
        <p className="mt-4 text-xl text-gray-700 text-center max-w-3xl mx-auto">
          Here&apos;s our beautiful journey together, each moment a memory to
          cherish. Let&apos;s celebrate our love, one beautiful memory at a time.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <MomentCard
            title="First Date"
            description="Our very first date... where it all started!"
            href="/first-date"
          />
          <MomentCard
            title="First Hand Holding"
            description="When our hands first touched..."
            href="/first-hand-holding"
          />
          <MomentCard
            title="First Hug"
            description="Our first hug... an unforgettable feeling!"
            href="/first-hug"
          />
          <MomentCard
            title="First Gift"
            description="The first gift you gave me."
            href="/first-rose"
          />
          <MomentCard
            title="Drives on Scooter"
            description="Our cute scooter rides, together through the city streets!"
            href="/drives-on-scooter"
          />
        </div>
        <ImageTrailDemo />
      </TracingBeam>
      <HoverFooter/>
    </div>
  );
}
