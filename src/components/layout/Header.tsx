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

          {/* <motion.div
            className="hidden md:flex items-center justify-end space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex items-center space-x-4">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://www.instagram.com/activacl/"
                  className="social-icon bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Síguenos en Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-4 h-4"
                  />
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://www.linkedin.com/company/activa-research"
                  className="social-icon bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Síguenos en LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-4 h-4"
                  />
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://twitter.com/ActivaResearch"
                  className="social-icon bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Síguenos en Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="w-4 h-4"
                  />
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://chile.activasite.com"
                  className="social-icon bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Visítanos en Chile"
                >
                  <Image
                    src="https://ext.same-assets.com/826975594/3865148821.svg"
                    alt="Chile"
                    width={24}
                    height={24}
                    className="w-4 h-4"
                  />
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://mexico.activasite.com"
                  className="social-icon bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Visítanos en México"
                >
                  <Image
                    src="https://ext.same-assets.com/826975594/876261456.png"
                    alt="México"
                    width={24}
                    height={24}
                    className="w-4 h-4"
                  />
                </a>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="header-toggler p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="space-y-1">
                <motion.span
                  className="block w-6 h-0.5 bg-gray-600"
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-gray-600"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-gray-600"
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </motion.div> */}

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
