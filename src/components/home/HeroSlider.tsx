'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

type Slide = {
  id: number;
  title: string;
  text: string;
  date: string;
  imageUrl: string;
  link: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Pulso Ciudadano",
    text: "Un 60,7% de los ciudadanos declara que la corrupción es el principal problema de Perú",
    date: "6 marzo 2025",
    imageUrl: "https://peru.activasite.com/wp-content/uploads/2024/04/Disen%CC%83o-sin-ti%CC%81tulo-12.png",
    link: "https://peru.activasite.com/estudios/2025/"
  },
  {
    id: 2,
    title: "Marketing Intelligence",
    text: "Comprendemos las necesidades y expectativas de los consumidores",
    date: "1 marzo 2025",
    imageUrl: "https://peru.activasite.com/wp-content/uploads/2020/01/colun.png",
    link: "https://peru.activasite.com/marketing-intelligence/"
  },
  {
    id: 3,
    title: "Customer Experience",
    text: "Mejoramos la experiencia del cliente con nuestra tecnología avanzada",
    date: "20 febrero 2025",
    imageUrl: "https://peru.activasite.com/wp-content/uploads/2020/02/CostumerExperience.jpg",
    link: "https://peru.activasite.com/customer-experience/"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoplay(false);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoplay(false);
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container-custom">
        <div className="relative w-full overflow-hidden" style={{ height: "500px" }}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="flex flex-col justify-center p-6 bg-activa-blue text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 font-cairo">{slide.title}</h3>
                  <p className="text-base md:text-lg mb-4">{slide.text}</p>
                  <span className="text-sm mb-6">{slide.date}</span>
                  <Link href={slide.link} passHref>
                    <Button variant="outline" className="btn-circular bg-transparent text-white border-white hover:bg-white hover:text-activa-blue w-fit">
                      Ver Noticia
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block relative">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    fill
                    style={{objectFit: "cover"}}
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          {slides.map((slide) => (
            <button
              key={slide.id}
              className={`w-3 h-3 mx-1 rounded-full transition-all ${
                slides.indexOf(slide) === currentSlide ? 'bg-activa-blue scale-125' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(slides.indexOf(slide))}
              aria-label={`Go to slide ${slides.indexOf(slide) + 1}`}
            />
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition-colors"
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition-colors"
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
