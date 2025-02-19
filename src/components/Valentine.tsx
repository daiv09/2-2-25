"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function ValentinePopup() {
  const [showPopup, setShowPopup] = useState(true);
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  useEffect(() => {
    if (yesClicked) {
      // Gradual Confetti Effect
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number): number {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      // Star & Circle Burst Effect
      const burstDefaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
      };

      function shoot() {
        confetti({
          ...burstDefaults,
          particleCount: 250,
          scalar: 1.2,
          shapes: ["star"],
        });

        confetti({
          ...burstDefaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }

      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }, [yesClicked]);

  const handleYesClick = () => {
    setYesClicked(true);
  };

  const handleNoClick = () => {
    setNoClicked(true);
  };

  return (
    <>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }} // Fades out when disappearing
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-6"
          >
            <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-3xl flex flex-col md:flex-row items-center gap-6">
              {/* Left Side: Valentine Proposal */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-pink-600 mb-6">Will you be my Valentine? 💖</h2>
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                  <button
                    onClick={handleYesClick}
                    className="bg-pink-500 text-white px-6 py-2 rounded-lg text-xl hover:bg-pink-600 transition"
                  >
                    Yes 💕
                  </button>
                  <button
                    onClick={handleNoClick}
                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg text-xl hover:bg-gray-400 transition"
                  >
                    No 🙃
                  </button>
                </div>
              </div>

              {/* Right Side: Message */}
              <div className="flex-1 bg-pink-100 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-pink-600 mb-4">Why You Should Be My Valentine 💕</h2>
                <p className="text-md text-gray-800">
                  Can you please be my valentine !!! <br />
                  I will be the happiest person alive on the planet if you say yes to me. <br />
                  It will be the best day everrr. Maine pura plan karke rakh hai vo din. You just need to come and enjoyy. Cutu !
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Clicked Response */}
      {noClicked && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [-20, 20, -20, 20, 0] }}
          transition={{ duration: 0.5, repeat: 2 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-red-500 text-white p-6 rounded-xl shadow-xl text-center">
            <h2 className="text-2xl font-bold">Sacchi? 🥺</h2>
            <button
              onClick={() => {
                setNoClicked(false);
                setShowPopup(true);
              }}
              className="mt-4 bg-white text-red-500 px-6 py-2 rounded-lg text-lg hover:bg-gray-100 transition"
            >
              Mai Rounga Zor Se!
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
