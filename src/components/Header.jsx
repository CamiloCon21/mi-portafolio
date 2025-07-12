import { useState } from "react";
import DropdownProjects from "./Dropdown";
import VisorPDF from "./mihojadevida";


function Header({ onMostrarProyecto }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
        
        {/* Imagen de perfil */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="src/images/perfil.png"
            alt="Foto de perfil"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 object-cover shadow-lg"
          />
        </div>

        {/* Nombre y descripción */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
            Ivan Camilo Contreras Florez
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Desarrollador .NET con experiencia en Razor Pages, SQL y frameworks como React y Angular.
          </p>
          
          {/* Navegación */}
          <nav className="flex flex-row flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a href="#sobre-mi" className="hover:text-yellow-300">Sobre mí</a>
            <DropdownProjects onMostrarProyecto={onMostrarProyecto} />
         <button
  onClick={() => setModalOpen(true)}
  className="hover:text-yellow-300"
>
  Ver Hoja de Vida
</button>
          </nav>
        </div>
      </div>

      {/* Modal con PDF */}
      <VisorPDF isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}

export default Header;
