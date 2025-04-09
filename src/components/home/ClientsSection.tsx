'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from '@/components/ui/animation';

type ClientProps = {
  id: number;
  name: string;
  logoUrl: string;
};

const clients: ClientProps[] = [
  {
    id: 1,
    name: 'Banco Estado',
    logoUrl: 'https://ext.same-assets.com/826975594/725513239.png'
  },
  {
    id: 2,
    name: 'Banco Ripley',
    logoUrl: 'https://ext.same-assets.com/826975594/4115364937.png'
  },
  {
    id: 3,
    name: 'Bayer',
    logoUrl: 'https://ext.same-assets.com/826975594/3467392042.png'
  },
  {
    id: 4,
    name: 'BBVA',
    logoUrl: 'https://ext.same-assets.com/826975594/2204968371.png'
  },
  {
    id: 5,
    name: 'BCI',
    logoUrl: 'https://ext.same-assets.com/826975594/2908841950.png'
  }
];

const ClientsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleClients, setVisibleClients] = useState(3);
  const [direction, setDirection] = useState(0); // -1: left, 1: right, 0: initial

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleClients(1);
      } else if (window.innerWidth < 1024) {
        setVisibleClients(2);
      } else {
        setVisibleClients(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? clients.length - visibleClients : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setStartIndex((prev) => (prev === clients.length - visibleClients ? 0 : prev + 1));
  };

  const getVisibleClients = () => {
    const result = [];
    for (let i = 0; i < visibleClients; i++) {
      const index = (startIndex + i) % clients.length;
      result.push(clients[index]);
    }
    return result;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <FadeInUp className="mb-10">
          <h2 className="text-3xl font-bold font-cairo">Nuestros <strong>clientes</strong></h2>
        </FadeInUp>

        <div className="relative">
          <div
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center"
          >
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              {getVisibleClients().map((client) => (
                <motion.div
                  key={client.id}
                  className="flex justify-center items-center h-36 p-4 bg-white shadow-sm border border-gray-100 rounded-lg"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src={client.logoUrl}
                    alt={client.name}
                    width={150}
                    height={103}
                    className="max-h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 focus:outline-none"
            onClick={prevSlide}
            aria-label="Previous clients"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>
          <motion.button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 focus:outline-none"
            onClick={nextSlide}
            aria-label="Next clients"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
