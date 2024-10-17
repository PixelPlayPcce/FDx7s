'use client'
import { spaceGrotesk, spaceMono } from "@/components/fonts";
import { ArrowBack, ArrowForward } from "@/components/icons";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const MImage = motion(Image)
export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time * 1.5);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);


  return (
    <div className="">
      <Hero />
      <Banner color="green" />
      <Categories />
      <Banner color="red" />
      {/* <Cards /> */}
      <Showcase />
      {/* <div className="h-72 "/> */}
      <Banner color="black" />

    </div>
  );
}

const Showcase = () => {
  return <section className="relative p-12 lg:px-40 pb-12 pt-24 mb-0 overflow-hidden">
    <h3 className="italic">
      Our Favorite Goan this month
    </h3>
    <h1 className={cn(spaceGrotesk.className,"text-4xl mt-1 font-bold")}>Emanuel Pedro Fernandes</h1>
    <p className={cn("w-full md:w-3/4 text-xl mt-1 ",spaceMono.className)}>Emanuel Pedro Fernandes, a beloved baker in Nuvem, Goa, has been delighting the village with his delicious pao since he was just 21. At 65, his passion for baking remains strong, and his warm smile and kind spirit make every visit to his bakery a cherished experience. Emanuel’s commitment to quality and his willingness to share his knowledge with aspiring bakers have made him a vital part of the community, where his legacy of love and dedication is felt by all.</p>

    <svg className="absolute -bottom-80 right-0 -z-10" width="1268" height="1313" viewBox="0 0 1268 1313" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_6_84)">
<path d="M1043.5 358L655.5 300L300 869.5L486.5 897L630 516.5H1043.5V358Z" fill="#EFA97B"/>
<path d="M594 934L737.5 581.5L861 566.5L916.5 992L453 1012.5L400 914L594 934Z" fill="#A67BEF"/>
</g>
<defs>
<filter id="filter0_f_6_84" x="0" y="0" width="1343.5" height="1312.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_6_84"/>
</filter>
</defs>
</svg>

  </section>
}

// const Cards = () => {
//   return <section className="min-h-96 my-20 px-24 flex items-center gap-12 justify-center">
//     <Card />
//     <Card />
//     <Card />
//   </section>
// }


// const Card = () => {
//   return <div className=" aspect-[3/4] bg-neutral-100  w-72">

//   </div>
// }

const Banner = ({ color }: { color: 'green' | 'red'|'black' }) => {
  return <>
    <div className={cn(" w-full h-12 flex overflow-hidden items-center", color == 'green' && 'bg-green-300' ,color == 'red' && 'bg-red-400',color == 'black' && 'bg-black text-white',spaceMono.className)}>

    <Marquee>

<h1 className="whitespace-nowrap text-2xl font-bold italic"> The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan  The Goan </h1>
    </Marquee>
    </div>
  </>
}
const Categories = () => {
  const [selectedCat, setSelcetedCat] = useState(0)
  const place_categotries = [
    {name:'Street Food Stands',img:'/pexels-332285781-20668997.jpg'},
    {name:'Authentic Goan Food',img:'/06-DSC_0298-1024x681.webp'},
    {name:'Bakeries',img:'/74894422-scaled.jpg'},
    {name:'Artists',img:'/110800-kidppssfmg-1547712428.jpg'},
  ];



  return <section className="p-4 grid grid-rows-2 md:grid-cols-2">
    <div className="   p-8">
      {place_categotries.map((_,i) => <Link  href={`/places?${place_categotries[selectedCat].name}`} onMouseOver={() => setSelcetedCat(i)} className={cn("text-4xl block mb-4 cursor-pointer transition-all", selectedCat == i && 'text-orange-300 md:indent-8')} key={i}>{_.name}</Link>)}
    </div>
    <div className="h-[60vh] overflow-hidden">
      <Image alt="h-full w-full aspect-square object-cover" src={place_categotries[selectedCat].img} height={800} width={800} />
    </div>
  </section>
}


type Location = {
  text: string;
  link: string;
};

type CarouselItem = {
  src: string;
  name: string;
  location: Location;
};


const Hero = () => {
  const carousel: CarouselItem[] = [
    {
      src: '/Gemini_Generated_Image_r0k1mlr0k1mlr0k1.jpeg',
      name: 'Joaos Choris',
      location: {
        text: 'near Colva Beach, Margao',
        link: 'google maps link',
      },
    },
    {
      src: '/Gemini_Generated_Image_wojmfrwojmfrwojm.jpeg',
      name: 'Rosy’s Choris Pav',
      location: {
        text: 'near Mapusa Market, Mapusa',
        link: 'google maps link',
      },
    },
    {
      src: '/pexels-syednouman-7221009.jpg',
      name: 'Krishna Sugarcane',
      location: {
        text: 'near Panjim Church Square, Panaji',
        link: 'google maps link',
      },
    },
    {
      src: '/photo3jpg.jpg',
      name: 'Cotta Cozinha',
      location: {
        text: 'near Margao Municipal Garden, Margao',
        link: 'google maps link',
      },
    },
    {
      src: '/pentagon-restaurant-bar.jpg',
      name: 'Pentagon Bar and Restauraunt',
      location: {
        text: 'near Anjuna Beach, Anjuna',
        link: 'google maps link',
      },
    },
    {
      src: '/Mikes-Social.jpg',
      name: 'Mikes Place',
      location: {
        text: 'near Vasco Market, Vasco da Gama',
        link: 'google maps link',
      },
    },

  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carousel.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carousel.length) % carousel.length);
  };

  // Auto-increment every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [handleNext]);

  return (
    <>
      <div className=" p-4  w-full relative mb-12">
        <div className="bg-white  w-40 rounded-bl-3xl h-16 absolute right-4 top-4 z-10 flex items-center gap-6 justify-center ">
          <button className="aspect-square size-10 p-3 items-center justify-center flex rounded-full overflow-hidden"><Search /></button>
          <button className="aspect-square size-10  items-center justify-center flex rounded-full overflow-hidden"><Image alt="" className="size-full" src={'/Rectangle 5.png'} height={100} width={100}/></button>
        </div>
        <svg className="absolute top-4 right-[11rem] z-10" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25 0H0C13.8071 0 25 11.1929 25 25V0Z" fill="white" />
        </svg>
        <svg className="absolute top-[5rem] right-4 z-10" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25 0H0C13.8071 0 25 11.1929 25 25V0Z" fill="white" />
        </svg>

        <AnimatePresence mode="sync">
          <MImage
            // transition={{ duration: 300 }}
            className="md:aspect-auto h-[80vh] rounded-xl aspect-[3/4] sm:aspect-[4/3] object-cover w-full "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={carousel[currentIndex].src}
            alt={carousel[currentIndex].name}
            width={800}
            height={600}

          />
          <div className=" w-full h-32 flex items-center justify-between  ">
            <div className=" flex gap-2 pt-1 ">

              <button className="text-2xl hover:bg-neutral-200 rounded-full p-2" onClick={handlePrev}>
                <ArrowBack />
              </button>
              <button className="text-2xl hover:bg-neutral-200 rounded-full p-2" onClick={handleNext}>
                <ArrowForward />
              </button>
            </div>

            <div className="flex flex-col items-end">
              <motion.h1  initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="text-end font-bold text-3xl">
                {carousel[currentIndex].name}
              </motion.h1>
              <Link className="text-end underline" href={carousel[currentIndex].location.link}
              >
                <motion.span  initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>{carousel[currentIndex].location.text}</motion.span>
              </Link>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};