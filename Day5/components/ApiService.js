class Pokeapi {
    static BASE_URL = "https://pokeapi.co/api/v2/pokemon";

    static getPokemons = async (number) => {
        const response = await fetch(`${Pokeapi.BASE_URL}/?limit=${number}`);
        if (response.status === 200) {
            let json = await response.json();
            // console.log(json.results);
            return json.results;
        } else {
            // add err component
            throw new Error(response.status);
        }    
    }

    static getPokemonByURL = async (url) => {
        const response = await fetch(url);
        if (response.status === 200) {
            let json = await response.json();
            return json;
        } else {
            throw new Error(response.status);
        } 
    }
}

export default Pokeapi;