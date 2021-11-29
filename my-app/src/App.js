import { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { characterDetails } from './getCharacter';

// test

function App() {
    const firstGenerationPokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        getData(firstGenerationPokeURL);
    }, []);

    useEffect(() => {
        console.log(pokemonData);
    }, [pokemonData]);

    async function getData(pokeURL) {
        const inputData = await characterDetails(pokeURL);
        setPokemonData(inputData);
    }

    return (
        <div className="App">
            <h1>Pokemon Height/Weight comparison</h1>
            {pokemonData && <BarChart data={pokemonData}></BarChart>}
        </div>
    );
}

export default App;
