import React from 'react';
import Navbar from '@/components/Navbar';
import { Heart, Star } from 'lucide-react';
import { FloatingDock } from '@/components/floating-dock';
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react';
import Image from 'next/image';

const page = () => {
  const favourites = ['Pizza', 'Coding', 'Traveling', 'Music', 'Books'];

  const links = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Products',
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Components',
      icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Aceternity UI',
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: '#',
    },
    {
      title: 'Changelog',
      icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Twitter',
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'GitHub',
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
  ];

  return (
    <div className="bg-gradient-to-t from-pink-100 via-pink-50 to-white min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10 flex-grow">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="text-pink-500" size={32} />
          <h1 className="text-4xl font-extrabold text-gray-800">Your Favourites</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {favourites.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out border border-pink-100"
            >
              <div className="flex items-center gap-3">
                <Star className="text-yellow-400" size={24} />
                <span className="text-lg font-medium text-gray-700">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Dock */}
      <div className="mt-12 mb-6">
        {/* <FloatingDock items={links} /> */}
      </div>
    </div>
  );
};

export default page;
