const form = document.getElementById('form');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

const requestURL = "https://pokeapi.co/api/v2/pokemon";

form.addEventListener("submit", e => {
  e.preventDefault();
  // add validateInput();

  const [fromId, toId] = searchInput.value.split("-");
  console.log(fromId);
  console.log(toId);

  console.log('search');
  searchPokemons(toId);
})

async function searchPokemons(numberOfPokemons) {
  try {
    const pokemonsJson = await loadJson("GET", `${requestURL}/?limit=${numberOfPokemons}`);
    const pokemons = pokemonsJson.results;
    console.log(pokemons);

  } catch (err) {
    // make showError()
    console.error(err);
  }
}

async function loadJson(method, url, body = null) {
  const response = await fetch(url, {
    method: method,
    body: body
  })
  if (response.status === 200) {
    let json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}

// async function getPokemonsFromServer(numberOfPokemons = 10){
//   try {
//     const pokemonsJson = await loadJson("GET", `${requestURL}/?limit=${numberOfPokemons}`);
//     const pokemons = pokemonsJson.results;
//     console.log(pokemons);
//   } catch(err) {
//     console.error(err);
//   }
// }
// getPokemonsFromServer();


async function getPokemonDetails(numberOfPokemons = 10){
  const arrOfPromises = [];
  for (let i = 1; i <= numberOfPokemons; i++) {
    arrOfPromises.push(loadJson("GET", `${requestURL}/${i}/`))
  }

  try {
    const pokemonDetails = await Promise.all(arrOfPromises);
    const pokemonDetailsFormatted = pokemonDetails.map(pokemon => ({
      name: pokemon.name,
      weight: pokemon.weight,
      height: pokemon.height,
      id: pokemon.id
    }));

    localStorage.setItem("pokemons", JSON.stringify(pokemonDetailsFormatted));
    sortByHeight(pokemonDetailsFormatted);
    sortByWeight(pokemonDetailsFormatted);
    
    return pokemonDetailsFormatted;
  } catch(err) {
    console.error(err);
  }
}
getPokemonDetails();

// sortByHeight();
// sortByWeight();

async function sortByHeight(details = null) {
  const pokemons = details ? details : await getPokemonDetails();
  if (pokemons) {
    pokemons.sort((pokemon1, pokemon2) => pokemon1.height - pokemon2.height);
    console.log('pokemons sorted by height:');
    console.log(pokemons)
    sessionStorage.setItem("pokemonsSortedByHeight", JSON.stringify(pokemons));
  }
}

async function sortByWeight(details = null) {
  const pokemons = details ? details : await getPokemonDetails();
  if (pokemons) {
    pokemons.sort((pokemon1, pokemon2) => pokemon1.weight - pokemon2.weight);
    console.log('pokemons sorted by weight:');
    console.log(pokemons)
    sessionStorage.setItem("pokemonsSortedByWeight", JSON.stringify(pokemons));
  }
}