'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, ScaleIn } from '@/components/ui/animation';

type StudyProps = {
  id: number;
  title: string;
  date: string;
  country: string;
  link: string;
};

const studies: StudyProps[] = [
  {
    id: 1,
    title: "Pulso Ciudadano",
    date: "3 agosto 2023",
    country: "Perú",
    link: "/estudios/pulso-ciudadano-9/"
  },
  {
    id: 2,
    title: "La importancia de los canales de comunicación en la experiencia del cliente",
    date: "11 julio 2023",
    country: "Perú",
    link: "/estudios/la-importancia-de-los-canales-de-comunicacion-en-la-experiencia-del-cliente/"
  },
  {
    id: 3,
    title: "Pulso Ciudadano",
    date: "6 junio 2023",
    country: "Perú",
    link: "/estudios/pulso-ciudadano-8/"
  }
];

const StudiesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <FadeInUp className="mb-8">
          <span className="text-gray-500 block mb-1">Aportamos a la discusión pública a través de</span>
          <h2 className="text-3xl font-bold font-cairo">nuestros <strong>estudios</strong></h2>
        </FadeInUp>

        <FadeInUp className="mb-6" delay={0.2}>
          <h3 className="text-2xl font-cairo">Estudios</h3>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" delay={0.3}>
          {studies.map((study) => (
            <ScaleIn
              key={study.id}
              className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <Link href={study.link} className="block hover:text-activa-blue transition-colors">
                <h4 className="font-bold text-xl mb-6">{study.title}</h4>
              </Link>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{study.date}</span>
                <span className="text-gray-600">{study.country}</span>
                <Link href={study.link} className="text-activa-blue hover:underline">
                  Ver estudio →
                </Link>
              </div>
            </ScaleIn>
          ))}
        </StaggerContainer>

        <FadeInUp className="mt-10 text-center" delay={0.5}>
          <Link href="/estudios-de-opinion/" passHref>
            <Button
              variant="outline"
              className="btn-circular border-black text-black hover:bg-black hover:text-white"
            >
              Ver más Estudios de Opinion
            </Button>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
};

export default StudiesSection;
