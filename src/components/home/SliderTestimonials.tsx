"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import React from "react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { Quote } from "lucide-react";

const data = [
  {
    image: avatar1.src,
    nombre: "Carlos Angulo",
    puesto: "Project Leader de Inteligencia de Mercado",
    empresa: "Telefónica Perú",
    testimonio:
      "Luminis es un socio clave en el entendimiento que tenemos del mercado y nuestros usuarios. El nivel de involucramiento y flexibilidad que su equipo muestra en cada proyecto nos permite tener hallazgos valiosos en corto tiempo para una mejor toma de decisiones del negocio.",
  },
  {
    image: avatar2.src,
    nombre: "Carlos Miranda",
    puesto: "Gerente de Gestión de Data Clientes e Investigación de Mercados",
    empresa: "Supermercados Peruanos",
    testimonio:
      "He trabajado con Luminis los últimos años y nos encanta trabajar con ellos. Son una agencia que se acomoda a tus necesidades: súper flexibles, rápidos, creativos y profesionales en su trabajo.",
  },
  {
    image: avatar7.src,
    nombre: "Michael Penny",
    puesto: "Head of Marketing, Design and Behavioral Economics",
    empresa: "BBVA Perú",
    testimonio:
      "He trabajado por más de 10 años diversos estudios cualitativos y cuantitativos con el equipo de Luminis y los recomiendo sin reservas. Personalmente, considero que sus técnicas de investigación aportan más valor de lo esperado, mediante análisis profundos e interpretación de la data para convertirla en insights relevantes y accionables.",
  },
  {
    image: avatar8.src,
    nombre: "Clara Diaz",
    puesto: "Product Manager",
    empresa: "Interbank",
    testimonio:
      "Testimonio de ejemplo para el cuarto testimonio. Aquí va un comentario más sobre la experiencia con la empresa.",
  },
  {
    image: avatar9.src,
    nombre: "Juan Diaz",
    puesto: "Programador Full Stack",
    empresa: "Municipalidad San Miguel",
    testimonio:
      "Este es un testimonio ficticio de ejemplo, para completar el conjunto de datos. Puede describir la experiencia con la empresa aquí.",
  },
];

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function SliderTestimonial() {
  const settings = {
    dots: true,                // Muestra los puntos de navegación (indicadores de slide)
    infinite: true,            // Permite el desplazamiento infinito de los slides
    speed: 500,                // Duración de la animación del cambio de slide (en milisegundos)
    slidesToShow: 3,           // Número de slides visibles en el viewport
    slidesToScroll: 1,         // Número de slides que se desplazan con cada acción
    autoplay: true,            // Activa el cambio automático de slides
    autoplaySpeed: 5000,       // Tiempo de espera entre cada cambio de slide (en milisegundos)
    responsive: [              // Configuración responsiva para diferentes tamaños de pantalla
      {
        breakpoint: 1024,       // Si la pantalla es menor o igual a 1024px...
        settings: {
          slidesToShow: 2,      // Muestra 2 slides en lugar de 3
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,        // Si la pantalla es menor o igual a 640px...
        settings: {
          slidesToShow: 1,      // Muestra solo 1 slide
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i: number) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-[#01AB7C]"></div>
    ),
  };
  

  return (
    <>
      <div className="py-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#01AB7C,#FFFFFF_100%)] ">
        <div className="container ">
          <h1 className="text-3xl font-bold text-center mb-12 text-black">
            Testimonios
          </h1>
          <div className="px-4">
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <div key={index} className="px-3 py-2">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px] border-2 border-[#01AB7C] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col">
                      <div className="bg-[#01AB7C] h-16 relative">
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                          <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-white">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.nombre}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-12 px-6 flex flex-col items-center flex-grow">
                        <h3 className="font-bold text-lg text-black text-center">
                          {item.nombre}
                        </h3>
                        <p className="text-sm text-gray-600 text-center mb-1">
                          {item.puesto}
                        </p>
                        {item.empresa && (
                          <p className="text-[#01AB7C] font-semibold text-center mb-4">
                            {item.empresa}
                          </p>
                        )}

                        <div className="relative mt-2 flex-grow">
                          <Quote className="w-8 h-8 text-[#01AB7C] opacity-20 absolute -top-4 -left-2" />
                          <p className="text-sm text-gray-700 leading-relaxed px-2">
                            {item.testimonio}
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 border-t border-gray-100">
                        <div className="flex justify-center">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 rounded-full bg-[#01AB7C]"
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderTestimonial;
