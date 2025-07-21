  import { Routes, Route } from "react-router-dom";
  import Header from './components/Header';
  import Pokemon from './components/Pokemons';
  import SkillsCarousel from './components/Skills';
  import MyTasks from './components/mytasks';
  import VisorPDF from './components/mihojadevida';
  import Login from './components/Finanzas/Login';
  import Home from './components/Finanzas/Home'; // asegúrate que exista
  import { useState } from "react";
  import Liquidaciones from "./components/Finanzas/Liquidaciones";
import { CartContext } from "./components/carritodecompras/cartcontext";
import CartWidget from "./components/carritodecompras/cartWidget";

  function MiComponente() {
    const [proyectoActual, setProyectoactual] = useState(null);
  
    const Mostrarproyecto = (variable) => {
      setProyectoactual(variable);
      setTimeout(() => {
        const seccion = document.getElementById("proyectos");
        if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
      }, 200);
    };

    const [usuariologueado,setUsuarioLogueado] = useState(null);
    const [cart, setCart] = useState([]); // ✅ CORRECTO
    return (
      <div className="bg-gray-950 min-h-screen text-white font-sans">
        <Header onMostrarProyecto={Mostrarproyecto} />
        <SkillsCarousel />

        <Routes>
          <Route
            path="/"
            element={
              <section id="proyectos" className="py-10">
                {proyectoActual === "pokemon" && <Pokemon />}
                {proyectoActual === "tareas" && <MyTasks />}
                {proyectoActual === "contacto" && <VisorPDF />}
                {proyectoActual === "Gestor" && <Login onLogin={setUsuarioLogueado}/>}
              </section>
            }
          />
          <Route path="/home" element={<Home Usuario={usuariologueado} />} />
          <Route path="/Liquidaciones" element={<Liquidaciones />} />
          <Route path="/Carrito" element={
     <CartContext.Provider value={{ cart, setCart }}>
      <div>
        <h1>Tienda</h1>
        <CartWidget />
      </div>
    </CartContext.Provider>


          } />




        </Routes>
      </div>
    );
  }

  export default MiComponente;
