import Image from "next/image";
import { Star, MapPin, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { spaceGrotesk } from "@/components/fonts";

// Reusable Components
const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
    ))}
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InfoItem = ({ icon: Icon, text }:{icon:any;text:string}) => (
  <div className="flex items-center gap-2">
    <Icon className="w-5 h-5 text-gray-600" />
    <span>{text}</span>
  </div>
);

const MenuItem = ({ name, price }:{name:string;price:number}) => (
  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
    <h3 className="font-bold mb-2">{name}</h3>
    <p className="text-gray-600 text-sm">From ₹{price}</p>
  </div>
);

const ReviewCard = ({ name, initials, timeAgo, rating, comment }:{name:string;initials:string;timeAgo:string;rating:number;comment:string}) => (
  <div className="bg-gray-50 p-6 rounded-xl">
    <div className="flex items-center gap-4 mb-3">
      <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center">
        <span className="font-bold text-gray-600">{initials}</span>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <h3 className="font-bold">{name}</h3>
          <span className="text-sm text-gray-500">{timeAgo}</span>
        </div>
        <StarRating rating={rating} />
      </div>
    </div>
    <p className="">{comment}</p>
  </div>
);

// Data
const RESTAURANT_INFO = {
  name: "Lester's Paos",
  rating: 4.8,
  reviewCount: 128,
  description: "A beloved neighborhood bakery serving handcrafted pastries and artisanal cakes since 1985. Our signature pao bread and Portuguese-inspired desserts have been delighting customers for generations.",
  contact: {
    address: "1234 Baker Street, Downtown",
    phone: "1234 1245 234",
    hours: "Open daily 7AM - 8PM"
  }
};

const POPULAR_ITEMS = [
  { name: "Classic Pao", price: 20 },
  { name: "Portuguese Egg Tart", price: 25 },
  { name: "Chocolate Truffle Cake", price: 60 }
];

const REVIEWS = [
  {
    name: "Rhys Rodrigues",
    initials: "RR",
    timeAgo: "2 days ago",
    rating: 5,
    comment: "Amazing food as always! The pao bread is perfectly crusty on the outside and soft on the inside. Their Portuguese egg tarts are the best in town. A must-visit for anyone who loves authentic baked goods."
  },
  {
    name: "Sarah Mitchell",
    initials: "SM",
    timeAgo: "1 week ago",
    rating: 5,
    comment: "The chocolate truffle cake I ordered for my daughter's birthday was absolutely spectacular! Not only was it beautiful to look at, but it tasted even better. The staff was incredibly helpful with the customization too."
  }
];

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto p-6 md:p-12">
      {/* Hero Section */}
      <div className="relative mb-8">
        <Image 
          className="rounded-2xl w-full aspect-video object-cover shadow-lg" 
          alt="Lester's Paos storefront" 
          height={800} 
          width={800} 
          src={'/Frame-40.png'}
          priority
        />
        <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full backdrop-blur-sm">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{RESTAURANT_INFO.rating}</span>
            <span className="text-sm text-gray-600">({RESTAURANT_INFO.reviewCount} reviews)</span>
          </div>
        </div>
      </div>

      {/* Header Info */}
      <div className="space-y-4 mb-12">
        <h1 className={cn(spaceGrotesk.className,"text-4xl md:text-5xl font-black tracking-tight")}>{RESTAURANT_INFO.name}</h1>
        <p className="text-lg ">{RESTAURANT_INFO.description}</p>
        
        {/* Quick Info */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <InfoItem icon={MapPin} text={RESTAURANT_INFO.contact.address} />
          <InfoItem icon={Phone} text={RESTAURANT_INFO.contact.phone} />
          <InfoItem icon={Clock} text={RESTAURANT_INFO.contact.hours} />
        </div>
      </div>

      {/* Popular Items */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POPULAR_ITEMS.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <section className="mt-12 pb-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-8">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>
    </section>
  );
}