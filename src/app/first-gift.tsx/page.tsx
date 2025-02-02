// pages/first-gift.tsx
import Navbar from '../../components/Navbar';

function FirstGift = () => {
    return (
        <>
        <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-5xl text-pink-500 font-bold">Our First Gift</h1>
        <p className="mt-4 text-xl text-gray-700">A memory that holds a special place in my heart...
        <br/>
          You had a given a cute rose to me that i still have. It was the first gift you gave me and it was so special. I still have it with me. I will keep it with me forever. 💖
        </p>
        {/* Add more content like images, date, etc. */}
      </div>
      </>
    );
  };
  
  export default FirstGift;
  