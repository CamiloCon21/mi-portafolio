import React from 'react';

const skills = [
  {
    title: 'Lenguajes de Programación',
    front: ['C#', 'JavaScript', 'TypeScript', 'SQL'],
    back: ['Nivel Intermedio – Avanzado', 'Nivel Intermedio', 'Actualizándome', 'Consultas y procedimientos'],
  },
  {
    title: 'Herramientas y Entornos',
    front: ['Visual Studio', 'VS Code', 'Git / GitHub', 'Postman'],
    back: ['Entorno Principal', 'Editor Ligero', 'Control de Versiones', 'APIs REST'],
  },
  {
    title: 'Frameworks y Librerías',
    front: ['ASP.NET Core', 'Entity Framework', 'React', 'TailwindCSS'],
    back: ['Backend Web', 'ORM para SQL', 'Frontend JS', 'Framework de estilos'],
  },
];

export default function SkillsCarousel() {
return (
<div className="py-8 px-4 sm:px-8">
  <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
    {skills.map((skill, i) => (
      <div
        key={i}
        className="w-full max-w-xs md:w-72 min-h-80 perspective"
      >
      <div className="relative w-full h-full min-h-80 transition-transform duration-700 preserve-3d hover:rotate-y-180">

          
          {/* Front */}
          <div className="absolute top-0 left-0 w-full h-full bg-white text-black rounded-xl shadow-xl p-4 backface-hidden overflow-y-auto">
            <h3 className="text-lg font-bold mb-2 text-center">{skill.title}</h3>
            <ul className="list-disc list-inside space-y-1">
              {skill.front.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Back */}
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 text-black rounded-xl shadow-xl p-4 rotate-y-180 backface-hidden overflow-y-auto">
            <h3 className="text-lg font-bold mb-2 text-center">Detalles</h3>
            <ul className="list-disc list-inside space-y-1">
              {skill.back.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>

);

}
