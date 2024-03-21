import axios from "axios";

async function getAllPokemons(limited) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limited}&offset=0`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

async function getPokemon(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function getPokemonById(id) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const data = {
    getAllPokemons,
    getPokemon,
    getPokemonById,
}

export default data;