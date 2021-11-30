import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import BarChart from './components/BarChart/index.js';
import Input from './components/Input/index.js';
import Label from './components/Label/index.js';
import { characterDetails } from './getCharacter';

function App() {
    let firstGenerationPokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

    const [pokemonData, setPokemonData] = useState(0);
    useEffect(() => {
        getData(firstGenerationPokeURL);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        console.log(pokemonData);
    }, [pokemonData]);

    async function getData(pokeURL) {
        const inputData = await characterDetails(pokeURL);
        setPokemonData(inputData);
    }

    function handleURL(e) {
        e.preventDefault();
        let value1 = e.target[0].value;
        console.log(value1);
        firstGenerationPokeURL = `https://pokeapi.co/api/v2/pokemon?limit=${value1}`;
        getData(firstGenerationPokeURL);
        App.forceUpdate();
    }

    return (
        <div className="App">
            <h1>Pokemon Height/Weight comparison</h1>
            <form onSubmit={handleURL}>
                <Label name="Value" value={`Max value`}></Label>
                <br></br>
                <Input name="first-value" min="1" max="30"></Input>
                <button type="submit">Submit</button>
            </form>
            {pokemonData && <BarChart data={pokemonData}></BarChart>}
        </div>
    );
}

export default App;
