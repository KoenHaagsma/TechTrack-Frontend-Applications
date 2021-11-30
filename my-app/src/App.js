import { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart/index.js';
import Input from './components/Input/index.js';
import Label from './components/Label/index.js';
import { characterDetails } from './getCharacter';

// test

function App() {
    let firstGenerationPokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=14';

    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        getData(firstGenerationPokeURL);
    }, [firstGenerationPokeURL]);

    useEffect(() => {
        console.log(pokemonData);
    }, [pokemonData]);

    async function getData(pokeURL) {
        const inputData = await characterDetails(pokeURL);
        setPokemonData(inputData);
    }

    function handleURL(e) {
        e.preventDefault();
        firstGenerationPokeURL = `https://pokeapi.co/api/v2/pokemon?limit=${e.target[0].value}&offset=${e.target[1].value}`;
        getData(firstGenerationPokeURL);
    }

    return (
        <div className="App">
            <h1>Pokemon Height/Weight comparison</h1>
            <form onSubmit={handleURL}>
                <Label name="Value" value={`Select a value between 1 and 20`}></Label>
                <br></br>
                <Input name="first-value" min="1"></Input>
                <Input name="second-value" min="1"></Input>
                <button type="submit">Submit</button>
            </form>
            {pokemonData && <BarChart data={pokemonData}></BarChart>}
        </div>
    );
}

export default App;
