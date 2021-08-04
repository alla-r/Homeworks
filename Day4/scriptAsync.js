const requestURL = "https://pokeapi.co/api/v2/pokemon";

async function loadJson(method, url, body = null) {
  let response = await fetch(url, {
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

async function getPokemonsFromServer(numberOfPokemons = 10){
  await loadJson("GET", `${requestURL}/?limit=${numberOfPokemons}`)
    .then(data => console.log(data.results))
    .catch(err => console.log(err))
}
getPokemonsFromServer();


async function getPokemonDetails(numberOfPokemons = 10){
  const arrOfPromises = [];
  for (let i = 1; i <= numberOfPokemons; i++) {
    arrOfPromises.push(loadJson("GET", `${requestURL}/${i}/`))
  }

  const pokemonDetails = await Promise.all(arrOfPromises)
    .then(pokemons => {
      localStorage.setItem("pokemons", JSON.stringify(pokemons.map(pokemon => ({
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        id: pokemon.id
      }))));

      return pokemons.map(pokemon => ({
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        id: pokemon.id
      }));
    })

  
  return pokemonDetails;
}

// const pokemonsDetails = getPokemonDetails();
// pokemonsDetails.then(details => sortByHeight(details))
// pokemonsDetails.then(details => sortByWeight(details))
sortByHeight();
sortByWeight();

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