const requestURL = "https://pokeapi.co/api/v2/pokemon";

function sendRequest(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: body
  }).then(response => response.json());
}

function getPokemonsFromServer(numberOfPokemons = 10){
  return sendRequest("GET", `${requestURL}/?limit=${numberOfPokemons}`)
    .then(data => data.results)
    .catch(err => console.log(err))
}

const tenPokemons = getPokemonsFromServer();
const printPokemons = () => {
  tenPokemons.then(arrOfPokemons => console.log(arrOfPokemons))
}
printPokemons();

function getPokemonDetails(numberOfPokemons = 10){
  const arrOfPromises = [];
  for (let i = 1; i <= numberOfPokemons; i++) {
    arrOfPromises.push(sendRequest("GET", `${requestURL}/${i}/`))
  }

  return Promise.all(arrOfPromises).then(pokemons => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons.map(pokemon => ({
      name: pokemon.name,
      weight: pokemon.weight,
      height: pokemon.height,
      id: pokemon.id
    }))))
  })
}

getPokemonDetails();
function sortByHeight() {

}

function sortByWeight() {
  
}

/*
({
        
      })
      */