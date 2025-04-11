"use client";
import React from "react";
import background1 from "@/assets/background1.jpg";
import background2 from "@/assets/background2.jpg";
import background3 from "@/assets/background3.jpg";
import dynamic from "next/dynamic";
import Image from "next/image";

const data = [
  {
    image: background1.src,
    nombre: "Clara Diaz",
  },
  {
    image: background2.src,
    nombre: "Carlos Miranda",
  },
  {
    image: background3.src,
    nombre: "Michael Penny",
  },
  {
    image: background1.src,
    nombre: "Clara Diaz",
  },
];
const SliderTest = dynamic(() => import("react-slick"), { ssr: false });
function Slider() {
  const settings = {
    dots: true, // Muestra los puntos de navegación (indicadores de slide)
    infinite: true, // Permite el desplazamiento infinito de los slides
    speed: 500, // Duración de la animación del cambio de slide (en milisegundos)
    slidesToShow: 1, // Número de slides visibles en el viewport
    slidesToScroll: 1, // Número de slides que se desplazan con cada acción
    autoplay: true, // Activa el cambio automático de slides
    autoplaySpeed: 5000, // Tiempo de espera entre cada cambio de slide (en milisegundos)
    // responsive: [              // Configuración responsiva para diferentes tamaños de pantalla
    //   {
    //     breakpoint: 1024,       // Si la pantalla es menor o igual a 1024px...
    //     settings: {
    //       slidesToShow: 2,      // Muestra 2 slides en lugar de 3
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 640,        // Si la pantalla es menor o igual a 640px...
    //     settings: {
    //       slidesToShow: 1,      // Muestra solo 1 slide
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    customPaging: (i: number) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-[#01AB7C]"></div>
    ),
  };

  return (
    <>
      <div className="min-w-full px-8">
        <SliderTest {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index} className="flex align-middle item-center px-5 py-2">
                <div className="bg-white  shadow-lg overflow-hidden h-[500px]  transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col">
                  <div key={index} className=" py-2">
                    <div className="bg-white shadow-lg overflow-hidden h-[500px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col">
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={item.nombre}
                          width={400} // Ajusta según necesidad
                          height={400} // Ajusta según necesidad
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="pt-12 px-6 flex flex-col items-center flex-grow">
                        <h3 className="font-bold text-lg text-black text-center">
                          {item.nombre}
                        </h3>
                        <p className="text-sm text-gray-600 text-center mb-1">
                          {item.puesto}
                        </p>

                       
                      </div> */}

                  {/* <div className="bg-gray-50 p-4 border-t border-gray-100">
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
                      </div> */}
                </div>
              </div>
            );
          })}
        </SliderTest>
      </div>
    </>
  );
}

export default Slider;
