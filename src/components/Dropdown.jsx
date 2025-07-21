import { useState } from "react";
import Pokemon from "./Pokemons";

function DropdownProjects({onMostrarProyecto}) {
  const [open, setOpen] = useState(false);

  const validar = (variable) => {

    setOpen(true);
    onMostrarProyecto(variable);
  }
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="hover:text-yellow-300"
      >
        Proyectos
      </button>
      {open && (
        <ul className="absolute bg-gray-800 mt-2 rounded shadow-lg py-2 w-48 text-left z-10">
          <li>
           <button  
           className="block px-4 py-2 hover:bg-gray-700 text-white w-full text-left"
           onClick={() => validar("pokemon")}>
             Pokédex con React</button>
            
          </li>
           <li>
            <button
              onClick={() => {
                setOpen(false);
                onMostrarProyecto("tareas");
              }}
              className="block px-4 py-2 hover:bg-gray-700 text-white w-full text-left"
            >Gestor de Tareas
            </button>
          </li>
          
           <li>
            <button
              onClick={() => {
                setOpen(false);
                onMostrarProyecto("Gestor");
              }}
              className="block px-4 py-2 hover:bg-gray-700 text-white w-full text-left"
            >Gestor de Finanzas
            </button>
          </li>

   <li>
  <a
    href="https://e-commerce-react-pearl-seven.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="block px-4 py-2 hover:bg-gray-700 text-white w-full text-left"
  >
    E-commerce de Tecnología
  </a>
</li>

          {/* Agrega más proyectos aquí si quieres */}
        </ul>
      )}
    </div>
  );
}

export default DropdownProjects;
