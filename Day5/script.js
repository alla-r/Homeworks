import Pokeapi from './components/ApiService.js';
import UI from './components/UI.js';
import Pokemon from './components/Pokemon.js';
import Validator from './components/Validator.js';
import Error from './components/Error.js';

const loader = document.querySelector('.loader-container');

const loadData = async (e) => {
  e.preventDefault();
  
  const searchInput = document.getElementById('search-input');

  if (Validator.validateInput(searchInput.value)) {
    const [fromId, toId] = searchInput.value.split("-");
    loader.classList.toggle('hide');

    try {
      const pokemons = await Pokeapi.getPokemons(toId);
      const pokemonsFormatted = pokemons.slice(fromId - 1, toId + 1);
      loader.classList.toggle('hide');
      UI.renderAllPokemons(pokemonsFormatted);
      document.querySelectorAll('.name-link').forEach(card => card.addEventListener("click", loadPokemonDetails));
    } catch (err) {
      loader.classList.toggle('hide');
      Error.showError("Something went wrong");
    }
  } else {
    Error.showInputError(document.querySelector('.error'));
  }
}

const loadPokemonDetails = async (e) => {
  e.preventDefault();

  const url = e.target.dataset.url;
  loader.classList.toggle('hide');

  try {
    const pokemonData = await Pokeapi.getPokemonByURL(url);
    const pokemon = new Pokemon(pokemonData);
    UI.showPokemonDetails(pokemon);
    loader.classList.toggle('hide');
  } catch (err) {
    loader.classList.toggle('hide');
    Error.showError("Something went wrong");
  }
}

const form = document.getElementById('form');

form.addEventListener("submit", loadData);
UI.closeModalBtn.addEventListener('click', UI.toggleModal);
window.addEventListener('click', UI.clickOutsideModalHandler);