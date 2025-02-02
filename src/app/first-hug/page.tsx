import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function FirstHug() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl text-pink-500 font-semibold">Our First Hug</h1>
        {/* <img src="/images/first-hug.jpg" alt="First Hug" className="w-full mt-6 rounded-xl shadow-lg" /> */}
        <p className="mt-6 text-lg text-gray-800">The first hug was more than just a simple embrace; it felt like we were home with each other. The warmth and love in that moment was unforgettable.
          <br/>
          It was when we got our semester results, and we both were happy with our grades. We decided to celebrate it with a hug. 
          <br/>
          <div className=" mx-auto mt-8 text-center">OR</div>
          <br/>
          When we going back from the peace library near the staircase ig....
        </p>
        <Link href="/" className="mt-6 text-pink-500 hover:underline inline-block">Back to the Journey</Link>
      </div>
    </div>
  );
}
