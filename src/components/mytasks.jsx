import { useState } from "react";

function MyTasks() {
  const [tareas, setTareas] = useState([]);
  
  

  const cambiarestado = (titulo, nuevoEstado) => {
  const tareasActualizadas = tareas.map(t => {
    if (t.titulo === titulo) {
      return { ...t, estado: nuevoEstado }; // se crea una nueva tarea con el nuevo estado
    }
    return t;
  });
  setTareas(tareasActualizadas);
};

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    estado: "Pendiente",
    fechainicio: "",
    fechafin: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const agregarTarea = (e) => {
    e.preventDefault();
    setTareas([...tareas, form]);
    setForm({
      titulo: "",
      descripcion: "",
      estado: "Pendiente",
      fechainicio: "",
      fechafin: ""
    });
  };

  return (
   <div className="p-4 sm:p-6 max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
    Agendamiento de Tareas
  </h2>

  <form
    onSubmit={agregarTarea}
    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
  >
    <input
      type="text"
      name="titulo"
      placeholder="Título"
      value={form.titulo}
      onChange={handleChange}
      className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-full"
    />

    <input
      type="text"
      name="descripcion"
      placeholder="Descripción"
      value={form.descripcion}
      onChange={handleChange}
      className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-full"
    />

    <input
      type="date"
      name="fechainicio"
      value={form.fechainicio}
      onChange={handleChange}
      className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-full"
    />

    <input
      type="date"
      name="fechafin"
      value={form.fechafin}
      onChange={handleChange}
      className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-full"
    />

    <div className="sm:col-span-2 flex justify-center">
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Agregar Tarea
      </button>
    </div>
  </form>

  <ul className="space-y-4">
    {tareas.map((tarea, index) => (
      <li
        key={index}
        className="border border-gray-700 p-4 rounded bg-gray-900 text-white"
      >
        <h3 className="font-semibold text-lg text-yellow-300">
          {tarea.titulo}
        </h3>
          <h3 className="font-semibold text-lg text-yellow-300">
          {tarea.estado}
        </h3>
        <p className="text-sm">{tarea.descripcion}</p>
        <div className="text-sm mt-2">
          <p>
            <strong>Inicio:</strong> {tarea.fechainicio}
          </p>
          <p>
            <strong>Fin:</strong> {tarea.fechafin}
          </p>
        </div>
      <div className="mt-4 flex gap-3">
  <button
    onClick={() => cambiarestado(tarea.titulo, "Cumplida")}
    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
  >
    Finalizar
  </button>

  <button
    onClick={() => cambiarestado(tarea.titulo, "Cancelada")}
    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
  >
    Cancelar
  </button>
</div>

      </li>
      
    ))}
  </ul>
</div>

  );
}

export default MyTasks;
