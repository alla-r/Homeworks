class UI {
  static modal = document.querySelector('.modal');
  static modalName = document.querySelector('.modal-header .name');
  static modalBody = document.querySelector('.modal-body');
  static closeModalBtn = document.querySelector('.closeBtn');
  static pokemonsContainer = document.querySelector('.result');

  static toggleModal = () => {
    UI.modal.classList.toggle("hide");
  }

  static clickOutsideModalHandler = (e) => {
    if (e.target === UI.modal) {
      this.toggleModal();
    }
  }

  static renderAllPokemons = (pokemons) => {
    const outputArr = pokemons.map(pokemon => (`
    <div class="pokemon-card">
      <a class="name-link">  
        <h4 class="clickable-name" data-url=${pokemon.url}>${pokemon.name}</h4>
      </a>
    </div>
    `));
  
    UI.pokemonsContainer.insertAdjacentHTML('beforeend', outputArr.join(''));
  }

  static showPokemonDetails = (pokemon) => {
    UI.modalName.innerHTML = pokemon.name;
    UI.modalBody.innerHTML = `
      <div class="img-container">
        <img src=${pokemon.img} alt="pokemons picture">
      </div>
      <div class="description">
        <div class="row">
          <p class="title">Height:</p>
          <p class="value">${pokemon.height}</p>
        </div>
        <div class="row">
          <p class="title">Weight:</p>
          <p class="value">${pokemon.weight}</p>
        </div>
        <div class="row">
          <p class="title">Abilities:</p>
          <p class="value">${pokemon.abilities}</p>
        </div>
        <div class="row">
          <p class="title">Experience:</p>
          <p class="value">${pokemon.experience}</p>
        </div>
      </div>
    `;

    UI.toggleModal();
  }
}

export default UI;