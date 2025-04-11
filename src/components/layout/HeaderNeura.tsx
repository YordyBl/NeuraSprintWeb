"use client";

import Logo from "@/assets/logoPrincipal3.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export default function HeaderNeura() {  // Cambiado a export default
  return (
    <header className={"sticky top-0 backdrop-blur-md bg-[#01AB7C] z-20"}>
      <div className="py-5">
        <div className="container flex justify-between items-center md:relative">
          <div className="relative md:absolute md:left-0">
            <Image 
              src={Logo} 
              alt="SaaS Logo" 
              height={150} 
              width={180}
              priority
            />
          </div>

          <div className="flex items-center gap-4 md:flex-1 md:justify-center">
            <Image 
              src={MenuIcon} 
              alt="Menu" 
              className="h-5 w-5 md:hidden"
              width={20}
              height={20}
            />
            <nav className="hidden md:flex gap-6 text-white items-center">
              <a href="#">Inicio</a>
              <a href="#">Nosotros</a>
              <a href="#">Servicios</a>
              <a href="#">Contacto</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}