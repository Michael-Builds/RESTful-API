import React, { useState, useEffect } from "react";
import axios from "axios";
import './Pokemon.css'

const Pokemon = () => {
  const [num, setNum] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setPokemonData(response.data);
    }
    fetchData();
  }, [num]);

  return (
    <div className="container">
      <h1 className="title">You Chose value {num} </h1>
      <select  className="select"  name="" id="" value={num} onChange={(event) => setNum(event.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      {pokemonData ? (
        <div className="pokemon" >
          <h2 className="pokemon-name">{pokemonData.name}</h2>
          <img className="pokemon-image" src={pokemonData.sprites.front_default} alt={pokemonData.name}  />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>


  );
};

export default Pokemon;
