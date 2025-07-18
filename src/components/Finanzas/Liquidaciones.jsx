import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable"; // 👈 esta línea es clave

function Liquidaciones() {
  const [form, setform] = useState({
    SalarioBase: "",
    fechaFin: "",
    fechaInicio: "",
    diasacumulados: "",
    primaPagada: "",
  });

  const [resultado, setResultado] = useState(null);

  const handlerchange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

const calcular = (e) => {
  e.preventDefault();

  const inicio = new Date("2025-01-01");
const fin = new Date("2025-07-16");
inicio.setHours(0,0,0,0);
fin.setHours(0,0,0,0);
const dias = Math.floor((fin - inicio) / (1000 * 60 * 60 * 24)) + 1;
console.log(dias); // Debería mostrar 168

  const salario = parseFloat(form.SalarioBase);
  let fechaInicio = new Date(form.fechaInicio);
  let fechainiciovariable = new Date(form.fechaInicio);
  const fechaFin = new Date(form.fechaFin);
  const diasAcumulados = parseFloat(form.diasacumulados) || 0;
  const primaPagada = form.primaPagada === "si";

  const subsidioTransporte = salario <= 2600000 ? 162000 : 0;
  const msPorDia = 1000 * 60 * 60 * 24;

  // Si lleva más de 1 año, se considera desde el 1 de enero del año actual
const unAnioAntes = new Date(fechaFin);
unAnioAntes.setFullYear(unAnioAntes.getFullYear() - 1);

  let diferenciaDias = null;
  let diferenciaDiascompletas = null

// si lleva mas de un año en la empresa

if (fechaInicio < unAnioAntes) {
  fechainiciovariable = new Date(fechaFin.getFullYear(), 0, 1); // 0 es enero, día 1
  diferenciaDias = Math.floor((fechaFin - fechainiciovariable) / msPorDia) + 1;
}else{
    diferenciaDias = Math.floor((fechaFin - fechaInicio) / msPorDia) + 1;

}

    diferenciaDiascompletas = Math.floor((fechaFin - fechaInicio) / msPorDia) + 1;
console.log("fecha inicio:",fechainiciovariable)

if(diferenciaDias < 0){diferenciaDias= diferenciaDias * -1}
  const cesantias = (salario * diferenciaDias) / 360;
  const interesesCesantias = (cesantias * 0.12 * diferenciaDias) / 360;

  // PRIMA
  let prima = 0;
  let fechaInicioPrima = new Date(fechaInicio);
  const mesSalida = fechaFin.getMonth() + 1;
  const anioSalida = fechaFin.getFullYear();

  if (primaPagada) {
    if (mesSalida <= 6) {
      fechaInicioPrima = null; // ya se pagó
    } else {
      fechaInicioPrima = new Date(`${anioSalida}-07-01`);
    }
  }

  if (fechaInicioPrima) {
    const diasPrima = Math.floor((fechaFin - fechaInicioPrima) / msPorDia) + 1;
    prima = (salario * diasPrima) / 360;
  }

  // VACACIONES
  const salarioDiario = salario / 30;
  const vacaciones = ((salario * diferenciaDiascompletas) / 720) + (salarioDiario * diasAcumulados);
  const total = cesantias + interesesCesantias + prima + vacaciones + subsidioTransporte;

  setResultado({
    cesantias,
    interesesCesantias,
    prima,
    vacaciones,
    subsidioTransporte,
    total,
    diasTrabajados: diferenciaDiascompletas,
  });
};
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0, // sin decimales
});


  const descargarPDF = () => {
    if (!resultado) return;
const doc = new jsPDF();
autoTable(doc, {
  head: [['Concepto', 'Valor']],
  body: [
    ['Cesantías', resultado.cesantias.toFixed(2)],
    ['Intereses', resultado.interesesCesantias.toFixed(2)],
    ['Prima', resultado.prima.toFixed(2)],
    ['Vacaciones', resultado.vacaciones.toFixed(2)],
    ['Subsidio de transporte', resultado.subsidioTransporte.toFixed(2)],
    ['Total', resultado.total.toFixed(2)],
  ],
});
doc.save("liquidacion.pdf");
  };

  return (
    <div className="p-6  min-h-screen text-gray-800 " >
<h1 className="text-2xl text-center text-yellow-400 font-bold mb-4">
  Calculadora de Liquidación
</h1>


      <form onSubmit={calcular} className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <div>
          <label className="block mb-1 font-semibold">Salario Base</label>
          <input
            type="number"
            name="SalarioBase"
            value={form.SalarioBase}
            onChange={handlerchange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Fecha de Inicio</label>
          <input
            type="date"
            name="fechaInicio"
            value={form.fechaInicio}
            onChange={handlerchange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Fecha de Fin</label>
          <input
            type="date"
            name="fechaFin"
            value={form.fechaFin}
            onChange={handlerchange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Días de vacaciones acumulados</label>
          <input
            type="number"
            name="diasacumulados"
            value={form.diasacumulados}
            onChange={handlerchange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">¿Te han pagado la prima del semestre?</label>
          <select
            name="primaPagada"
            value={form.primaPagada}
            onChange={handlerchange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md font-semibold"
        >
          Calcular Liquidación
        </button>
      </form>

      {resultado && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4">Resultado:</h2>
          <ul className="space-y-2">
            <li><strong>Días trabajados:</strong> { resultado.diasTrabajados}</li>
            <li><strong>Cesantías:</strong> { formatoCOP.format(resultado.cesantias.toFixed(2))}</li>
            <li><strong>Intereses sobre cesantías:</strong> { formatoCOP.format(resultado.interesesCesantias.toFixed(2))}</li>
            <li><strong>Prima:</strong> { formatoCOP.format(resultado.prima.toFixed(2))}</li>
            <li><strong>Vacaciones:</strong> {formatoCOP.format(resultado.vacaciones.toFixed(2))}</li>
            {resultado.subsidioTransporte > 0 && (
              <li><strong>Subsidio de transporte:</strong> {formatoCOP.format(resultado.subsidioTransporte.toFixed(2))}</li>
            )}
            <li className="text-lg font-bold"><strong>Total Liquidación:</strong> {formatoCOP.format(resultado.total.toFixed(2))}</li>
          </ul>

          <button
            onClick={descargarPDF}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Descargar PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default Liquidaciones;
