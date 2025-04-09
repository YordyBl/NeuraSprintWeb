'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, FadeInUp, ScaleIn, StaggerContainer } from '@/components/ui/animation';

type SpecialtyProps = {
  title: string;
  icon: string;
  link: string;
};

const specialties: SpecialtyProps[] = [
  {
    title: 'Customer Experience',
    icon: 'https://ext.same-assets.com/826975594/2260566913.svg',
    link: '/CustomerExperience'
  },
  {
    title: 'Marketing Intelligence',
    icon: 'https://ext.same-assets.com/826975594/1491959855.svg',
    link: '/MarketingIntelligence'
  },
  {
    title: 'Point Of Sale Audit',
    icon: 'https://ext.same-assets.com/826975594/8880833.svg',
    link: '/PointOfSaleAudit'
  },
  {
    title: 'Insights Lab',
    icon: 'https://ext.same-assets.com/826975594/3063497943.svg',
    link: '/InsightsLab'
  },
  {
    title: 'Public Affairs',
    icon: 'https://ext.same-assets.com/826975594/1905932431.svg',
    link: '/PublicAffairs'
  }
];

const SpecialtiesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <FadeInUp className="mb-10">
          <h2 className="text-3xl font-bold mb-2 font-cairo">
            <strong>Somos especialistas</strong> en
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center" delay={0.2}>
          {specialties.map((specialty) => (
            <ScaleIn
              key={specialty.title}
              className="group flex flex-col items-center hover:text-activa-blue transition-colors duration-300"
            >
              <Link href={specialty.link} className="w-full">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 text-green-600">
                  <Image
                    src={specialty.icon}
                    alt={specialty.title}
                    width={130}
                    height={130}
                    className="w-24 h-24 md:w-32 md:h-32 mx-auto"
                  />
                </div>
                <span className="font-medium">{specialty.title}</span>
              </Link>
            </ScaleIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
