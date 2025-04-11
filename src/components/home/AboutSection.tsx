"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeInLeft, FadeInRight } from "@/components/ui/animation";

const AboutSection = () => {
  return (
    <section className="py-20 bg-activa-gray">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          <FadeInLeft className="md:col-span-4">
            <h2 className="text-4xl font-bold mb-4 font-cairo">
              Somos <span className="text-green-600">Neura Sprint</span>
            </h2>
            <p className="text-lg mb-6">
              En Activa conectamos los <strong>insights</strong> con la{" "}
              <strong>acción</strong> para apoyar decisiones de alto impacto en
              el negocio de nuestros clientes.
            </p>
            <Link href="/activa/quienes-somos" passHref>
              <Button
                variant="default"
                className="btn-circular bg-black hover:bg-gray-800 text-white"
              >
                Ver más
              </Button>
            </Link>
          </FadeInLeft>

          <FadeInRight className="md:col-span-3 flex items-center" delay={0.2}>
            <div className="w-full h-60 md:h-80 bg-gradient-to-r from-activa-blue to-blue-400 rounded-lg shadow-lg" />
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
