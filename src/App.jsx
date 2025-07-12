
import { useState } from 'react';
import Header from './components/Header';
import Pokemon from './components/Pokemons';
import SkillsCarousel from './components/Skills';
import MyTasks from './components/mytasks';
import VisorPDF from './components/mihojadevida';
function MiComponente() {

  const [proyectoActual,setProyectoactual] = useState(null);
 const Mostrarproyecto = (variable) => {
setProyectoactual(variable);
    setTimeout(() => {
      const seccion = document.getElementById("proyectos");
      if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
    }, 200);
}
  return (
      <div className="bg-gray-950 min-h-screen text-white font-sans">
      <Header onMostrarProyecto={Mostrarproyecto} />
      <SkillsCarousel />

      <section id="proyectos" className="py-10">
        {proyectoActual === "pokemon" && <Pokemon />}
        {proyectoActual === "tareas" && <MyTasks />}
          {proyectoActual === "contacto" && <VisorPDF />}
      </section>
    </div>
  );
}

export default MiComponente;
