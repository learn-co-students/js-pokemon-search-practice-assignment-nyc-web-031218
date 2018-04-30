
class Pokemon {
  constructor(name, front, back) {
    this.name = name;
    this.front = front;
    this.back = back;
  }
  static findPokemon(search) {
    if (search) {
      return json.pokemons.filter( (pokemon) => {
        return pokemon.name.includes(search);
      } );
    } else {
      return [];
    }
  }
  static filter(event) {
    const pokemonContainer = document.querySelector("#pokemon-container div");
    //clear page first before appending for further searches
    pokemonContainer.innerHTML = "";

    let searchValue = document.getElementById("pokemon-search-input").value.toLowerCase();
    let filteredPokemon = Pokemon.findPokemon(searchValue);
    filteredPokemon.forEach( (pokemon) => {
      const newPokemon = new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back);
      pokemonContainer.append(newPokemon.render());
    } );
  }


  render() {
    const newPokemonContainer = document.createElement("div");
    newPokemonContainer.setAttribute("class", "pokemon-container");

    const newPokemonFrame = document.createElement("div");
    newPokemonFrame.setAttribute("style", "width:230px;margin:10px;background:#fecd2f;color:#2d72fc");
    newPokemonFrame.setAttribute("class", "pokemon-frame");

    const pokemonName = document.createElement("h1");
    pokemonName.setAttribute("class", "center-text");
    pokemonName.innerText = this.name;

    const outerImageFrame = document.createElement("div");
    outerImageFrame.setAttribute("style", "width:239px;margin:auto");

    const innerImageFrame = document.createElement("div");
    innerImageFrame.setAttribute("style", "width:96px;margin:auto");

    const image = document.createElement("img");
    image.setAttribute("src", this.front);

    innerImageFrame.append(image);

    outerImageFrame.append(innerImageFrame);

    const flipCardSection = document.createElement("p");
    flipCardSection.setAttribute("style", "padding:10px;");
    flipCardSection.setAttribute("class", "center-text flip-image");
    flipCardSection.setAttribute("data-pokename", this.name);
    flipCardSection.setAttribute("data-action", "flip-image");
    flipCardSection.innerText = "flip card";

    flipCardSection.addEventListener('click', (e) =>
      image.src === this.front ? image.src = this.back : image.src = this.front
    );

    newPokemonFrame.append(pokemonName, outerImageFrame, flipCardSection);
    newPokemonContainer.append(newPokemonFrame);
    return newPokemonContainer;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("pokemon-search-input");
  searchInput.addEventListener('keyup', Pokemon.filter);
});
