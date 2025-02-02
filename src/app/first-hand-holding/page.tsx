import Navbar from '../../components/Navbar';

export default function FirstHandHolding() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl text-pink-500 font-semibold">Our First Hand Holding</h1>
        {/* <img src="/images/first-hand-holding.jpg" alt="First Hand Holding" className="w-full mt-6 rounded-xl shadow-lg" /> */}
        <p className="mt-6 text-lg text-gray-800">The moment when our fingers first intertwined, and everything felt so right. A moment I'll forever cherish!
      <br />
        It was at someone's house where we first held hands. It was such a nice timeee. It was my first time holding a girl's hands. You have the softest hands on the world and i promised myself to never leave your hand everrrr!!! I will remember that moment for ever. Your head were on my shoulders and I remember _ and _ took a photo too. (and i look dead in it Lol..). 💖
        </p>
        <a href="/" className="mt-6 text-pink-500 hover:underline inline-block">Back to the Journey</a>
      </div>
    </div>
  );
}
