import React, { useEffect, useState } from "react";

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((data) => {
       
        const lista = data.results.map( (res) => 
        fetch(res.url).then( (details) =>  details.json()));

        Promise.all(lista).then( (details) => {

                setPokemons(details);
     
        })
      

  
      });
  }, []);

  
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-2xl font-bold text-center mb-6">Pokémon Cards</h1>

      {/* Cartas tipo Pokédex */}
      <div className="py-8 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="w-[180px] h-[220px] perspective"
            >
              <div className="relative w-full h-[220px] transition-transform duration-700 preserve-3d hover:rotate-y-180">

                
                {/* Front */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-600 to-purple-700 text-white text-black rounded-xl shadow-xl p-2 backface-hidden overflow-y-auto">
                  <h3 className="text-lg font-bold mb-2 text-center">
                    {pokemon.name}
                  </h3>
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="mx-auto w-[96px] h-[96px] md:w-[112px] md:h-[112px]"
                  />
                </div>

                {/* Back */}
                <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 text-black rounded-xl shadow-xl p-2 rotate-y-180 backface-hidden overflow-y-auto">
                  <h3 className="text-lg font-bold mb-2 text-center">
                    Detalles
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Tipo:</strong> {pokemon.types.map((t) => t.type.name).join(", ")}</li>
                    <li><strong>Peso:</strong> {pokemon.weight}</li>
                    <li><strong>Altura:</strong> {pokemon.height}</li>
                    <li><strong>Experiencia base:</strong> {pokemon.base_experience}</li>
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );


}

export default Pokemon;
