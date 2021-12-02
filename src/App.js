import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import BarChart from './components/BarChart/index.js';
import Header from './compositions/Header/index.js';
import Form from './compositions/Form/index.js';
import { characterDetails } from './getCharacter';

function App() {
    let firstGenerationPokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    const [pokemonData, setPokemonData] = useState();

    useEffect(() => {
        // getData(firstGenerationPokeURL);
        characterDetails(firstGenerationPokeURL).then((d) => {
            setPokemonData(d);
        });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        console.log(pokemonData);
    }, [pokemonData]);

    async function handleURL(e) {
        e.preventDefault();
        let value1 = e.target[0].value;
        console.log(value1);
        const inputData = await characterDetails(`https://pokeapi.co/api/v2/pokemon?limit=${value1}`);
        setPokemonData(inputData);
    }

    return (
        <div className="App">
            <Header></Header>
            <form onSubmit={handleURL}>
                <Form></Form>
            </form>
            <div className="chart-container">{pokemonData && <BarChart data={pokemonData}></BarChart>}</div>
        </div>
    );
}

export default App;
