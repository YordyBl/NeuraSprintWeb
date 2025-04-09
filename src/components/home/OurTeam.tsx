import Image from "next/image";
import React from "react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import flagPeru from "@/assets/flagPeru.png";
import mexicoFlag from "@/assets/mexicoFlag.png";
import { LinkedinIcon, MailIcon } from "lucide-react";

const team = [
  {
    name: "Iván Álvarez",
    puesto: "CEO",
    imageSrc: avatar1.src,
    flag: "🇫🇷",
    flagAlt: "Francia",
    linkedinUrl: "https://www.linkedin.com/",
    email: "mailto:ivan@example.com",
    proyectos: "",
  },
  {
    name: "Roberto Rodríguez",
    puesto: "Analista",
    imageSrc: avatar2.src,
    flag: "🇨🇦",
    flagAlt: "Canadá",
    linkedinUrl: "https://www.linkedin.com/",
    email: "mailto:roberto@example.com",
    proyectos: "",
  },
  {
    name: "José Lozada",
    puesto: "Analista",
    imageSrc: avatar3.src,
    flag: "🇲🇽",
    flagAlt: "México",
    linkedinUrl: "https://www.linkedin.com/",
    email: "mailto:jose@example.com",
    proyectos: "6 proyectos",
  },
  {
    name: "Brian Avilés",
    puesto: "Analista",
    imageSrc: avatar4.src,
    flag: "🇨🇦",
    flagAlt: "Canadá",
    linkedinUrl: "https://www.linkedin.com/",
    email: "mailto:brian@example.com",
    proyectos: "5 proyectos",
  },
  {
    name: "María Esther Bailón",
    puesto: "Analista",
    imageSrc: avatar5.src,
    flag: "🇫🇷",
    flagAlt: "Francia",
    linkedinUrl: "https://www.linkedin.com/",
    email: "mailto:maria@example.com",
    proyectos: "16 proyectos",
  },
  {
    name: "Carlos Piedra",
    puesto: "Analista",
    imageSrc: avatar6.src,
    flag: "🇨🇦",
    flagAlt: "Canadá",
    linkedinUrl: "https://www.linkedin.com/",
    email: "mailto:carlos@example.com",
    proyectos: "proyectos",
  },
]
const OurTeam = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestro equipo</h2>

        {/* Versión desktop: grid de 3 columnas */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center mb-10">
              <div className="mb-4 bg-gray-100 rounded-full p-1">
                <div className="w-48 h-48 relative rounded-full overflow-hidden">
                  <Image
                    src={member.imageSrc || "/placeholder.svg"}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-2xl" aria-label={member.flagAlt}>
                    {member.flag}
                  </span>
                  <span className="text-red-500">{member.puesto}</span>
                  {/* {member.proyectos && <span className="text-red-500 ml-1">{member.proyectos}</span>} */}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 mt-3">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={member.email}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  aria-label={`Email de ${member.name}`}
                >
                  <MailIcon size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Versión móvil: carrusel horizontal */}
        <div className="lg:hidden overflow-x-auto pb-6">
          <div className="flex space-x-6 min-w-max">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center w-48">
                <div className="mb-4 bg-gray-100 rounded-full p-1">
                  <div className="w-36 h-36 relative rounded-full overflow-hidden">
                    <Image
                      src={member.imageSrc || "/placeholder.svg"}
                      alt={`Foto de ${member.name}`}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-base text-gray-900">{member.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-xl" aria-label={member.flagAlt}>
                      {member.flag}
                    </span>
                    <span className="text-red-500 text-sm">{member.puesto}</span>
                    {member.proyectos && <span className="text-red-500 text-sm ml-1">{member.proyectos}</span>}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-3">
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href={member.email}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <MailIcon size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam;
