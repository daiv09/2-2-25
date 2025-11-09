"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anniversaryOpen, setAnniversaryOpen] = useState(false); // For desktop dropdown
  const [mobileAnniversaryOpen, setMobileAnniversaryOpen] = useState(false); // For mobile submenu

  // Animation variants for dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, pointerEvents: "auto" },
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 p-4 shadow-md">
      <div className="w-full flex flex-nowrap items-center justify-between mx-auto">
        {/* Logo */}
        <h1 className="text-white text-3xl font-bold flex-shrink-0">
          <Link href="/" className="text-white hover:text-pink-400 transition">
            Our Love Journey
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center relative">
          <NavLinks onClick={undefined} />

          {/* Anniversary with nested dropdown */}
          <div
            onMouseEnter={() => setAnniversaryOpen(true)}
            onMouseLeave={() => setAnniversaryOpen(false)}
            className="relative cursor-pointer text-white text-lg font-medium select-none"
          >
            <div className="flex items-center space-x-1 hover:text-pink-400 transition">
              <span>First Anniversary</span>
              <ChevronDown size={16} />
            </div>

            <motion.div
              initial="hidden"
              animate={anniversaryOpen ? "visible" : "hidden"}
              variants={dropdownVariants}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 bg-white rounded-md shadow-lg mt-2 w-48 z-30"
            >
              <Link
                href="/first-anniversary/month"
                className="block px-4 py-2 text-pink-600 hover:bg-pink-50 hover:text-pink-700 transition"
              >
                Month
              </Link>
              <Link
                href="/first-anniversary/year"
                className="block px-4 py-2 text-pink-600 hover:bg-pink-50 hover:text-pink-700 transition"
              >
                Year
              </Link>
              <Link
                href="/first-anniversary/breakup"
                className="block px-4 py-2 text-pink-600 hover:bg-pink-50 hover:text-pink-700 transition"
              >
                Breakup
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
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
            className="md:hidden bg-pink-600 p-4 rounded-b-lg overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <LinkMobile href="/first-date" onClick={() => setIsOpen(false)}>
                First Date
              </LinkMobile>
              <LinkMobile href="/first-gift" onClick={() => setIsOpen(false)}>
                First Gift
              </LinkMobile>
              <LinkMobile
                href="/first-hand-holding"
                onClick={() => setIsOpen(false)}
              >
                First Hand Holding
              </LinkMobile>
              <LinkMobile href="/first-hug" onClick={() => setIsOpen(false)}>
                First Hug
              </LinkMobile>
              <LinkMobile href="/first-rose" onClick={() => setIsOpen(false)}>
                First Rose
              </LinkMobile>
              <LinkMobile
                href="/drives-on-scooter"
                onClick={() => setIsOpen(false)}
              >
                Drives on Scooter
              </LinkMobile>

              {/* Mobile Anniversary with collapsible submenu */}
              <div>
                <button
                  onClick={() =>
                    setMobileAnniversaryOpen(!mobileAnniversaryOpen)
                  }
                  className="flex justify-between items-center w-full text-white text-lg font-medium focus:outline-none"
                  aria-expanded={mobileAnniversaryOpen}
                  aria-controls="mobile-anniversary-submenu"
                >
                  <span>First Anniversary</span>
                  {mobileAnniversaryOpen ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                <AnimatePresence>
                  {mobileAnniversaryOpen && (
                    <motion.div
                      id="mobile-anniversary-submenu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 flex flex-col space-y-2"
                    >
                      <LinkMobile
                        href="/first-anniversary/month"
                        onClick={() => setIsOpen(false)}
                      >
                        Month
                      </LinkMobile>
                      <LinkMobile
                        href="/first-anniversary/year"
                        onClick={() => setIsOpen(false)}
                      >
                        Year
                      </LinkMobile>
                      <LinkMobile
                        href="/first-anniversary/breakup"
                        onClick={() => setIsOpen(false)}
                      >
                        Breakup
                      </LinkMobile>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Desktop Nav Links except Anniversary
const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link
      href="/first-date"
      className="text-white text-lg hover:text-pink-400 transition"
      onClick={onClick}
    >
      First Date
    </Link>
    <Link
      href="/first-gift"
      className="text-white text-lg hover:text-pink-400 transition"
      onClick={onClick}
    >
      First Gift
    </Link>
    <Link
      href="/first-hand-holding"
      className="text-white text-lg hover:text-pink-400 transition"
      onClick={onClick}
    >
      First Hand Holding
    </Link>
    <Link
      href="/first-hug"
      className="text-white text-lg hover:text-pink-400 transition"
      onClick={onClick}
    >
      First Hug
    </Link>
    <Link
      href="/first-rose"
      className="text-white text-lg hover:text-pink-400 transition"
      onClick={onClick}
    >
      First Rose
    </Link>
    <Link
      href="/drives-on-scooter"
      className="text-white text-lg hover:text-pink-400 transition"
      onClick={onClick}
    >
      Drives on Scooter
    </Link>
  </>
);

// Mobile version Link component
const LinkMobile = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-white text-lg hover:text-pink-400 transition"
  >
    {children}
  </Link>
);

export default Navbar;
