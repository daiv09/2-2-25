import Card from '../components/Card';

export default function Home() {
  return (
    <div className="container">
      <h1>Happy 6 Months, My Love!</h1>
      <p>Here's our beautiful journey together, each moment a memory to cherish.</p>

      <Card
        title="Our First Date"
        description="A beautiful beginning of our love story!"
        imageUrl="/images/moment1.jpg"
      />
      {/* Add more Card components for other moments */}
    </div>
  );
}
