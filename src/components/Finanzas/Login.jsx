import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Login({onLogin}){

    //aca se definen los campos del formulario, deben agregarse a los inputs
    const [form, setform] = useState({
     
      Login: "",
      password: ""

    });

    //defino el usuario permitido

const usuariopermitido = {

      Login: "i.contreras",
      password: "123456"
};

//este metodo lo que hace es guardar y definir lo que el usuario escribe dinamicamente, 
const lectura = (e) =>{
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
}

const [logueado,setLogueado] = useState(false);


//navegacion:

  const navigate = useNavigate();
const validar = (e) => {
      e.preventDefault();
if (form.Login === usuariopermitido.Login && form.password === usuariopermitido.password) {
  setLogueado(true);
  onLogin(form); // ENVÍAS EL USUARIO BIEN
  navigate("/home");
} else {
 Swal.fire({
  title: 'Error',
  text: 'Usuario: i.contreras, Password: 123456',
  icon: 'Error',
  confirmButtonColor: '#facc15', // amarillo Tailwind
});
}

    }

    return(
 
      <div className="flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Iniciar Sesión</h2>

    <form onSubmit={validar} className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-1">Usuario</label>
        <input
          type="text"
          name="Login"
          placeholder="Ingrese su usuario"
          value={form.Login}
          onChange={lectura}
          className="w-full border text-gray-700 border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          value={form.password}
          onChange={lectura}
          className="w-full border text-gray-700 border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    <div className="bg-yellow-100 text-yellow-800 p-3 rounded shadow mt-4">
      <p> Usuario permitido: <strong>i.contreras</strong></p>
      <p> Contraseña: <strong>123456</strong></p>
    </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition duration-200"
      >
        Iniciar Sesión
      </button>
    </form>

    {logueado && (
      <div className="mt-4 text-green-600 font-semibold text-center">
        Bienvenido Usuario
      </div>
    )}
  </div>
</div>



     

    )


}

export default Login