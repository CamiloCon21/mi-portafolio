import { useState } from "react";
import DropdownProjects from "./Dropdown";
import VisorPDF from "./mihojadevida";

function Header({ onMostrarProyecto }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSobreMi, setModalSobreMi] = useState(false); // Nuevo modal

  return (
    <header className="bg-gray-900 text-white py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
       <img
  src="/images/foto.png"
  alt="Foto de perfil"
  className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 object-cover shadow-lg"
/>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
            Ivan Camilo Contreras Florez
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Desarrollador .NET con experiencia en Razor Pages, SQL y frameworks como React y Angular.
          </p>

          <nav className="flex flex-row flex-wrap justify-center md:justify-start gap-4 mt-4">
            <span onClick={() => setModalSobreMi(true)} className="hover:text-yellow-300 cursor-pointer">
              Sobre mí
            </span>
            <DropdownProjects onMostrarProyecto={onMostrarProyecto} />
            <span onClick={() => setModalOpen(true)} className="hover:text-yellow-300 cursor-pointer">
              Ver Hoja de Vida
            </span>
          </nav>
        </div>
      </div>

      {/* Modal Sobre Mí */}
      {modalSobreMi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-gray-800">
            <button
              onClick={() => setModalSobreMi(false)}
              className="text-red-600 font-bold float-right"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-yellow-500 mb-4">Sobre mí</h2>
            <p>
              Soy Ingeniero en Sistemas con experiencia en desarrollo de aplicaciones web utilizando tecnologías como .NET, Razor Pages, React y Angular. Me apasiona crear soluciones funcionales, eficientes y escalables.
            </p>
          </div>
        </div>
      )}

      {/* Modal Hoja de Vida */}
      {/* Suponiendo que tu VisorPDF es un componente aparte */}
      <VisorPDF isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}

export default Header;
