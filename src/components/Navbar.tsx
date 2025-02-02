import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">
        <Link href="/" className="text-white hover:text-yellow-200 transition">
          Our Love Journey
          </Link>
        </h1>
        <div className="flex space-x-6">
          <Link href="/first-date" className="text-white text-lg hover:text-yellow-200 transition">
            First Date
          </Link>
          <Link href="/first-hand-holding" className="text-white text-lg hover:text-yellow-200 transition">
            First Hand Holding
          </Link>
          <Link href="/first-hug" className="text-white text-lg hover:text-yellow-200 transition">
            First Hug
          </Link>
          <Link href="/first-anniversary" className="text-white text-lg hover:text-yellow-200 transition">
            First Anniversary
          </Link>
          <Link href="/first-rose" className="text-white text-lg hover:text-yellow-200 transition">
            First Rose
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
