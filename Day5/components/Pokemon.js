class Pokemon {
  constructor({id, name, sprites: images, height, weight, abilities, base_experience}) {
    this.id = id;
    this.name = name;
    this.img = images.other["official-artwork"].front_default;
    this.height = height;
    this.weight = weight;
    this.experience = base_experience;
    this.abilities = abilities.map(ability => ability.ability.name).join(', ')
  }
}

export default Pokemon;