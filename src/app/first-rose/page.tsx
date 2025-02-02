import Navbar from '../../components/Navbar';

export default function FirstRose() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl text-pink-500 font-semibold">Our First Rose</h1>
        <div className="flex justify-center items-center">
  <img src="/images/first-rose.jpg" alt="First Rose" className="w-45 h-64 mt-6 rounded-xl shadow-lg" />
</div>
        <p className="mt-6 text-lg text-gray-800">You had a given a cute rose to me that i still have. It was the first gift you gave me and it was so special. I still have it with me. I will keep it with me forever. 💖
        <br />
          I remember the first gift i gave you too. It was a red rose. That i secretly had kept in your bag while we were in library. I remember you were so happy and surprised to see that. I will remember that moment for ever. 💖
        </p>
        <a href="/" className="mt-6 text-pink-500 hover:underline inline-block">
          Back to the Journey
        </a>
      </div>
    </div>
  );
}
