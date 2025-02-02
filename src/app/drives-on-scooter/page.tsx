import Navbar from '../../components/Navbar';

export default function drive() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl text-pink-500 font-semibold">The Scooter Rides</h1>
        {/* <img src="/images/first-hug.jpg" alt="First Hug" className="w-full mt-6 rounded-xl shadow-lg" /> */}
        <p className="mt-6 text-lg text-gray-800">Every scooter ride with you even the smallest rides was a memory to cherish. Moments where we first rode on the bike where people used to see us and smile. Moments where used to hug me from behind while i was driving and moments where you used to try to driveee still are in my mind...💖
        </p>
        <a href="/" className="mt-6 text-pink-500 hover:underline inline-block">Back to the Journey</a>
      </div>
    </div>
  );
}
