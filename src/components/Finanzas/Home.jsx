
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Home({ Usuario }) {
  const navigate = useNavigate();

  const liquidaciones = (e) => {
    e.preventDefault();
    navigate("/Liquidaciones");
  };


useEffect(() => {
    console.log(Usuario)
  if (Usuario?.Login) {
    Swal.fire({
      title: `¡Bienvenido, Camilo!`,
      text: "Estás ingresando al módulo de liquidaciones.",
      icon: "success",
      timer: 3000,
      showConfirmButton: false,
    });
  }
}, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto text-center">
     <h1 className="text-3xl text-yellow-400 font-bold mb-2">
  {Usuario ? `Bienvenido, ${Usuario.Login}` : "Cargando..."}
</h1>
        <p className="text-lg text-gray-300 mb-8">
          En el siguiente módulo podrás realizar las siguientes acciones:
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-xs md:w-80">
          <div className="relative w-full h-full min-h-80 transition-transform duration-700 transform hover:rotate-y-180 preserve-3d">
            {/* Front */}
            <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-lg p-6 backface-hidden">
              <h3 className="text-xl font-semibold text-center mb-4">
                Calcula tu Liquidación
              </h3>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Cálculo de cesantías</li>
                <li>Intereses</li>
                <li>Vacaciones</li>
                <li>Prima y subsidios</li>
              </ul>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full bg-yellow-400 text-black rounded-xl shadow-lg p-6 rotate-y-180 backface-hidden flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Da click para ingresar al módulo
              </h3>
              <button
                onClick={liquidaciones}
                className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    {/* Carrito de compras */}



    </div>
  );
}

export default Home;
