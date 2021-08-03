const requestURL = "https://pokeapi.co/api/v2/pokemon";

function loadJson(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: body
  }).then(response => response.json());
}

function getPokemonsFromServer(numberOfPokemons = 10){
  return loadJson("GET", `${requestURL}/?limit=${numberOfPokemons}`)
    .then(data => console.log(data.results))
    .catch(err => console.log(err))
}
getPokemonsFromServer();


function getPokemonDetails(numberOfPokemons = 10){
  const arrOfPromises = [];
  for (let i = 1; i <= numberOfPokemons; i++) {
    arrOfPromises.push(loadJson("GET", `${requestURL}/${i}/`))
  }

  return Promise.all(arrOfPromises)
    .then(pokemons => {
      localStorage.setItem("pokemons", JSON.stringify(pokemons.map(pokemon => ({
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        id: pokemon.id
      }))))
    })
    .then(() => sortByHeight())
    .then(() => sortByWeight())
}
getPokemonDetails();

function sortByHeight() {
  const pokemons = JSON.parse(localStorage.getItem("pokemons"));
  if (pokemons) {
    pokemons.sort((pokemon1, pokemon2) => pokemon1.height - pokemon2.height);
    console.log('pokemons sorted by height:');
    console.log(pokemons)
    sessionStorage.setItem("pokemonsSortedByHeight", JSON.stringify(pokemons));
  }
}

function sortByWeight() {
  const pokemons = JSON.parse(localStorage.getItem("pokemons"));
  if (pokemons) {
    pokemons.sort((pokemon1, pokemon2) => pokemon1.weight - pokemon2.weight);
    console.log('pokemons sorted by weight:');
    console.log(pokemons)
    sessionStorage.setItem("pokemonsSortedByWeight", JSON.stringify(pokemons));
  }
}