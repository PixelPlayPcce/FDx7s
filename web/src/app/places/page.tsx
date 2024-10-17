import { spaceGrotesk, spaceMono } from "@/components/fonts";
import { MaterialSymbolsStar, MaterialSymbolsStarHalf, MaterialSymbolsStarOutline } from "@/components/icons"
import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link";
import Marquee from "react-fast-marquee";


const placeData = [
    {
      imageSrc: '/Frame-40.png',
      title: 'Lesters Paos',
      description: 'Delicious pastries and cakes.',
      rating: 4,
    },
    {
      imageSrc: '/great-concept-excellent.jpg',
      title: 'Bistro Belle',
      description: 'Charming bistro with French cuisine.',
      rating: 5,
    },
    {
      imageSrc: '/images ewe.jpeg',
      title: 'Café Mocha',
      description: 'The best coffee in town with a cozy atmosphere.',
      rating: 3,
    },
    {
      imageSrc: '/5ceb958c0abbc25fc55ba773_1558943116861.jpg',
      title: 'Pizza Paradise',
      description: 'Authentic Italian pizza made from scratch.',
      rating: 4,
    },
    {
      imageSrc: '/spicy-salmon-roll.jpg',
      title: 'Sushi Haven',
      description: 'Fresh sushi and traditional Japanese dishes.',
      rating: 5,
    },
  ];
  

  export default function Page() {
    return (
      <section className="p-12">

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {placeData.map((place, index) => (
            <PlaceCard
            special={(Math.random()<.5)}
              key={index}
              imageSrc={place.imageSrc}
              title={place.title}
              description={place.description}
              rating={place.rating}
            />
          ))}
        </div>
      </section>
    );
  }
  


interface PlaceCardProps {
    imageSrc: string;
    title: string;
    description: string;
    rating: number;
    special?:boolean;
  }
  
const PlaceCard: React.FC<PlaceCardProps> = ({ imageSrc, title, description, rating,special }) => {
    return (
      <Link href={`/places/${title}`} className="md:w-56 w-full aspect-square relative  h-auto md:aspect-[4/5]">
       <div className="inset-0 absolute  overflow-hidden">

        {special?<div className="absolute rotate-12 bg-gradient-to-l from-yellow-400 to-yellow-400 via-yellow-200 -right-8 ">

        <Marquee >
          <h1 className={spaceMono.className}>
          special offer special offer special offer special offer special offer special offer special offer 
          </h1>
         </Marquee>
        </div>:<></>}
       </div>
       
        <Image
          className="h-full object-cover shadow-xl rounded-md"
          alt={title}
          src={imageSrc}
          height={500}
          width={500}
        />
        <h1 className={cn(spaceGrotesk.className,"text-xl font-bold mt-1")}>{title}</h1>
        <p className={cn(spaceMono.className,"text-sm mb-2")}>{description}</p>
        <Rating value={rating} />
      </Link>
    );
  };
  



  const Rating = ({ value }: { value: number }) => {
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    return (
      <div className="text-xs text-orange-300" style={{ display: 'flex', alignItems: 'center' }}>
        {Array.from({ length: fullStars }, (_, index) => (
          <MaterialSymbolsStar key={`full-${index}`} />
        ))}
        {hasHalfStar && <MaterialSymbolsStarHalf />}
        {Array.from({ length: emptyStars }, (_, index) => (
          <MaterialSymbolsStarOutline key={`empty-${index}`} />
        ))}
      </div>
    );
  };
  