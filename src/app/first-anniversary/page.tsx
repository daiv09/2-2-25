import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function FirstAnniversary() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl text-pink-500 font-semibold">Our First Anniversary</h1>
        {/* <img src="/images/first-anniversary.jpg" alt="First Anniversary" className="w-full mt-6 rounded-xl shadow-lg" /> */}
        <p className="mt-6 text-lg text-gray-800">A MONTH together, full of memories, laughter, and love. Our first anniversary was a day to remember and celebrate all the beautiful moments we shared.

          We used to type very long messages at midnight to wish each other the on the 2nd of every month !!
        </p>
        <Link href="/" className="mt-6 text-pink-500 hover:underline inline-block">Back to the Journey</Link>
      </div>
    </div>
  );
}
