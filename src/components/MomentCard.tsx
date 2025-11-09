import React from "react";
import Link from "next/link";

interface MomentCardProps {
  title: string;
  description: string;
  href: string;
  emoji?: string;
}

export function MomentCard({
  title,
  description,
  href,
  emoji = "💖",
}: MomentCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <h2 className="text-2xl text-pink-600 merriweather-bold font-semibold text-center">
        {title}
      </h2>
      <p className="text-gray-600 mt-3 text-center">{description}</p>
      <Link
        href={href}
        className="text-pink-500 hover:underline mt-4 block text-center"
      >
        See the moment
      </Link>
      <div className="mt-4 text-center"></div>
      <div className="mt-4 text-pink-600 text-3xl hover:text-red-500 transition duration-300 transform hover:scale-125 text-center">
        {emoji}
      </div>
    </div>
  );
}
