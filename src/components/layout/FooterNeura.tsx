export const FooterNeura = () => {
  return (
      <footer className={"bg-black text-[#bcbcbc] text-sm py-10 text-center"}>
        <div className={"container"}>
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
        <p className={"mt-6"}>&copy; 2025 NeuraSprint. All Rights Reserved.</p>
      </footer>
  );
};
