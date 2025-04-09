import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-gray-100 py-4 mt-16">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <p className="text-gray-600 text-sm">
            Somos Activa {currentYear}. Todos los Derechos Reservados by Activa Research S.A.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
