class Pokemon {
  constructor(name, front, back) {
    this.name = name;
    this.front = front;
    this.back = back;
  }

  static findPokemon(search) {
    if (search) {
      return json["pokemons"].filter( (pokemon) => { return pokemon.name.includes(search) } );
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
      const newPokemon = new Pokemon(pokemon.name, pokemon.sprites["front"], pokemon.sprites["back"]);
      pokemonContainer.append(newPokemon.render());
    } );
  }

  render() {
    //make div for pokemon
    const newPokemonContainer = document.createElement("div");
    newPokemonContainer.setAttribute("class", "pokemon-container");
    //make frame to hold pokemon
    const newPokemonFrame = document.createElement("div");
    newPokemonFrame.setAttribute("style", "width:230px;margin:10px;background:#fecd2f;color:#2d72fc");
    newPokemonFrame.setAttribute("class", "pokemon-frame");
    //make pokemon name header
    const pokemonName = document.createElement("h1");
    pokemonName.setAttribute("class", "center-text");
    pokemonName.innerText = this.name;
    //make outer frame for pokemon image
    const outerImageFrame = document.createElement("div");
    outerImageFrame.setAttribute("style", "width:239px;margin:auto");
    //make inner frame for pokemon image
    const innerImageFrame = document.createElement("div");
    innerImageFrame.setAttribute("style", "width:96px;margin:auto");
    //get front image
    const image = document.createElement("img");
    image.setAttribute("src", this.front)
    //append image to inner frame
    innerImageFrame.append(image);
    //append inner image frame to outer image frame
    outerImageFrame.append(innerImageFrame);
    //make flip card section
    const flipCardSection = document.createElement("p");
    flipCardSection.setAttribute("style", "padding:10px;");
    flipCardSection.setAttribute("class", "center-text flip-image");
    flipCardSection.setAttribute("data-pokename", this.name);
    flipCardSection.setAttribute("data-action", "flip-image");
    flipCardSection.innerText = "flip card";

    flipCardSection.addEventListener('click', function(e) {
      (image.src === this.front) ? image.src = this.back : image.src = this.front
    }.bind(this));

    //append name, front image, and flip card section to frame
    newPokemonFrame.append(pokemonName, outerImageFrame, flipCardSection);
    //append new frame to container
    newPokemonContainer.append(newPokemonFrame);
    //return new container
    return newPokemonContainer;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("pokemon-search-input")
  searchInput.addEventListener('keyup', Pokemon.filter)
})
