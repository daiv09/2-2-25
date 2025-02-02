import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <Image src={imageUrl} alt={title} width={600} height={400} />
      <p>{description}</p>
    </div>
  );
};

export default Card;
