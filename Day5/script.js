import Pokeapi from './components/ApiService.js';
import UI from './components/UI.js';
import Pokemon from './components/Pokemon.js';
import Validator from './components/Validator.js';

const loadData = async (e) => {
  e.preventDefault();
  // add validateInput();
  const searchInput = document.getElementById('search-input');
  if (Validator.validateInput(searchInput.value)) {
    const [fromId, toId] = searchInput.value.split("-");

    try {
      const pokemons = await Pokeapi.getPokemons(toId);
      const pokemonsFormatted = pokemons.slice(fromId - 1, toId + 1);
      UI.renderAllPokemons(pokemonsFormatted);
      document.querySelectorAll('.name-link').forEach(card => card.addEventListener("click", loadPokemonDetails));
    } catch (err) {
      console.error(err);
    }
  }
}

const loadPokemonDetails = async (e) => {
  e.preventDefault();
  const url = e.target.dataset.url;
  try {
    const pokemonData = await Pokeapi.getPokemonByURL(url);
    // console.log(pokemonData);
    const pokemon = new Pokemon(pokemonData);
    // console.log(pokemon);
    UI.showPokemonDetails(pokemon);
  } catch (err) {
    console.error(err);
  }
}

const form = document.getElementById('form');

UI.closeModalBtn.addEventListener('click', UI.toggleModal);
window.addEventListener('click', UI.clickOutsideModalHandler);
form.addEventListener("submit", loadData);