"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-3xl font-bold">
          <Link href="/" className="text-white hover:text-pink-400 transition">
            Our Love Journey
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLinks onClick={undefined} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-pink-600 p-4 rounded-b-lg"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface NavLinksProps {
  onClick?: () => void;
}

const NavLinks = ({ onClick }: NavLinksProps) => (
  <>
    <Link href="/first-date" className="text-white text-lg hover:text-pink-400 transition" onClick={onClick}>
      First Date
    </Link>
    <Link href="/first-hand-holding" className="text-white text-lg hover:text-pink-400 transition" onClick={onClick}>
      First Hand Holding
    </Link>
    <Link href="/first-hug" className="text-white text-lg hover:text-pink-400 transition" onClick={onClick}>
      First Hug
    </Link>
    <Link href="/first-anniversary" className="text-white text-lg hover:text-pink-400 transition" onClick={onClick}>
      First Anniversary
    </Link>
    <Link href="/first-rose" className="text-white text-lg hover:text-pink-400 transition" onClick={onClick}>
      First Rose
    </Link>
  </>
);

export default Navbar;
