"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logoPrincipal3.png";
import MenuIcon from "@/assets/menu.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="header header-shadow bg-[#01AB7C] sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="block" title="Ir al Inicio">
              <Image
                src={Logo}
                alt="Somos Activa"
                width={150}
                height={30}
                className="w-[200px] h-[30px]"
              />
            </Link>
          </motion.div>

      

          <div className="flex items-center gap-4 md:flex-1 md:justify-center">
            <Image
            src="/assets/menu.svg"

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

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="mt-4 md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="flex flex-col space-y-4 py-4">
                {["Instagram", "LinkedIn", "Twitter", "Chile", "México"].map(
                  (item, index) => (
                    <motion.li
                      key={item}
                      variants={itemVariants}
                      custom={index}
                    >
                      <a
                        href={
                          item === "Instagram"
                            ? "https://www.instagram.com/activacl/"
                            : item === "LinkedIn"
                            ? "https://www.linkedin.com/company/activa-research"
                            : item === "Twitter"
                            ? "https://twitter.com/ActivaResearch"
                            : item === "Chile"
                            ? "https://chile.activasite.com"
                            : "https://mexico.activasite.com"
                        }
                        className="block px-3 py-2 hover:bg-gray-100 rounded"
                        title={`Síguenos en ${item}`}
                        target={
                          ["Instagram", "LinkedIn", "Twitter"].includes(item)
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          ["Instagram", "LinkedIn", "Twitter"].includes(item)
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
