import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default function FirstAnniversary() {
  return (
    <div>
      <Navbar />
      <div className="h-24" /> {/* spacer equal to navbar height */}
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl text-pink-500 font-semibold">
          Our First Breakup Anniversary
        </h1>
        {/* <img src="/images/first-anniversary.jpg" alt="First Anniversary" className="w-full mt-6 rounded-xl shadow-lg" /> */}
        <p className="mt-6 text-lg text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatem. Doloribus perspiciatis magni doloremque ex asperiores voluptates corrupti vero architecto, quaerat itaque saepe accusamus, laborum facere voluptate vitae quod reiciendis, amet exercitationem maxime! Obcaecati, tempore?
        </p>
        <Link
          href="/"
          className="mt-6 text-pink-500 hover:underline inline-block"
        >
          Back to the Journey
        </Link>
      </div>
    </div>
  );
}
