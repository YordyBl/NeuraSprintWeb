import Image from "next/image";

import logo from '@/assets/logosaas.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const FooterNeura = () => {
  return (
      <footer className={"bg-black text-[#bcbcbc] text-sm py-10 text-center"}>
        <div className={"container"}>
          {/* <div className={"inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:h-full before:bg-[linear-gradient(to_right, #f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute"}>
            <Image src={logo} alt={"Logo SaaS"} height={40} className={"relative"}/>
          </div>
          <nav className={"flex flex-col md:flex-row md:justify-center gap-6 mt-6"}>
            <a href={"#"}>About</a>
            <a href={"#"}>Features</a>
            <a href={"#"}>Customers</a>
            <a href={"#"}>Pricing</a>
            <a href={"#"}>Help</a>
            <a href={"#"}>Careers</a>
          </nav>
          <div className={"flex justify-center gap-6 mt-6"}>
            <SocialX />
            <SocialInsta />
            <SocialLinkedIn />
            <SocialPin />
            <SocialYoutube />
          </div> */}
          <div className="grid grid-cols-3 space-x-2">
            <div>
              Logo
            </div>
            <nav className="flex  flex-col md:flex-col md:justify-start text-left gap-2">
              <p>MAPA DE SITIO</p>
              <a>Nosotros</a>
              <a>Lineas de trabajo</a>
              <a>Proyectos</a>
              <a>Publicaciones</a>
            </nav>
            <div className="flex  flex-col md:flex-col md:justify-start text-left gap-2">
              <h2 className="font-bold"> OFICINA CENTRAL</h2>
              <div>
              <p>Calle Parque Osores 175 Dep. 504</p>
              <p>Pueblo libre</p>
              </div>
              <p>Lima,Perú</p>

             
            </div>

          </div>
        </div>
        <p className={"mt-6"}>&copy; 2024 NeuraSprint. All Rights Reserved.</p>
      </footer>
  );
};
